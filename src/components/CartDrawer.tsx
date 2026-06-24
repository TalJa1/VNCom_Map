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

function SuccessDialog({
  open,
  total,
  onClose,
}: {
  open: boolean
  total: number
  onClose: () => void
}) {
  const [stage, setStage] = useState<'idle' | 'enter' | 'visible'>('idle')

  useEffect(() => {
    if (open) {
      setStage('enter')
      const t = setTimeout(() => setStage('visible'), 50)
      return () => clearTimeout(t)
    }
    setStage('idle')
  }, [open])

  if (stage === 'idle') return null

  return (
    <div className={`success-overlay ${stage === 'visible' ? 'is-visible' : ''}`} onClick={onClose}>
      <Confetti active={stage === 'visible'} />
      <div className="success-dialog" onClick={(e) => e.stopPropagation()}>
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

      <SuccessDialog open={showSuccess} total={total} onClose={handleSuccessClose} />
    </>
  )
}
