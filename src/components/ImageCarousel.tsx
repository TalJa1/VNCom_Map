import { useRef, useState } from 'react'
import './ImageCarousel.css'

interface ImageCarouselProps {
  images?: string[]
  emoji: string
  placeholderSlides?: number
  label?: string
  className?: string
}

const SWIPE_THRESHOLD = 80

export default function ImageCarousel({
  images,
  emoji,
  placeholderSlides = 1,
  label,
  className = '',
}: ImageCarouselProps) {
  const hasImages = !!images && images.length > 0
  const count = hasImages ? images!.length : Math.max(1, placeholderSlides)

  const [dismissed, setDismissed] = useState<number[]>([])
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const startY = useRef(0)
  const locked = useRef(false)
  const dragXRef = useRef(0)

  const topIndex = Array.from({ length: count })
    .map((_, i) => i)
    .find((i) => !dismissed.includes(i))

  const onPointerDown = (e: React.PointerEvent) => {
    if (count <= 1 || topIndex === undefined) return
    startX.current = e.clientX
    startY.current = e.clientY
    locked.current = false
    dragXRef.current = 0
    setDragging(true)
    setDragX(0)
    containerRef.current?.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return
    const dx = e.clientX - startX.current
    const dy = e.clientY - startY.current

    if (!locked.current) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
        setDragging(false)
        setDragX(0)
        return
      }
      if (Math.abs(dx) > 10) locked.current = true
    }

    dragXRef.current = dx
    setDragX(dx)
  }

  const endDrag = () => {
    if (!dragging) return
    const d = dragXRef.current

    if (Math.abs(d) >= SWIPE_THRESHOLD && topIndex !== undefined) {
      const next = [...dismissed, topIndex]
      if (next.length >= count) {
        setTimeout(() => setDismissed([]), 400)
      }
      setDismissed(next)
    }

    setDragging(false)
    setDragX(0)
  }

  const visibleCards = Array.from({ length: count })
    .map((_, i) => i)
    .filter((i) => !dismissed.includes(i))

  return (
    <div className={`cardstack ${className}`}>
      <div
        className="cardstack__area"
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={{ cursor: count <= 1 ? 'default' : dragging ? 'grabbing' : 'grab' }}
      >
        {visibleCards
          .slice(0, 3)
          .reverse()
          .map((cardIdx, stackPos) => {
            const depth = visibleCards.indexOf(cardIdx)
            const isTop = cardIdx === topIndex
            const x = isTop && dragging ? dragX : 0
            const rotate = isTop && dragging ? dragX * 0.06 : 0
            const scale = 1 - depth * 0.04
            const yOff = depth * 8

            return (
              <div
                key={cardIdx}
                className={`cardstack__card${isTop && !dragging ? ' cardstack__card--animate' : ''}`}
                style={{
                  transform: `translateX(${x}px) translateY(${yOff}px) rotate(${rotate}deg) scale(${scale})`,
                  zIndex: count - depth,
                  opacity: Math.abs(x) > SWIPE_THRESHOLD && isTop ? 1 - (Math.abs(x) - SWIPE_THRESHOLD) / 200 : 1,
                }}
              >
                {hasImages ? (
                  <img
                    src={images![cardIdx]}
                    alt={label ? `${label} ${cardIdx + 1}` : ''}
                    draggable={false}
                  />
                ) : (
                  <span className="cardstack__emoji">{emoji}</span>
                )}
              </div>
            )
          })}
      </div>

      {count > 1 && (
        <div className="cardstack__dots" aria-hidden="true">
          {Array.from({ length: count }).map((_, i) => (
            <span
              key={i}
              className={`cardstack__dot${i === topIndex ? ' is-active' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
