import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FARMERS } from '../data/farmers'
import { PRODUCTS } from '../data/products'
import { useT, useLang } from '../i18n'
import Reveal from '../components/Reveal'
import './FarmerStory.css'

const CARD_GRADIENTS = [
  'linear-gradient(135deg,#0d3b1f 0%,#1f7a4d 40%,#6fcf97 100%)',
  'linear-gradient(135deg,#5a3d00 0%,#b8860b 40%,#f4c430 100%)',
  'linear-gradient(135deg,#0a4f54 0%,#1b8a8f 40%,#7ee8e0 100%)',
  'linear-gradient(135deg,#5c1a2e 0%,#a63d57 40%,#f2849e 100%)',
  'linear-gradient(135deg,#1a4d2e 0%,#2e8b57 40%,#bfe86d 100%)',
  'linear-gradient(135deg,#1a3a5c 0%,#3a6ea5 40%,#9ad0ec 100%)',
]

export default function FarmerStory() {
  const { id } = useParams<{ id: string }>()
  const t = useT()
  const { lang } = useLang()
  const farmerIndex = FARMERS.findIndex((f) => f.id === id)
  const farmer = FARMERS[farmerIndex]
  const [loadedImgs, setLoadedImgs] = useState<Set<number>>(new Set())
  const [activeImg, setActiveImg] = useState(0)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const markLoaded = (i: number) => setLoadedImgs((s) => new Set(s).add(i))

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  useEffect(() => {
    if (!farmer || farmer.images.length <= 1) return
    const timer = setInterval(() => {
      setActiveImg((c) => (c + 1) % farmer.images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [farmer])

  if (!farmer) {
    return (
      <div className="fs">
        <div className="fs__container">
          <Link to="/" className="fs__back-link">← {t.farmerStory.back}</Link>
          <p>Farmer not found.</p>
        </div>
      </div>
    )
  }

  const delicacy = PRODUCTS.find((p) => p.id === farmer.productId)
  const gradient = CARD_GRADIENTS[farmerIndex % CARD_GRADIENTS.length]
  const storyParagraphs = (lang === 'vi' ? farmer.storyVi : farmer.storyEn).split('\n\n')

  return (
    <div className="fs">
      {/* ──── HERO ──── */}
      <div className="fs__hero" style={{ background: gradient }}>
        <div className="fs__hero-overlay" />
        <Link to="/" className="fs__back-btn">
          <span className="fs__back-arrow">←</span>
          {t.farmerStory.back}
        </Link>

        <div className="fs__hero-layout">
          {/* Photo card */}
          <div className="fs__photo-card">
            {farmer.images.length > 0 ? (
              <>
                {farmer.images.map((src, i) => (
                  <div key={i} className={`fs__photo-slide${i === activeImg ? ' is-active' : ''}`}>
                    {!heroLoaded && i === 0 && (
                      <div className="fs__shimmer"><div className="fs__shimmer-wave" /></div>
                    )}
                    <img
                      src={src}
                      alt={`${farmer.name} ${i + 1}`}
                      onLoad={() => { if (i === 0) setHeroLoaded(true) }}
                    />
                  </div>
                ))}
                {farmer.images.length > 1 && (
                  <div className="fs__photo-dots">
                    {farmer.images.map((_, i) => (
                      <button key={i} className={`fs__photo-dot${i === activeImg ? ' is-active' : ''}`} onClick={() => setActiveImg(i)} />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <span className="fs__photo-emoji">{farmer.emoji}</span>
            )}
          </div>

          {/* Hero info */}
          <div className="fs__hero-info">
            <div className="fs__hero-tags">
              {farmer.tags.map((tag) => (
                <span key={tag} className="fs__hero-tag">{tag}</span>
              ))}
            </div>
            <h1 className="fs__hero-name">{farmer.name}</h1>
            <p className="fs__hero-household">{farmer.household}</p>
            <p className="fs__hero-location">
              <span className="fs__pin">📍</span> {farmer.village}
            </p>
            {delicacy && (
              <div className="fs__hero-product">
                <span className="fs__hero-product-emoji">{delicacy.emoji}</span>
                <div>
                  <strong>{delicacy.name}</strong>
                  <small>{delicacy.producer}</small>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ──── BODY ──── */}
      <div className="fs__body">
        {/* Quote banner */}
        <Reveal className="fs__quote-section" variant="up" delay={100}>
          <div className="fs__quote-mark">"</div>
          <blockquote className="fs__quote">{farmer.quote}</blockquote>
          <cite className="fs__quote-cite">— {farmer.name}</cite>
        </Reveal>

        {/* Story */}
        <section className="fs__story-section">
          <Reveal as="h2" className="fs__section-title" variant="left" delay={0}>
            <span className="fs__section-icon">📖</span>
            {t.farmerStory.story}
          </Reveal>
          <div className="fs__story-text">
            {storyParagraphs.map((p, i) => (
              <Reveal as="p" key={i} variant="up" delay={100 + i * 80}>
                {i === 0 && <span className="fs__drop-cap">{p.charAt(0)}</span>}
                {i === 0 ? p.slice(1) : p}
              </Reveal>
            ))}
          </div>
        </section>

        {/* Gallery */}
        {farmer.images.length > 0 && (
          <section className="fs__gallery-section">
            <Reveal as="h2" className="fs__section-title" variant="left" delay={0}>
              <span className="fs__section-icon">📸</span>
              {t.farmerStory.gallery}
            </Reveal>
            <div className="fs__gallery">
              {farmer.images.map((src, i) => (
                <Reveal key={i} className={`fs__gallery-item${i === 0 ? ' fs__gallery-item--large' : ''}`} variant="zoom" delay={i * 120}>
                  <div className="fs__gallery-wrap">
                    {!loadedImgs.has(i) && <div className="fs__shimmer"><div className="fs__shimmer-wave" /></div>}
                    <img src={src} alt={`${farmer.name} ${i + 1}`} className="fs__gallery-img" onLoad={() => markLoaded(i)} style={{ opacity: loadedImgs.has(i) ? 1 : 0 }} />
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Back CTA */}
        <Reveal className="fs__cta" variant="zoom" delay={200}>
          <Link to="/" className="fs__cta-btn">
            ← {t.farmerStory.back}
          </Link>
        </Reveal>
      </div>
    </div>
  )
}
