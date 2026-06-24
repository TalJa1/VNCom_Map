import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { PRODUCTS, formatVND, type Product } from '../data/products'
import { PROVINCES } from '../data/provinces'
import './Marketplace.css'

interface MarketplaceProps {
  filterProvinceKey: string | null
  onClearProvinceFilter: () => void
  onAddToCart: (p: Product) => void
}

const ALL = 'Tất cả'
const INITIAL_COUNT = 8
const LOAD_MORE_COUNT = 10

export default function Marketplace({
  filterProvinceKey,
  onClearProvinceFilter,
  onAddToCart,
}: MarketplaceProps) {
  const [tag, setTag] = useState<string>(ALL)
  const [query, setQuery] = useState('')
  const [visible, setVisible] = useState(INITIAL_COUNT)

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

  useEffect(() => {
    setVisible(INITIAL_COUNT)
  }, [filterProvinceKey, tag, query])

  const shown = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  const prevVisible = useRef(0)
  const gridRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const animateCard = useCallback((el: HTMLElement, delayIdx: number) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px) scale(0.95)'
    requestAnimationFrame(() => {
      el.style.transition = `opacity 0.45s ${delayIdx * 0.07}s ease, transform 0.45s ${delayIdx * 0.07}s cubic-bezier(0.22,1,0.36,1)`
      el.style.opacity = '1'
      el.style.transform = 'translateY(0) scale(1)'
    })
  }, [])

  useEffect(() => {
    observerRef.current?.disconnect()
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const idx = Number(el.dataset.animIdx ?? 0)
            animateCard(el, idx % 4)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.1 },
    )
    observerRef.current = obs

    const grid = gridRef.current
    if (!grid) return
    const cards = grid.querySelectorAll<HTMLElement>('.pcard')
    const startFrom = prevVisible.current
    cards.forEach((card, i) => {
      if (i < startFrom) return
      card.style.opacity = '0'
      card.style.transform = 'translateY(40px) scale(0.95)'
      card.dataset.animIdx = String(i - startFrom)
      obs.observe(card)
    })
    prevVisible.current = shown.length

    return () => obs.disconnect()
  }, [shown.length, filtered, animateCard])

  useEffect(() => {
    prevVisible.current = 0
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
        <>
          <div className="market__grid" ref={gridRef}>
            {shown.map((p) => (
              <article key={p.id} className="pcard">
                <div className="pcard__media">
                  {p.images && p.images.length > 0 ? (
                    <img src={p.images[0]} alt={p.name} className="pcard__img" />
                  ) : (
                    <span className="pcard__emoji">{p.emoji}</span>
                  )}
                </div>
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

          <div className="market__pagination">
            <span className="market__count">
              {shown.length} / {filtered.length} sản phẩm
            </span>
            {hasMore && (
              <button
                className="market__loadmore"
                onClick={() => setVisible((v) => v + LOAD_MORE_COUNT)}
              >
                Xem thêm sản phẩm
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
