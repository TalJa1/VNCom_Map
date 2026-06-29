import { useState, useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { formatVND } from '../data/products'
import './PayConfirm.css'

interface OrderData {
  id: string
  total: number
  items: { name: string; qty: number; price: number }[]
}

export default function PayConfirm() {
  const { orderId } = useParams<{ orderId: string }>()
  const [searchParams] = useSearchParams()
  const [phase, setPhase] = useState<'ready' | 'paying' | 'done'>('ready')

  const order = useMemo<OrderData | null>(() => {
    try {
      const d = searchParams.get('d')
      if (!d) return null
      return JSON.parse(decodeURIComponent(escape(atob(d))))
    } catch {
      return null
    }
  }, [searchParams])

  const handlePay = async () => {
    setPhase('paying')
    try {
      await fetch(`https://ntfy.sh/vncom-pay-${orderId}`, {
        method: 'POST',
        body: 'paid',
      })
    } catch {}
    setTimeout(() => setPhase('done'), 1200)
  }

  if (!order) {
    return (
      <div className="paypage">
        <div className="paypage__card">
          <p className="paypage__expired">Đơn hàng không tồn tại hoặc đã hết hạn.</p>
        </div>
      </div>
    )
  }

  if (phase === 'done') {
    return (
      <div className="paypage">
        <div className="paypage__card">
          <div className="paypage__check">
            <svg viewBox="0 0 52 52" width="64" height="64">
              <circle cx="26" cy="26" r="24" fill="none" stroke="#2e8b57" strokeWidth="2.5" />
              <path d="M14 27l7 7 16-16" fill="none" stroke="#2e8b57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="paypage__title paypage__title--success">Thanh toán thành công!</h2>
          <p className="paypage__amount">{formatVND(order.total)}</p>
          <p className="paypage__subtitle">Bạn có thể đóng trang này.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="paypage">
      <div className="paypage__card">
        <div className="paypage__bank-bar">
          <span className="paypage__bank-logo">VietQR</span>
        </div>

        <h2 className="paypage__title">Xác nhận thanh toán</h2>

        <div className="paypage__details">
          <div className="paypage__row">
            <span>Người nhận</span>
            <strong>Nông sản Việt</strong>
          </div>
          <div className="paypage__row">
            <span>Nội dung</span>
            <strong>Thanh toán đơn hàng</strong>
          </div>
          <div className="paypage__divider" />
          {order.items.map((item, i) => (
            <div key={i} className="paypage__row">
              <span>{item.name} x{item.qty}</span>
              <span>{formatVND(item.price * item.qty)}</span>
            </div>
          ))}
          <div className="paypage__divider" />
          <div className="paypage__row paypage__row--total">
            <span>Tổng cộng</span>
            <strong>{formatVND(order.total)}</strong>
          </div>
        </div>

        <button className="paypage__btn" onClick={handlePay} disabled={phase === 'paying'}>
          {phase === 'paying' ? (
            <span className="paypage__btn-loading">
              <span className="paypage__spinner" />
              Đang xử lý...
            </span>
          ) : (
            `Thanh toán ${formatVND(order.total)}`
          )}
        </button>

        <p className="paypage__footer">
          <span className="paypage__lock">🔒</span> Giao dịch được bảo mật bởi VietQR
        </p>
      </div>
    </div>
  )
}
