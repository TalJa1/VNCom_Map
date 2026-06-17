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
}

export default function CartDrawer({
  open,
  items,
  onClose,
  onChangeQty,
  onRemove,
}: CartDrawerProps) {
  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0)

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
                <span className="cart__emoji">{product.emoji}</span>
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
            onClick={() =>
              alert(
                `Cảm ơn bạn! Đơn hàng ${formatVND(total)} đã được ghi nhận (demo).`,
              )
            }
          >
            Thanh toán
          </button>
        </footer>
      </aside>
    </>
  )
}
