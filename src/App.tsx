import { useCallback, useEffect, useState } from 'react'
import VietnamMap from './components/VietnamMap'
import NinhThuanMap from './components/NinhThuanMap'
import LeafCursor from './components/LeafCursor'
import Reveal from './components/Reveal'
import { PRODUCTS } from './data/products'
import { useLang, useT } from './i18n'
import './App.css'

const NINH_THUAN = PRODUCTS.filter((p) => p.provinceKey === 'vn-nt').slice(0, 12)

/* Decorative gradient palettes cycled across the story cards. */
const CARD_GRADIENTS = [
  'linear-gradient(150deg,#1f7a4d,#6fcf97)',
  'linear-gradient(150deg,#b8860b,#f4c430)',
  'linear-gradient(150deg,#1b8a8f,#7ee8e0)',
  'linear-gradient(150deg,#a63d57,#f2849e)',
  'linear-gradient(150deg,#2e8b57,#bfe86d)',
  'linear-gradient(150deg,#3a6ea5,#9ad0ec)',
]

function LangSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div className="langswitch" role="group" aria-label="Language">
      <button
        className={lang === 'en' ? 'is-on' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        className={lang === 'vi' ? 'is-on' : ''}
        onClick={() => setLang('vi')}
        aria-pressed={lang === 'vi'}
      >
        VI
      </button>
      <span className="langswitch__thumb" data-lang={lang} aria-hidden="true" />
    </div>
  )
}

/* A field of slowly drifting leaf glyphs used as section decoration. */
function LeafField() {
  const leaves = ['🌿', '🍃', '🌱', '🍂', '🌾']
  return (
    <div className="leaffield" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className="leaffield__leaf"
          style={{
            left: `${(i * 11 + 4) % 100}%`,
            animationDelay: `${(i * 1.7) % 9}s`,
            animationDuration: `${11 + (i % 5) * 2}s`,
            fontSize: `${1 + (i % 4) * 0.4}rem`,
          }}
        >
          {leaves[i % leaves.length]}
        </span>
      ))}
    </div>
  )
}

