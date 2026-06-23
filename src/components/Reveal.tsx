import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Stagger delay in ms, applied as a CSS transition-delay. */
  delay?: number
  /** Animation flavor. */
  variant?: 'up' | 'left' | 'right' | 'zoom'
  style?: CSSProperties
  id?: string
}

/* Thin wrapper that fades + slides its children in when scrolled into view. */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  variant = 'up',
  style,
  id,
}: RevealProps) {
  const { ref, shown } = useReveal<HTMLElement>()
  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal reveal--${variant} ${shown ? 'reveal--in' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Tag>
  )
}
