import React from 'react'
import ReactDOM from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, List, Package, X, YoutubeLogo } from '@phosphor-icons/react'
import '@fontsource-variable/manrope'
import { WebGLBackground } from './WebGLBackground'
import { languageLabels, translations, type Language } from './content'
import './styles.css'

const projects = [
  {
    title: 'SmartLayer',
    typeKey: 'smartLayer' as const,
    year: '2026',
    image: '/images/smartlayer-demo.jpeg',
    url: 'https://unidentity.vercel.app/',
    secondaryUrl: 'https://www.npmjs.com/package/jp-form-kit',
    secondaryAction: 'npm' as const,
    className: 'project project-smartlayer',
  },
  {
    title: 'Foxtral',
    typeKey: 'foxtral' as const,
    year: '2026',
    image: '/images/foxtral.jpg',
    url: 'https://github.com/Foxtral-MistralHack/foxtral-nightly-refined',
    secondaryUrl: 'https://www.youtube.com/watch?v=cv_y7Wcivm0',
    secondaryAction: 'video' as const,
    className: 'project project-wide project-foxtral',
  },
  {
    title: 'Neural Networks From Scratch',
    typeKey: 'neuralnets' as const,
    year: '2024',
    image: '/images/neural-network.png',
    url: 'https://github.com/syamas77/neuralnets',
    secondaryUrl: null,
    secondaryAction: null,
    className: 'project project-neuralnets',
  },
]

const languages = Object.keys(languageLabels) as Language[]

