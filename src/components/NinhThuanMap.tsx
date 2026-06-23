import { useState } from 'react'
import { PRODUCTS, type Product } from '../data/products'
import { useT } from '../i18n'
import './NinhThuanMap.css'

interface NinhThuanMapProps {
  /** Called when a hotspot's "read story" is triggered (scrolls to Section 4). */
  onSelect: (productId: string) => void
}

const SPOTS: { x: number; y: number }[] = [
  { x: 4700, y: 8270 },
  { x: 4760, y: 8330 },
  { x: 4670, y: 8380 },
  { x: 4830, y: 8410 },
  { x: 4740, y: 8450 },
  { x: 4650, y: 8510 },
  { x: 4790, y: 8530 },
  { x: 4720, y: 8580 },
  { x: 4800, y: 8640 },
  { x: 4730, y: 8700 },
  { x: 4780, y: 8750 },
  { x: 4810, y: 8800 },
]

export default function NinhThuanMap({ onSelect }: NinhThuanMapProps) {
  const t = useT()
  const items: Product[] = PRODUCTS.filter((p) => p.provinceKey === 'vn-nt').slice(0, 12)
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="ntmap">
      <div className="ntmap__panel">
        {/* decorative province silhouette + sun + rays */}
        <svg className="ntmap__bg" viewBox="4525 8132 558 738">
          <defs>
            <radialGradient id="ntSun" cx="78%" cy="12%" r="55%">
              <stop offset="0%" stopColor="#ffe9a8" />
              <stop offset="100%" stopColor="#ffe9a8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ntLand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bff0c8" />
              <stop offset="100%" stopColor="#7fd8a0" />
            </linearGradient>
          </defs>
          <rect x="4525" y="8132" width="558" height="738" fill="url(#ntSun)" />
          <circle className="ntmap__sun" cx="4980" cy="8220" r="42" />
          <g className="ntmap__land-group">
            <path
              className="ntmap__land"
              fill="url(#ntLand)"
              d="M5004 8466L5033 8504L4996 8551L4991 8576L4957 8627L4907 8618L4889 8578L4872 8582L4887 8605L4879 8667L4874 8785L4826 8820L4793 8810L4765 8763L4695 8750L4688 8712L4653 8693L4639 8648L4583 8636L4575 8581L4622 8530L4628 8505L4601 8470L4593 8434L4624 8335L4631 8269L4624 8226L4649 8182L4692 8199L4715 8223L4766 8347L4786 8360L4879 8380L4903 8405L4918 8444L4939 8460L5004 8466Z"
            />
            <path
              className="ntmap__coast"
              fill="none"
              d="M5004 8466L5033 8504L4996 8551L4991 8576L4957 8627L4907 8618L4889 8578L4872 8582L4887 8605L4879 8667L4874 8785L4826 8820"
            />
            {items.map((p, i) => {
              const pos = SPOTS[i] ?? { x: 4750, y: 8500 }
              const isActive = active === i
              const sz = 46
              return (
                <foreignObject
                  key={p.id}
                  x={pos.x - sz / 2}
                  y={pos.y - sz / 2}
                  width={sz}
                  height={sz}
                  overflow="visible"
                >
                  <button
                    type="button"
                    className={`ntmap__spot ${isActive ? 'is-active' : ''}`}
                    style={{ animationDelay: `${i * 0.18}s` }}
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
                </foreignObject>
              )
            })}
          </g>
        </svg>

        <span className="ntmap__tag">{t.map.region}</span>
      </div>

      <div className="ntmap__footer">
        <span className="ntmap__footer-pulse" />
        <span className="ntmap__footer-text">
          <strong>{items.length}</strong> {t.map.legendDelicacies} · {t.map.hint}
        </span>
      </div>
    </div>
  )
}
