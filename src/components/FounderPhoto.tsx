import { useState, useEffect, useCallback } from 'react'
import { FOUNDER } from '../data/founder'
import { useLang } from '../i18n'
import './FounderPhoto.css'

export default function FounderPhoto() {
  const { lang } = useLang()
  const images = FOUNDER.images
  const hasImages = images.length > 0
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState<Set<number>>(new Set())

  const next = useCallback(() => {
    if (images.length <= 1) return
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next, images.length])

  const markLoaded = (i: number) => setLoaded((s) => new Set(s).add(i))

  return (
    <div className="founder-photo">
      <div className="founder-photo__frame">
        {hasImages ? (
          <>
            {images.map((src, i) => (
              <div key={i} className={`founder-photo__slide${i === current ? ' is-active' : ''}`}>
                {!loaded.has(i) && (
                  <div className="founder-photo__shimmer">
                    <div className="founder-photo__shimmer-wave" />
                  </div>
                )}
                <img
                  src={src}
                  alt={`${FOUNDER.name} ${i + 1}`}
                  onLoad={() => markLoaded(i)}
                  style={{ opacity: loaded.has(i) ? 1 : 0 }}
                />
              </div>
            ))}
            <div className="founder-photo__dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`founder-photo__dot${i === current ? ' is-active' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </>
        ) : (
          <span className="founder-photo__emoji">{FOUNDER.emoji}</span>
        )}
        <div className="founder-photo__caption">
          <strong>{FOUNDER.name}</strong>
          <small>{FOUNDER.role[lang]}</small>
        </div>
      </div>
    </div>
  )
}