function detectLanguage(): Language {
  const saved = window.localStorage.getItem('portfolio-language')
  if (saved === 'en' || saved === 'ja' || saved === 'zh-Hant') return saved
  if (navigator.language.toLowerCase().startsWith('ja')) return 'ja'
  if (navigator.language.toLowerCase().startsWith('zh')) return 'zh-Hant'
  return 'en'
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [language, setLanguage] = React.useState<Language>(detectLanguage)
  const copy = translations[language]

  React.useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('portfolio-language', language)
  }, [language])

  React.useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="wordmark" href="#top" aria-label="Shinji Yamashita, home">SHINJI<span>®</span></a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>{copy.nav.work}</a>
          <a href="#about" onClick={closeMenu}>{copy.nav.about}</a>
          <a href="#contact" onClick={closeMenu}>{copy.nav.contact}</a>
        </nav>
        <div className="nav-actions">
          <div className="language-switcher" aria-label="Language selector">
            {languages.map((option) => (
              <button
                key={option}
                className={language === option ? 'is-active' : ''}
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
              >
                {languageLabels[option]}
              </button>
            ))}
          </div>
          <a className="nav-cta" href="mailto:shinchan396@gmail.com">{copy.nav.hello} <ArrowUpRight weight="bold" /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
            {menuOpen ? <X /> : <List />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-enter">{copy.hero.eyebrow}</p>
            <h1 id="hero-title" className="hero-enter delay-1">{copy.hero.before}<em>{copy.hero.emphasis}</em>{copy.hero.after}</h1>
            <p className="hero-summary hero-enter delay-2">{copy.hero.summary}</p>
            <a className="text-link hero-enter delay-3" href="#work">{copy.hero.explore} <ArrowDownRight weight="bold" /></a>
          </div>
          <div className="hero-visual hero-enter delay-2">
            <WebGLBackground />
            <div className="visual-cutout" aria-hidden="true">S</div>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of expertise">
          <div className="ticker-track">
            {copy.expertise.map((item) => <React.Fragment key={item}><span>{item}</span><i>✳</i></React.Fragment>)}
            {copy.expertise.map((item) => <React.Fragment key={`repeat-${item}`}><span aria-hidden="true">{item}</span><i aria-hidden="true">✳</i></React.Fragment>)}
          </div>
        </div>

        <section className="work-section" id="work">
          <div className="section-intro" data-reveal>
            <h2>{copy.work.title}</h2>
            <p>{copy.work.intro}</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => {
              const secondaryLabel = project.secondaryAction === 'video' ? copy.work.video : copy.work.npm
              return (
                <article className={project.className} key={project.title} data-reveal style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}>
                  <a href={project.url} target="_blank" rel="noreferrer" aria-label={`${copy.work.viewProject}: ${project.title}`}>
                    <div className="project-image">
                      <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                      <span className="project-arrow"><ArrowUpRight weight="bold" /></span>
                    </div>
                    <div className="project-meta">
                      <div><h3>{project.title}</h3><p>{copy.work[project.typeKey]}</p></div>
                      <time>{project.year}</time>
                    </div>
                  </a>
                  {project.secondaryUrl && (
                    <a className="project-video" href={project.secondaryUrl} target="_blank" rel="noreferrer">
                      {project.secondaryAction === 'video' ? <YoutubeLogo weight="fill" /> : <Package weight="fill" />}
                      {secondaryLabel}
                    </a>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section className="current-section" aria-labelledby="current-title">
          <div className="current-mark" aria-hidden="true" data-reveal>JP</div>
          <div className="current-copy" data-reveal>
            <h2 id="current-title">{copy.current.title}</h2>
            <h3>{copy.current.project}</h3>
            <p>{copy.current.description}</p>
            <div className="current-actions">
              <span>{copy.current.status}</span>
              <a className="text-link" href="https://syamas77.github.io/jp-govtenders/" target="_blank" rel="noreferrer">
                {copy.current.report} <ArrowUpRight weight="bold" />
              </a>
              <a className="current-source" href="https://github.com/syamas77/jp-govtenders" target="_blank" rel="noreferrer">
                {copy.current.source}
              </a>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-photo" data-reveal>
            <img src="/images/shinji-yamashita.jpeg" alt="Portrait of Shinji Yamashita" loading="lazy" />
          </div>
          <div className="about-copy" data-reveal>
            <h2>{copy.about.title}</h2>
            <p className="about-lead">{copy.about.lead}</p>
            <p>{copy.about.body}</p>
            <a className="text-link" href="https://github.com/shinji-Yama77" target="_blank" rel="noreferrer">{copy.about.github} <ArrowUpRight weight="bold" /></a>
          </div>
        </section>

        <section className="services-section" aria-labelledby="services-title">
          <div className="services-heading" data-reveal>
            <h2 id="services-title">{copy.experience.title}</h2>
          </div>
          <div className="services-list" data-reveal>
            <div><span>{copy.experience.amazonDate}</span><h3>Amazon A9 Search</h3><p>{copy.experience.amazon}</p></div>
            <div><span>{copy.experience.devmatchDate}</span><h3>DevMatch</h3><p>{copy.experience.devmatch}</p></div>
            <div><span>{copy.experience.maqDate}</span><h3>MAQ Software</h3><p>{copy.experience.maq}</p></div>
            <div><span>{copy.experience.uwDate}</span><h3>University of Washington</h3><p>{copy.experience.uw}</p></div>
            <div><span>{copy.experience.volunteerDate}</span><h3>FareStart</h3><p>{copy.experience.farestart}</p></div>
          </div>
        </section>

        <section className="contact-section" id="contact" data-reveal>
          <p>{copy.contact.intro}</p>
          <h2>{copy.contact.before}<em>{copy.contact.emphasis}</em>{copy.contact.after}</h2>
          <a href="mailto:shinchan396@gmail.com">shinchan396@gmail.com <ArrowUpRight weight="bold" /></a>
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#top">SHINJI<span>®</span></a>
        <p>{copy.footer}</p>
        <div><a href="https://www.linkedin.com/in/syamas7/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/shinji-Yama77" target="_blank" rel="noreferrer">GitHub</a><a href="https://devpost.com/syamas" target="_blank" rel="noreferrer">Devpost</a><a href="tel:+817065830777">Phone</a></div>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
