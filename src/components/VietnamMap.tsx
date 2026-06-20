import { useState, useRef, useMemo, type MouseEvent } from 'react'
import { vietnamMap } from '../data/vietnamMap'
import { PROVINCES, REGIONS } from '../data/provinces'
import { PRODUCTS } from '../data/products'
import './VietnamMap.css'

interface VietnamMapProps {
  onViewProducts: (key: string) => void
}

interface HoverState {
  key: string
  x: number
  y: number
}

export default function VietnamMap({ onViewProducts }: VietnamMapProps) {
  const [hover, setHover] = useState<HoverState | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  const hovered = hover ? PROVINCES[hover.key] : undefined
  const hoveredRegion = hovered ? REGIONS[hovered.region] : undefined
  const hoveredProductCount = hover
    ? PRODUCTS.filter((p) => p.provinceKey === hover.key).length
    : 0

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
        viewBox={`0 0 ${vietnamMap.width * 1.55} ${vietnamMap.height}`}
        role="img"
        aria-label="Bản đồ nông sản Việt Nam"
      >
        {vietnamMap.provinces.map((p) => {
          const meta = PROVINCES[p.key]
          const region = meta ? REGIONS[meta.region] : undefined
          const isHover = hover?.key === p.key
          return (
            <path
              key={p.key}
              d={p.d}
              className="vnmap-province"
              fill={region?.color ?? '#9bbf9b'}
              style={{
                opacity: isHover ? 1 : 0.82,
              }}
              onMouseEnter={(e) => handleMove(e, p.key)}
              onMouseMove={(e) => handleMove(e, p.key)}
              onMouseLeave={() => setHover(null)}
              onClick={() => onViewProducts(p.key)}
            >
              <title>{meta?.name ?? p.name}</title>
            </path>
          )
        })}

        {/* Hoàng Sa */}
        <g className="vnmap-archipelago">
          {[
            [5700, 2500], [5850, 2600], [5950, 2450], [6050, 2700],
            [5780, 2750], [5900, 2850], [6100, 2550], [5650, 2650],
          ].map(([cx, cy], i) => (
            <circle key={`hs${i}`} cx={cx} cy={cy} r={38} />
          ))}
          <text x={5550} y={2250}>QĐ. Hoàng Sa</text>
        </g>

        {/* Trường Sa */}
        <g className="vnmap-archipelago">
          {[
            [6200, 6200], [6350, 6350], [6500, 6500], [6100, 6450],
            [6400, 6700], [6250, 6850], [6550, 6300], [6150, 6650],
            [6450, 6100], [6300, 6550],
          ].map(([cx, cy], i) => (
            <circle key={`ts${i}`} cx={cx} cy={cy} r={38} />
          ))}
          <text x={6050} y={5950}>QĐ. Trường Sa</text>
        </g>
      </svg>

      {/* Hover tooltip with full info + CTA */}
      {hovered && hover && (
        <div
          className="vnmap-tooltip"
          style={{ left: hover.x + 16, top: hover.y + 12 }}
          onMouseEnter={() => setHover(hover)}
          onMouseLeave={() => setHover(null)}
        >
          <span className="vnmap-tooltip__region-badge" style={{ background: hoveredRegion?.color }}>
            {hoveredRegion?.name}
          </span>
          <div className="vnmap-tooltip__name">{hovered.name}</div>
          <div className="vnmap-tooltip__label">Nông sản đặc trưng</div>
          <div className="vnmap-tooltip__chips">
            {hovered.nongsan.map((n) => (
              <span key={n} className="vnmap-tooltip__chip">{n}</span>
            ))}
          </div>
          <button className="vnmap-tooltip__cta" onClick={() => onViewProducts(hover.key)}>
            {hoveredProductCount > 0
              ? `Xem ${hoveredProductCount} sản phẩm đang bán →`
              : 'Xem gian hàng nông sản →'}
          </button>
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
