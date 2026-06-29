import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatVND } from '../data/products'
import './PayConfirm.css'

export default function PayConfirm() {
  const { orderId } = useParams<{ orderId: string }>()
  const [paid, setPaid] = useState(false)

  const raw = localStorage.getItem(`pay-order-${orderId}`)
  const order = raw ? JSON.parse(raw) as { total: number; items: { name: string; qty: number; price: number }[] } : null

  const handlePay = () => {
    setPaid(true)
    localStorage.setItem(`pay-done-${orderId}`, 'true')
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

  if (paid) {
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

        <button className="paypage__btn" onClick={handlePay}>
          Thanh toán {formatVND(order.total)}
        </button>

        <p className="paypage__footer">Giao dịch được bảo mật bởi VietQR</p>
      </div>
    </div>
  )
}
