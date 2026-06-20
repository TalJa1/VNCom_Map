import { useCallback, useRef, useState } from 'react'
import VietnamMap from './components/VietnamMap'
import Marketplace from './components/Marketplace'
import CartDrawer, { type CartItem } from './components/CartDrawer'
import type { Product } from './data/products'
import './App.css'

function App() {
  const [filterProvinceKey, setFilterProvinceKey] = useState<string | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const marketRef = useRef<HTMLElement>(null)

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const handleViewProducts = useCallback((key: string) => {
    setFilterProvinceKey(key)
    marketRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const addToCart = useCallback((p: Product) => {
    setCart((prev) => {
      const found = prev.find((i) => i.product.id === p.id)
      if (found) {
        return prev.map((i) =>
          i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i,
        )
      }
      return [...prev, { product: p, qty: 1 }]
    })
    setCartOpen(true)
  }, [])

  const changeQty = useCallback((id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.product.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i,
        )
        .filter((i) => i.qty > 0),
    )
  }, [])

  const removeItem = useCallback(
    (id: string) => setCart((prev) => prev.filter((i) => i.product.id !== id)),
    [],
  )

  return (
    <div className="app">
      <header className="nav">
        <div className="nav__brand" onClick={() => scrollTo('home')}>
          <span className="nav__logo">🌾</span>
          <span>
            Nông Sản <strong>Việt</strong>
          </span>
        </div>
        <nav className="nav__links">
          <button onClick={() => scrollTo('home')}>Bản đồ</button>
          <button onClick={() => scrollTo('market')}>Gian hàng</button>
          <button onClick={() => scrollTo('story')}>Câu chuyện</button>
          <button onClick={() => scrollTo('impact')}>Tác động</button>
        </nav>
        <button className="nav__cart" onClick={() => setCartOpen(true)}>
          🛒 Giỏ hàng
          {cartCount > 0 && <span className="nav__cartbadge">{cartCount}</span>}
        </button>
      </header>

      {/* ---------- HOME / MAP ---------- */}
      <section id="home" className="hero">
        <div className="hero__banner">
          <span className="hero__eyebrow">Bản đồ nông sản Việt Nam</span>
          <h1 className="hero__title">
            Mỗi vùng đất, một đặc sản tự hào
          </h1>
          <p className="hero__sub">
            Rê chuột lên bản đồ để khám phá nông sản đặc trưng của 63 tỉnh thành
            và đặt mua trực tiếp từ người nông dân.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollTo('market')}>
              Khám phá gian hàng
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo('story')}>
              Câu chuyện dự án
            </button>
          </div>
        </div>

        <div className="hero__map">
          <VietnamMap
            onViewProducts={handleViewProducts}
          />
        </div>
      </section>

      {/* ---------- MARKETPLACE ---------- */}
      <section id="market" className="section section--market" ref={marketRef}>
        <div className="section__head">
          <span className="section__eyebrow">Niêm yết &amp; mua bán</span>
          <h2>Gian hàng nông sản</h2>
          <p>
            Nông sản được niêm yết minh bạch theo nguồn gốc, giá cả và tiêu chuẩn chất
            lượng — kết nối thẳng từ nhà vườn, hợp tác xã tới tay bạn.
          </p>
        </div>
        <Marketplace
          filterProvinceKey={filterProvinceKey}
          onClearProvinceFilter={() => setFilterProvinceKey(null)}
          onAddToCart={addToCart}
        />
      </section>

      {/* ---------- STORY ---------- */}
      <section id="story" className="section section--story">
        <div className="section__head">
          <span className="section__eyebrow">Câu chuyện dự án</span>
          <h2>Vì sao chúng tôi bắt đầu</h2>
        </div>
        <div className="story">
          <div className="story__lead">
            <p>
              <strong>Nông Sản Việt</strong> ra đời từ một câu hỏi giản dị: tại sao những
              nông sản tuyệt vời của Việt Nam lại thường được bán với giá rẻ, qua nhiều
              khâu trung gian, trong khi người nông dân vẫn chật vật?
            </p>
            <p>
              Chúng tôi xây dựng một bản đồ số kết nối từng vùng đất với đặc sản của nó,
              giúp người tiêu dùng mua tận gốc và người nông dân bán đúng giá trị —
              minh bạch, công bằng và bền vững.
            </p>
          </div>
          <ol className="timeline">
            <li>
              <span className="timeline__year">2023</span>
              <div>
                <h4>Khởi nguồn</h4>
                <p>Khảo sát hơn 200 hợp tác xã và nhà vườn trên khắp ba miền.</p>
              </div>
            </li>
            <li>
              <span className="timeline__year">2024</span>
              <div>
                <h4>Xây nền tảng</h4>
                <p>Số hóa bản đồ nông sản 63 tỉnh thành và chuẩn hóa truy xuất nguồn gốc.</p>
              </div>
            </li>
            <li>
              <span className="timeline__year">2025</span>
              <div>
                <h4>Kết nối thị trường</h4>
                <p>Mở gian hàng trực tuyến, đưa nông sản tới người tiêu dùng cả nước.</p>
              </div>
            </li>
            <li>
              <span className="timeline__year">2026</span>
              <div>
                <h4>Lan tỏa</h4>
                <p>Hướng tới xuất khẩu và nâng tầm thương hiệu nông sản Việt.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ---------- IMPACT ---------- */}
      <section id="impact" className="section section--impact">
        <div className="section__head">
          <span className="section__eyebrow">Tác động xã hội</span>
          <h2>Giá trị chúng tôi tạo ra</h2>
          <p>
            Mỗi đơn hàng là một nhịp cầu giữa thành thị và nông thôn, góp phần xây dựng
            nền nông nghiệp công bằng và bền vững hơn.
          </p>
        </div>
        <div className="impact__grid">
          {[
            { icon: '👨‍🌾', stat: '1.200+', label: 'Hộ nông dân & HTX được kết nối' },
            { icon: '🚜', stat: '63', label: 'Tỉnh thành phủ sóng trên bản đồ' },
            { icon: '💰', stat: '+35%', label: 'Thu nhập trung bình tăng cho nhà nông' },
            { icon: '🌱', stat: '80%', label: 'Sản phẩm đạt chuẩn VietGAP/OCOP' },
          ].map((it) => (
            <div key={it.label} className="impact__card">
              <span className="impact__icon">{it.icon}</span>
              <span className="impact__stat">{it.stat}</span>
              <span className="impact__label">{it.label}</span>
            </div>
          ))}
        </div>
        <div className="impact__pillars">
          <div className="impact__pillar">
            <h4>🤝 Thương mại công bằng</h4>
            <p>Rút ngắn khâu trung gian, người nông dân nhận phần xứng đáng với công sức.</p>
          </div>
          <div className="impact__pillar">
            <h4>🔍 Minh bạch nguồn gốc</h4>
            <p>Mỗi sản phẩm gắn với vùng trồng cụ thể, truy xuất rõ ràng tới tận nhà vườn.</p>
          </div>
          <div className="impact__pillar">
            <h4>♻️ Phát triển bền vững</h4>
            <p>Ưu tiên canh tác sạch, giảm lãng phí và bảo tồn đặc sản bản địa.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__brand">🌾 Nông Sản Việt</div>
        <p>Kết nối nông sản Việt Nam — từ vùng đất tới bữa ăn của bạn.</p>
        <small>© 2026 Nông Sản Việt. Dự án demo phục vụ mục đích trình diễn.</small>
      </footer>

      <button
        className="fab-cart"
        onClick={() => setCartOpen(true)}
        aria-label="Mở giỏ hàng"
      >
        🛒
        {cartCount > 0 && <span className="fab-cart__badge">{cartCount}</span>}
      </button>

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onChangeQty={changeQty}
        onRemove={removeItem}
      />
    </div>
  )
}

export default App
