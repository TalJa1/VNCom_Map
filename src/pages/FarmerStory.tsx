import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FARMERS } from '../data/farmers'
import { PRODUCTS } from '../data/products'
import { useT, useLang } from '../i18n'
import './FarmerStory.css'

const CARD_GRADIENTS = [
  'linear-gradient(150deg,#1f7a4d,#6fcf97)',
  'linear-gradient(150deg,#b8860b,#f4c430)',
  'linear-gradient(150deg,#1b8a8f,#7ee8e0)',
  'linear-gradient(150deg,#a63d57,#f2849e)',
  'linear-gradient(150deg,#2e8b57,#bfe86d)',
  'linear-gradient(150deg,#3a6ea5,#9ad0ec)',
]

export default function FarmerStory() {
  const { id } = useParams<{ id: string }>()
  const t = useT()
  const { lang } = useLang()
  const farmerIndex = FARMERS.findIndex((f) => f.id === id)
  const farmer = FARMERS[farmerIndex]
  const [loadedImgs, setLoadedImgs] = useState<Set<number>>(new Set())
  const markLoaded = (i: number) => setLoadedImgs((s) => new Set(s).add(i))

  if (!farmer) {
    return (
      <div className="farmer-story">
        <div className="farmer-story__container">
          <Link to="/" className="farmer-story__back">← {t.farmerStory.back}</Link>
          <p>Farmer not found.</p>
        </div>
      </div>
    )
  }

  const delicacy = PRODUCTS.find((p) => p.id === farmer.productId)
  const gradient = CARD_GRADIENTS[farmerIndex % CARD_GRADIENTS.length]

  return (
    <div className="farmer-story">
      <div className="farmer-story__hero" style={{ background: gradient }}>
        <Link to="/" className="farmer-story__back">← {t.farmerStory.back}</Link>
        <div className="farmer-story__hero-content">
          {farmer.images.length > 0 ? (
            <div className="farmer-story__avatar-wrap">
              {!loadedImgs.has(-1) && <div className="farmer-story__avatar-shimmer"><div className="shimmer-wave" /></div>}
              <img src={farmer.images[0]} alt={farmer.name} className="farmer-story__avatar" onLoad={() => markLoaded(-1)} style={{ opacity: loadedImgs.has(-1) ? 1 : 0 }} />
            </div>
          ) : (
            <span className="farmer-story__emoji">{farmer.emoji}</span>
          )}
          <h1 className="farmer-story__name">{farmer.name}</h1>
          <p className="farmer-story__location">{farmer.household} · {farmer.village}</p>
        </div>
      </div>

      <div className="farmer-story__container">
        <section className="farmer-story__section">
          <h2>{t.farmerStory.quote}</h2>
          <blockquote className="farmer-story__quote">"{farmer.quote}"</blockquote>
        </section>

        {delicacy && (
          <section className="farmer-story__section">
            <h2>{t.farmerStory.delicacy}</h2>
            <div className="farmer-story__delicacy-card">
              <span className="farmer-story__delicacy-emoji">{delicacy.emoji}</span>
              <div>
                <h3>{delicacy.name}</h3>
                <p>{delicacy.producer}</p>
              </div>
            </div>
          </section>
        )}

        <section className="farmer-story__section">
          <h2>{t.farmerStory.tags}</h2>
          <div className="farmer-story__tags">
            {farmer.tags.map((tag) => (
              <span key={tag} className="farmer-story__tag">{tag}</span>
            ))}
          </div>
        </section>

        <section className="farmer-story__section">
          <h2>{t.farmerStory.story}</h2>
          <div className="farmer-story__text">
            {(lang === 'vi' ? farmer.storyVi : farmer.storyEn)
              .split('\n\n')
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </div>
        </section>

        {farmer.images.length > 0 && (
          <section className="farmer-story__section">
            <h2>{t.farmerStory.gallery}</h2>
            <div className="farmer-story__gallery">
              {farmer.images.map((src, i) => (
                <div key={i} className="farmer-story__gallery-wrap">
                  {!loadedImgs.has(i) && <div className="farmer-story__gallery-shimmer"><div className="shimmer-wave" /></div>}
                  <img src={src} alt={`${farmer.name} ${i + 1}`} className="farmer-story__gallery-img" onLoad={() => markLoaded(i)} style={{ opacity: loadedImgs.has(i) ? 1 : 0 }} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
