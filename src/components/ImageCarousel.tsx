import { useEffect, useRef, useState } from 'react'
import './ImageCarousel.css'

interface ImageCarouselProps {
  /** Image URLs to show. When empty, emoji placeholder slides are shown. */
  images?: string[]
  /** Placeholder glyph for slides without a real image yet. */
  emoji: string
  /** How many emoji slides to show while `images` is empty (default 1). */
  placeholderSlides?: number
  /** Optional alt text / label base. */
  label?: string
  className?: string
}

const DRAG_THRESHOLD = 60 // px to commit to a slide change

/**
 * A swipeable / draggable image gallery. Drag (mouse or touch) left or right to
 * move between slides; arrows and dots are shown when there is more than one
 * slide. Falls back to emoji placeholder slides until real images are added.
 */
export default function ImageCarousel({
  images,
  emoji,
  placeholderSlides = 1,
  label,
  className = '',
}: ImageCarouselProps) {
  const hasImages = !!images && images.length > 0
  const count = hasImages ? images!.length : Math.max(1, placeholderSlides)

  const [index, setIndex] = useState(0)
  const [drag, setDrag] = useState(0) // live drag offset in px
  const trackRef = useRef<HTMLDivElement>(null)
  const startX = useRef<number | null>(null)
  const width = useRef(1)

  // Keep index in range if the slide count changes.
  useEffect(() => {
    setIndex((i) => Math.min(i, count - 1))
  }, [count])

  const go = (next: number) => {
    setIndex((i) => Math.max(0, Math.min(count - 1, next ?? i)))
  }

  const onPointerDown = (e: React.PointerEvent) => {
    if (count <= 1) return
    startX.current = e.clientX
    width.current = trackRef.current?.offsetWidth || 1
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return
    setDrag(e.clientX - startX.current)
  }

  const endDrag = () => {
    if (startX.current === null) return
    if (drag <= -DRAG_THRESHOLD) go(index + 1)
    else if (drag >= DRAG_THRESHOLD) go(index - 1)
    startX.current = null
    setDrag(0)
  }

  const pct = -(index * 100) + (drag / width.current) * 100

  return (
    <div className={`carousel ${className}`}>
      <div
        className="carousel__viewport"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        style={{
          cursor:
            count <= 1 ? 'default' : startX.current !== null ? 'grabbing' : 'grab',
        }}
      >
        <div
          className={`carousel__track${startX.current !== null ? ' is-dragging' : ''}`}
          style={{ transform: `translateX(${pct}%)` }}
        >
          {Array.from({ length: count }).map((_, i) => (
            <div className="carousel__slide" key={i} aria-hidden={i !== index}>
              {hasImages ? (
                <img
                  src={images![i]}
                  alt={label ? `${label} ${i + 1}` : ''}
                  draggable={false}
                />
              ) : (
                <span className="carousel__emoji">{emoji}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="carousel__dots" aria-hidden="true">
          {Array.from({ length: count }).map((_, i) => (
            <span
              key={i}
              className={`carousel__dot${i === index ? ' is-active' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
