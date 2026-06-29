import { useState, useEffect, useCallback } from 'react'
import { formatVND, type Product } from '../data/products'
import './CartDrawer.css'

export interface CartItem {
  product: Product
  qty: number
}

interface CartDrawerProps {
  open: boolean
  items: CartItem[]
  onClose: () => void
  onChangeQty: (id: string, delta: number) => void
  onRemove: (id: string) => void
  onClearCart: () => void
}

function Confetti({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<
    { id: number; x: number; delay: number; dur: number; color: string; size: number; rotation: number }[]
  >([])

  useEffect(() => {
    if (!active) { setParticles([]); return }
    const colors = ['#2e8b57', '#b45309', '#e5b800', '#14532d', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6']
    setParticles(
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.6,
        dur: 1.2 + Math.random() * 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 5 + Math.random() * 7,
        rotation: Math.random() * 360,
      })),
    )
  }, [active])

  if (!active) return null
  return (
    <div className="confetti-container" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.x}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            backgroundColor: p.color,
            width: p.size,
            height: p.size * 0.6,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
    </div>
  )
}

function encodeQR(text: string, size: number) {
  const modules = generateQRMatrix(text)
  const n = modules.length
  const cellSize = size / n
  const rects: { x: number; y: number; w: number; h: number }[] = []
  for (let r = 0; r < n; r++)
    for (let c = 0; c < n; c++)
      if (modules[r][c])
        rects.push({ x: c * cellSize, y: r * cellSize, w: cellSize, h: cellSize })
  return { rects, total: size }
}

function generateQRMatrix(data: string): boolean[][] {
  const size = 29
  const grid: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false))

  const drawFinderPattern = (row: number, col: number) => {
    for (let r = -1; r <= 7; r++)
      for (let c = -1; c <= 7; c++) {
        const rr = row + r, cc = col + c
        if (rr < 0 || rr >= size || cc < 0 || cc >= size) continue
        if (r === -1 || r === 7 || c === -1 || c === 7) grid[rr][cc] = false
        else if (r === 0 || r === 6 || c === 0 || c === 6) grid[rr][cc] = true
        else if (r >= 2 && r <= 4 && c >= 2 && c <= 4) grid[rr][cc] = true
        else grid[rr][cc] = false
      }
  }

  drawFinderPattern(0, 0)
  drawFinderPattern(0, size - 7)
  drawFinderPattern(size - 7, 0)

  for (let i = 8; i < size - 8; i++) {
    grid[6][i] = i % 2 === 0
    grid[i][6] = i % 2 === 0
  }

  const drawAlignmentPattern = (row: number, col: number) => {
    for (let r = -2; r <= 2; r++)
      for (let c = -2; c <= 2; c++) {
        grid[row + r][col + c] =
          Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0)
      }
  }
  drawAlignmentPattern(size - 9, size - 9)

  let hash = 0
  for (let i = 0; i < data.length; i++) {
    hash = ((hash << 5) - hash + data.charCodeAt(i)) | 0
  }
  let seed = Math.abs(hash)
  const rng = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff }

  for (let r = 0; r < size; r++)
    for (let c = 0; c < size; c++) {
      if (r < 9 && c < 9) continue
      if (r < 9 && c >= size - 8) continue
      if (r >= size - 8 && c < 9) continue
      if (r === 6 || c === 6) continue
      if (r >= size - 11 && r <= size - 7 && c >= size - 11 && c <= size - 7) continue
      grid[r][c] = rng() > 0.5
    }

  return grid
}

function QRCodeSVG({ text, size = 180 }: { text: string; size?: number }) {
  const { rects, total } = encodeQR(text, size)
  return (
    <svg width={total} height={total} viewBox={`0 0 ${total} ${total}`}>
      <rect width={total} height={total} fill="#fff" />
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} fill="#1a1a2e" />
      ))}
    </svg>
  )
}

