import { useEffect, useRef } from 'react'
import './LeafCursor.css'

const LEAVES = ['🍃', '🌿', '🍂', '🌱', '🍃']
const TRAIL_COUNT = 5

export default function LeafCursor() {
  const branchRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLSpanElement | null)[]>([])
  const mouse = useRef({ x: -100, y: -100 })
  const positions = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))
  )

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    let raf: number
    const animate = () => {
      const { x, y } = mouse.current

      if (branchRef.current) {
        branchRef.current.style.transform = `translate(${x}px, ${y}px)`
      }

      for (let i = 0; i < TRAIL_COUNT; i++) {
        const p = positions.current[i]
        const target = i === 0 ? mouse.current : positions.current[i - 1]
        const ease = 0.08 - i * 0.01
        const dx = target.x - p.x
        const dy = target.y - p.y
        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
          p.x = target.x
          p.y = target.y
        } else {
          p.x += dx * ease
          p.y += dy * ease
        }

        const distToMouse = Math.sqrt(
          (mouse.current.x - p.x) ** 2 + (mouse.current.y - p.y) ** 2
        )
        const opacity = distToMouse < 8 ? 0 : Math.min((distToMouse - 8) / 30, 1) * (1 - i * 0.12)

        const el = trailRefs.current[i]
        if (el) {
          el.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${Math.sin(Date.now() * 0.002 + i) * 15}deg) scale(${0.5 + opacity * 0.5})`
          el.style.opacity = `${Math.max(0, opacity)}`
        }
      }

      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="leafcursor" aria-hidden="true">
      <div className="leafcursor__branch" ref={branchRef}>🪴</div>
      {Array.from({ length: TRAIL_COUNT }, (_, i) => (
        <span
          key={i}
          className="leafcursor__leaf"
          ref={(el) => { trailRefs.current[i] = el }}
          style={{ fontSize: `${1 - i * 0.08}rem` }}
        >
          {LEAVES[i % LEAVES.length]}
        </span>
      ))}
    </div>
  )
}
