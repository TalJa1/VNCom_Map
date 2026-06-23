import { useState } from 'react'
import { PRODUCTS, type Product } from '../data/products'
import { useT } from '../i18n'
import './NinhThuanMap.css'

interface NinhThuanMapProps {
  /** Called when a hotspot's "read story" is triggered (scrolls to Section 4). */
  onSelect: (productId: string) => void
}

/* Hand-placed hotspot coordinates (% of the panel box). One per delicacy,
 * scattered over the stylised province silhouette. */
const SPOTS: { top: number; left: number }[] = [
  { top: 22, left: 30 },
  { top: 15, left: 55 },
  { top: 30, left: 72 },
  { top: 40, left: 44 },
  { top: 38, left: 20 },
  { top: 52, left: 63 },
  { top: 55, left: 33 },
  { top: 64, left: 50 },
  { top: 48, left: 80 },
  { top: 70, left: 70 },
  { top: 75, left: 40 },
  { top: 84, left: 56 },
]

export default function NinhThuanMap({ onSelect }: NinhThuanMapProps) {
  const t = useT()
  const items: Product[] = PRODUCTS.filter((p) => p.provinceKey === 'vn-nt').slice(0, 12)
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="ntmap">
      <div className="ntmap__panel">
        {/* decorative province silhouette + sun + rays */}
        <svg className="ntmap__bg" viewBox="0 0 400 360" aria-hidden="true">
          <defs>
            <radialGradient id="ntSun" cx="78%" cy="18%" r="60%">
              <stop offset="0%" stopColor="#ffe9a8" />
              <stop offset="100%" stopColor="#ffe9a8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ntLand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bff0c8" />
              <stop offset="100%" stopColor="#7fd8a0" />
            </linearGradient>
          </defs>
          <rect width="400" height="360" fill="url(#ntSun)" />
          <circle className="ntmap__sun" cx="312" cy="64" r="30" />
          <path
            className="ntmap__land"
            fill="url(#ntLand)"
            d="M150 24c40-14 92-6 120 26 26 30 10 64 34 96 20 26 26 58 6 86-22 30-66 38-104 42-44 4-92-2-118-36-24-30-18-72-6-108 10-30 18-72 40-94 8-8 18-12 28-12Z"
          />
          {/* coastline dashes */}
          <path
            className="ntmap__coast"
            fill="none"
            d="M268 50c30 30 12 66 36 100 20 28 26 60 4 88"
          />
        </svg>

        {items.map((p, i) => {
          const pos = SPOTS[i] ?? { top: 50, left: 50 }
          const isActive = active === i
          return (
            <button
              key={p.id}
              type="button"
              className={`ntmap__spot ${isActive ? 'is-active' : ''}`}
              style={{ top: `${pos.top}%`, left: `${pos.left}%`, animationDelay: `${i * 0.18}s` }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onMouseLeave={() => setActive((cur) => (cur === i ? null : cur))}
              onClick={() => onSelect(p.id)}
              aria-label={p.name}
            >
              <span className="ntmap__pulse" />
              <span className="ntmap__dot">{p.emoji}</span>
              {isActive && (
                <span className="ntmap__pop" role="tooltip">
                  <span className="ntmap__pop-label">{t.map.quickTitle}</span>
                  <span className="ntmap__pop-name">{p.name}</span>
                  <span className="ntmap__pop-cta">{t.map.readStory} →</span>
                </span>
              )}
            </button>
          )
        })}

        <span className="ntmap__tag">{t.map.region}</span>
      </div>

      <p className="ntmap__hint">
        <span className="ntmap__hint-dot" />
        {t.map.hint}
      </p>
      <div className="ntmap__count">
        <strong>{items.length}</strong> {t.map.legendDelicacies}
      </div>
    </div>
  )
}
