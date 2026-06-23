import { useEffect, useRef, useState } from 'react'

/* Reveal-on-scroll: returns a ref to attach to an element and a boolean that
 * flips to true the first time the element scrolls into view. Pair it with the
 * `.reveal` / `.reveal--in` CSS classes for a fade-and-rise animation. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
) {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return
    // Respect users who prefer no motion: reveal immediately.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setShown(true)
          obs.disconnect()
          break
        }
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [shown, options])

  return { ref, shown }
}