function PaymentFlow({
  open,
  total,
  items,
  onClose,
}: {
  open: boolean
  total: number
  items: CartItem[]
  onClose: () => void
}) {
  const [phase, setPhase] = useState<'idle' | 'qr' | 'processing' | 'success'>('idle')
  const [orderId, setOrderId] = useState('')

  useEffect(() => {
    if (open && phase === 'idle') {
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
      setOrderId(id)
      localStorage.setItem(`pay-order-${id}`, JSON.stringify({
        total,
        items: items.map((i) => ({ name: i.product.name, qty: i.qty, price: i.product.price })),
      }))
      setPhase('qr')
    }
    if (!open) {
      if (orderId) {
        localStorage.removeItem(`pay-order-${orderId}`)
        localStorage.removeItem(`pay-done-${orderId}`)
      }
      setPhase('idle')
      setOrderId('')
    }
  }, [open, phase, total, items, orderId])

  useEffect(() => {
    if (phase !== 'qr' || !orderId) return
    const onStorage = (e: StorageEvent) => {
      if (e.key === `pay-done-${orderId}` && e.newValue === 'true') {
        setPhase('processing')
        setTimeout(() => setPhase('success'), 1500)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [phase, orderId])

  const payUrl = orderId ? `${window.location.origin}/pay/${orderId}` : ''

  const [overlayVisible, setOverlayVisible] = useState(false)
  useEffect(() => {
    if (phase === 'qr' || phase === 'processing' || phase === 'success') {
      const t = setTimeout(() => setOverlayVisible(true), 50)
      return () => clearTimeout(t)
    }
    setOverlayVisible(false)
  }, [phase])

  if (phase === 'idle') return null

  return (
    <div className={`success-overlay ${overlayVisible ? 'is-visible' : ''}`} onClick={phase === 'success' ? onClose : undefined}>
      {phase === 'success' && <Confetti active />}
      <div className="success-dialog" onClick={(e) => e.stopPropagation()}>
        {(phase === 'qr' || phase === 'processing') && (
          <>
            <div className="qr-header">
              <span className="qr-bank-logo">VietQR</span>
            </div>
            <p className="qr-amount">{formatVND(total)}</p>
            <div className="qr-code-wrap">
              <QRCodeSVG text={payUrl} size={180} />
              {phase === 'processing' && <div className="qr-scanning" />}
            </div>
            <p className="qr-instruction">
              {phase === 'processing'
                ? 'Đang xác nhận thanh toán...'
                : 'Quét mã QR bằng điện thoại để thanh toán'}
            </p>
            {phase === 'processing' && (
              <div className="qr-spinner">
                <div className="qr-spinner__ring" />
              </div>
            )}
            <div className="qr-meta">
              <span>Người nhận: <strong>Nông sản Việt</strong></span>
              <span>Nội dung: <strong>Thanh toán đơn hàng</strong></span>
            </div>
          </>
        )}

        {phase === 'success' && (
          <>
            <div className="success-check">
              <svg className="success-check__svg" viewBox="0 0 52 52">
                <circle className="success-check__circle" cx="26" cy="26" r="24" fill="none" />
                <path className="success-check__tick" fill="none" d="M14 27l7 7 16-16" />
              </svg>
            </div>
            <h3 className="success-title">Thanh toán thành công!</h3>
            <p className="success-amount">{formatVND(total)}</p>
            <p className="success-msg">
              Cảm ơn bạn đã ủng hộ nông sản Việt! Đơn hàng của bạn đã được ghi nhận.
            </p>
            <button className="success-btn" onClick={onClose}>
              Tuyệt vời!
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default function CartDrawer({
  open,
  items,
  onClose,
  onChangeQty,
  onRemove,
  onClearCart,
}: CartDrawerProps) {
  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleCheckout = useCallback(() => {
    setShowSuccess(true)
  }, [])

  const handleSuccessClose = useCallback(() => {
    setShowSuccess(false)
    onClearCart()
    onClose()
  }, [onClearCart, onClose])

  return (
    <>
      <div
        className={`cart-overlay${open ? ' is-open' : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside className={`cart${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <header className="cart__head">
          <h3>🛒 Giỏ nông sản</h3>
          <button className="cart__close" onClick={onClose} aria-label="Đóng">✕</button>
        </header>

        {items.length === 0 ? (
          <p className="cart__empty">Giỏ hàng trống. Chọn nông sản từ gian hàng nhé!</p>
        ) : (
          <ul className="cart__list">
            {items.map(({ product, qty }) => (
              <li key={product.id} className="cart__item">
                {product.images && product.images.length > 0 ? (
                  <img src={product.images[0]} alt={product.name} className="cart__thumb" />
                ) : (
                  <span className="cart__emoji">{product.emoji}</span>
                )}
                <div className="cart__info">
                  <strong>{product.name}</strong>
                  <span className="cart__unitprice">
                    {formatVND(product.price)} / {product.unit}
                  </span>
                  <div className="cart__qty">
                    <button onClick={() => onChangeQty(product.id, -1)}>−</button>
                    <span>{qty}</span>
                    <button onClick={() => onChangeQty(product.id, 1)}>+</button>
                    <button className="cart__remove" onClick={() => onRemove(product.id)}>
                      Xóa
                    </button>
                  </div>
                </div>
                <span className="cart__linetotal">
                  {formatVND(product.price * qty)}
                </span>
              </li>
            ))}
          </ul>
        )}

        <footer className="cart__foot">
          <div className="cart__total">
            <span>Tổng cộng</span>
            <strong>{formatVND(total)}</strong>
          </div>
          <button
            className="cart__checkout"
            disabled={items.length === 0}
            onClick={handleCheckout}
          >
            Thanh toán
          </button>
        </footer>
      </aside>

      <PaymentFlow open={showSuccess} total={total} items={items} onClose={handleSuccessClose} />
    </>
  )
}