function App() {
  const t = useT()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [flashId, setFlashId] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }, [])

  // From the map: jump to a story card and flash it.
  const focusStory = useCallback((productId: string) => {
    const el = document.getElementById(`story-${productId}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setFlashId(productId)
    window.setTimeout(() => setFlashId((cur) => (cur === productId ? null : cur)), 1800)
  }, [])

  // The national map links every province to the Ninh Thuận stories section.
  const handleProvince = useCallback(() => scrollTo('stories'), [scrollTo])

  return (
    <div className="app">
      <LeafCursor />
      {/* ---------------- NAV ---------------- */}
      <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
        <button className="nav__brand" onClick={() => scrollTo('gioi-thieu')}>
          <span className="nav__logo">🌱</span>
          <span className="nav__brandtext">
            <strong>{t.brand.name}</strong>
            <small>{t.brand.tagline}</small>
          </span>
        </button>

        <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`}>
          <button onClick={() => scrollTo('gioi-thieu')}>{t.nav.intro}</button>
          <button onClick={() => scrollTo('story')}>{t.nav.story}</button>
          <button onClick={() => scrollTo('map')}>{t.nav.map}</button>
          <button onClick={() => scrollTo('stories')}>{t.nav.stories}</button>
          <button onClick={() => scrollTo('handbook')}>{t.nav.handbook}</button>
          <button onClick={() => scrollTo('connect')}>{t.nav.connect}</button>
        </nav>

        <div className="nav__right">
          <LangSwitch />
          <button
            className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ---------------- 1 · HERO ---------------- */}
      <section id="gioi-thieu" className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
          <div className="hero__grain" />
        </div>
        <LeafField />

        <div className="hero__inner">
          <Reveal as="span" className="eyebrow eyebrow--light" variant="down" delay={100}>
            🌾 {t.hero.eyebrow}
          </Reveal>
          <h1 className="hero__title">
            {t.hero.title.map((line, i) => (
              <Reveal as="span" key={i} className="hero__titleline" variant={i === 0 ? 'left' : 'right'} delay={250 + i * 200}>
                {line}
              </Reveal>
            ))}
          </h1>
          <Reveal as="p" className="hero__sub" variant="up" delay={600}>
            {t.hero.sub}
          </Reveal>
          <Reveal className="hero__actions" variant="zoom" delay={800}>
            <button className="btn btn--primary btn--lg" onClick={() => scrollTo('map')}>
              {t.hero.cta}
              <span className="btn__arrow">↗</span>
            </button>
          </Reveal>

          <Reveal className="hero__badges" variant="up" delay={1000}>
            {t.hero.badges.map((b, i) => (
              <Reveal
                key={b.label}
                className="herobadge-wrap"
                variant="zoom"
                delay={1100 + i * 180}
                style={{ animationDelay: `${i * 0.25}s` }}
              >
                <button
                  className="herobadge"
                  onClick={() => scrollTo(['map', 'stories', 'handbook'][i])}
                >
                  <span className="herobadge__ring">{b.icon}</span>
                  <span className="herobadge__label">{b.label}</span>
                </button>
              </Reveal>
            ))}
          </Reveal>
        </div>

        <button className="hero__scroll" onClick={() => scrollTo('story')}>
          <span>{t.hero.scroll}</span>
          <span className="hero__scroll-mouse"><i /></span>
        </button>
      </section>

      {/* ---------------- 2 · THE BIG STORY ---------------- */}
      <section id="story" className="section section--story">
        <div className="story">
          <Reveal className="story__media" variant="left" delay={0}>
            <div className="story__photo">
              <span className="story__photo-emoji">🧑‍🌾</span>
              <div className="story__photo-glow" />
            </div>
            <Reveal as="blockquote" className="story__pull" variant="up" delay={400}>
              "{t.bigStory.pull}"
            </Reveal>
            <div className="story__stamp">Ninh Thuận</div>
          </Reveal>

          <div className="story__body">
            <Reveal as="span" className="eyebrow" variant="right" delay={100}>{t.bigStory.eyebrow}</Reveal>
            <Reveal as="h2" className="section__title" variant="right" delay={200}>
              {t.bigStory.title}
            </Reveal>
            {t.bigStory.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} className="story__para" variant="right" delay={350 + i * 150}>
                {p}
              </Reveal>
            ))}
            <Reveal variant="zoom" delay={800}>
              <button className="btn btn--primary" onClick={() => scrollTo('stories')}>
                {t.bigStory.cta}
                <span className="btn__arrow">→</span>
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- 3 · THE DIGITAL MAP ---------------- */}
      <section id="map" className="section section--map">
        <LeafField />
        <div className="section__head">
          <Reveal as="span" className="eyebrow" variant="down" delay={0}>{t.map.eyebrow}</Reveal>
          <Reveal as="h2" className="section__title" variant="up" delay={100}>{t.map.title}</Reveal>
          <Reveal as="p" className="section__lead" variant="up" delay={250}>{t.map.sub}</Reveal>
        </div>

        <div className="mapgrid">
          <Reveal className="mapgrid__focus" variant="left" delay={200}>
            <NinhThuanMap onSelect={focusStory} />
          </Reveal>
          <Reveal className="mapgrid__national" variant="flip" delay={450}>
            <VietnamMap onViewProducts={handleProvince} />
          </Reveal>
        </div>
      </section>

      {/* ---------------- 4 · LOCAL INSPIRATIONAL STORIES ---------------- */}
      <section id="stories" className="section section--stories">
        <div className="section__head">
          <Reveal as="span" className="eyebrow" variant="zoom" delay={0}>{t.stories.eyebrow}</Reveal>
          <Reveal as="h2" className="section__title" variant="up" delay={120}>{t.stories.title}</Reveal>
          <Reveal as="p" className="section__lead" variant="up" delay={240}>{t.stories.sub}</Reveal>
        </div>

        <div className="storycards">
          {NINH_THUAN.map((p, i) => {
            const variants = ['left', 'up', 'right', 'zoom'] as const
            return (
              <Reveal
                key={p.id}
                id={`story-${p.id}`}
                className={`storycard ${flashId === p.id ? 'is-flash' : ''}`}
                variant={variants[i % variants.length]}
                delay={300 + (i % 4) * 120}
              >
                <div className="storycard__art" style={{ background: CARD_GRADIENTS[i % CARD_GRADIENTS.length] }}>
                  <span className="storycard__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="storycard__emoji">{p.emoji}</span>
                  <span className="storycard__soon">{t.stories.soon}</span>
                </div>
                <div className="storycard__body">
                  <h3 className="storycard__name">{p.name}</h3>
                  <p className="storycard__producer">{p.producer}</p>
                  <div className="storycard__tags">
                    {p.tags.map((tag) => (
                      <span key={tag} className="storycard__tag">{tag}</span>
                    ))}
                  </div>
                  <button className="storycard__cta" disabled>
                    {t.stories.readStory} →
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>
        <Reveal as="p" className="storycards__counter" variant="zoom" delay={600}>
          {t.stories.counter(NINH_THUAN.length)}
        </Reveal>
      </section>

      {/* ---------------- 5 · DIGITAL HANDBOOK ---------------- */}
      <section id="handbook" className="section section--handbook">
        <div className="handbook">
          <div className="handbook__body">
            <Reveal as="span" className="eyebrow eyebrow--light" variant="left" delay={0}>{t.handbook.eyebrow}</Reveal>
            <Reveal as="h2" className="section__title section__title--light" variant="left" delay={150}>
              {t.handbook.title}
            </Reveal>
            {t.handbook.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} className="handbook__para" variant="left" delay={300 + i * 150}>
                {p}
              </Reveal>
            ))}
            <Reveal className="handbook__skills" variant="up" delay={550}>
              {t.handbook.skills.map((s, i) => (
                <Reveal as="span" className="handbook__skill" key={s.label} variant="zoom" delay={650 + i * 100}>
                  <span className="handbook__skill-icon">{s.icon}</span>
                  {s.label}
                </Reveal>
              ))}
            </Reveal>
            <Reveal variant="up" delay={1050}>
              <button className="btn btn--accent btn--lg">
                {t.handbook.cta}
                <span className="btn__arrow">↗</span>
              </button>
            </Reveal>
          </div>

          <Reveal className="handbook__visual" variant="flip" delay={200}>
            <div className="handbook__book">
              <div className="handbook__cover">
                <span className="handbook__cover-icon">📘</span>
                <span className="handbook__cover-title">Digital Transformation Handbook</span>
                <span className="handbook__cover-sub">{t.handbook.pages}</span>
              </div>
              <div className="handbook__pageA" />
              <div className="handbook__pageB" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- 6 · FOOTER & CONNECT ---------------- */}
      <footer id="connect" className="footer">
        <LeafField />
        <div className="footer__inner">
          <Reveal as="span" className="eyebrow eyebrow--light" variant="down" delay={0}>{t.footer.eyebrow}</Reveal>
          <Reveal as="h2" className="footer__title" variant="up" delay={150}>{t.footer.title}</Reveal>
          <Reveal as="p" className="footer__sub" variant="up" delay={300}>{t.footer.sub}</Reveal>

          <Reveal className="footer__actions" variant="up" delay={450}>
            <Reveal variant="left" delay={500}>
              <a className="footer__btn" href="#" onClick={(e) => e.preventDefault()}>
                <span>🌐</span> {t.footer.social}
              </a>
            </Reveal>
            <Reveal variant="zoom" delay={620}>
              <a className="footer__btn" href="mailto:hello@viet-farm.org">
                <span>✉️</span> {t.footer.email}
              </a>
            </Reveal>
            <Reveal variant="right" delay={740}>
              <a className="footer__btn" href="tel:+84000000000">
                <span>📞</span> {t.footer.phone}
              </a>
            </Reveal>
          </Reveal>
        </div>
        <Reveal className="footer__bar" variant="up" delay={900}>
          <span className="footer__brand">🌱 {t.brand.name}</span>
          <small>© {new Date().getFullYear()} · {t.footer.rights}</small>
        </Reveal>
      </footer>
    </div>
  )
}

export default App
