import { useMemo, useState } from 'react'
import { PRODUCTS, formatVND, type Product } from '../data/products'
import { PROVINCES } from '../data/provinces'
import './Marketplace.css'

interface MarketplaceProps {
  filterProvinceKey: string | null
  onClearProvinceFilter: () => void
  onAddToCart: (p: Product) => void
}

const ALL = 'Tất cả'

export default function Marketplace({
  filterProvinceKey,
  onClearProvinceFilter,
  onAddToCart,
}: MarketplaceProps) {
  const [tag, setTag] = useState<string>(ALL)
  const [query, setQuery] = useState('')

  const tags = useMemo(() => {
    const s = new Set<string>()
    PRODUCTS.forEach((p) => p.tags.forEach((t) => s.add(t)))
    return [ALL, ...Array.from(s).sort()]
  }, [])

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (filterProvinceKey && p.provinceKey !== filterProvinceKey) return false
      if (tag !== ALL && !p.tags.includes(tag)) return false
      if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false
      return true
    })
  }, [filterProvinceKey, tag, query])

  const filterProvinceName = filterProvinceKey
    ? PROVINCES[filterProvinceKey]?.name
    : null

  return (
    <div className="market">
      <div className="market__toolbar">
        <input
          className="market__search"
          placeholder="🔎 Tìm nông sản..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="market__tags">
          {tags.map((t) => (
            <button
              key={t}
              className={`market__tag${tag === t ? ' is-active' : ''}`}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {filterProvinceName && (
        <div className="market__filterchip">
          Đang lọc theo tỉnh: <strong>{filterProvinceName}</strong>
          <button onClick={onClearProvinceFilter} aria-label="Bỏ lọc">✕</button>
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="market__empty">
          Chưa có sản phẩm niêm yết cho lựa chọn này. Hãy thử tỉnh hoặc danh mục khác.
        </p>
      ) : (
        <div className="market__grid">
          {filtered.map((p) => (
            <article key={p.id} className="pcard">
              <div className="pcard__media">{p.emoji}</div>
              <div className="pcard__body">
                <div className="pcard__top">
                  <h3 className="pcard__name">{p.name}</h3>
                  {p.certified && <span className="pcard__badge">✓ Đạt chuẩn</span>}
                </div>
                <p className="pcard__origin">
                  📍 {PROVINCES[p.provinceKey]?.name} · {p.producer}
                </p>
                <div className="pcard__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="pcard__tag">{t}</span>
                  ))}
                </div>
                <div className="pcard__foot">
                  <span className="pcard__price">
                    {formatVND(p.price)}
                    <small> / {p.unit}</small>
                  </span>
                  <button className="pcard__buy" onClick={() => onAddToCart(p)}>
                    + Đặt mua
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
