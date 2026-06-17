import { useState, useRef, useMemo, type MouseEvent } from 'react'
import { vietnamMap } from '../data/vietnamMap'
import { PROVINCES, REGIONS } from '../data/provinces'
import './VietnamMap.css'

interface VietnamMapProps {
  onSelect: (key: string) => void
  selectedKey: string | null
}

interface HoverState {
  key: string
  x: number
  y: number
}

export default function VietnamMap({ onSelect, selectedKey }: VietnamMapProps) {
  const [hover, setHover] = useState<HoverState | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  const hovered = hover ? PROVINCES[hover.key] : undefined

  // Regions present on the map, for the legend.
  const legend = useMemo(() => Object.values(REGIONS), [])

  const handleMove = (e: MouseEvent, key: string) => {
    const rect = wrapRef.current?.getBoundingClientRect()
    if (!rect) return
    setHover({ key, x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div className="vnmap-wrap" ref={wrapRef}>
      <svg
        className="vnmap-svg"
        viewBox={`0 0 ${vietnamMap.width} ${vietnamMap.height}`}
        role="img"
        aria-label="Bản đồ nông sản Việt Nam"
      >
        {vietnamMap.provinces.map((p) => {
          const meta = PROVINCES[p.key]
          const region = meta ? REGIONS[meta.region] : undefined
          const isSelected = selectedKey === p.key
          const isHover = hover?.key === p.key
          return (
            <path
              key={p.key}
              d={p.d}
              className={`vnmap-province${isSelected ? ' is-selected' : ''}`}
              fill={region?.color ?? '#9bbf9b'}
              style={{
                opacity: isHover || isSelected ? 1 : 0.82,
              }}
              onMouseEnter={(e) => handleMove(e, p.key)}
              onMouseMove={(e) => handleMove(e, p.key)}
              onMouseLeave={() => setHover(null)}
              onClick={() => onSelect(p.key)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelect(p.key)
                }
              }}
            >
              <title>{meta?.name ?? p.name}</title>
            </path>
          )
        })}

        {/* Paracel & Spratly labels — Vietnam's seas */}
        <text className="vnmap-sea" x={vietnamMap.width * 0.72} y={vietnamMap.height * 0.26}>
          QĐ. Hoàng Sa
        </text>
        <text className="vnmap-sea" x={vietnamMap.width * 0.78} y={vietnamMap.height * 0.62}>
          QĐ. Trường Sa
        </text>
      </svg>

      {hovered && hover && (
        <div
          className="vnmap-tooltip"
          style={{ left: hover.x + 16, top: hover.y + 12 }}
        >
          <div className="vnmap-tooltip__name">{hovered.name}</div>
          <div className="vnmap-tooltip__region">
            {REGIONS[hovered.region]?.name}
          </div>
          <div className="vnmap-tooltip__label">Nông sản gợi ý</div>
          <ul className="vnmap-tooltip__list">
            {hovered.nongsan.slice(0, 4).map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <div className="vnmap-tooltip__hint">Bấm để xem & đặt mua →</div>
        </div>
      )}

      <div className="vnmap-legend">
        {legend.map((r) => (
          <span key={r.id} className="vnmap-legend__item">
            <span className="vnmap-legend__dot" style={{ background: r.color }} />
            {r.name}
          </span>
        ))}
      </div>
    </div>
  )
}
