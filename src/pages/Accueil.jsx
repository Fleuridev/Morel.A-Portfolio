import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import useParallax from '../components/useParallax'
import useTitle from '../components/useTitle'
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap'
import { getCreation } from '../data/creations'

// Créations mises en avant sur l'accueil
const previews = [
  { slug: 'robe-asymetrique-anis', cls: 'pv-1' },
  { slug: 'caftan-wax-franges', cls: 'pv-2' },
  { slug: 'robe-wax-volant', cls: 'pv-3' },
]

const WORDMARK = 'MOREL.A'

export default function Accueil() {
  useTitle(null)
  const heroRef = useRef(null)
  const teaserRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        // Entrée du héros
        gsap
          .timeline()
          .from('.hero-media img', { scale: 1.12, duration: 2.4, ease: 'power2.out' }, 0)
          .from('.hero-wordmark .char', { yPercent: 110, duration: 1.2, stagger: 0.06 }, 0.2)
          .from('.hero-role', { autoAlpha: 0, y: 18 }, 0.75)
          .from('.hero-vision', { autoAlpha: 0, y: 18 }, 0.95)
          .from('.hero-scroll', { autoAlpha: 0 }, 1.3)

        // Indicateur « défiler » en boucle
        gsap.fromTo(
          '.hero-scroll .stem',
          { scaleY: 0, transformOrigin: 'top' },
          { scaleY: 1, duration: 1.6, ease: 'power2.inOut', repeat: -1, repeatDelay: 0.3 },
        )

        // Parallaxe : l'image descend moins vite, le texte s'efface en remontant
        const scrub = { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true }
        gsap.to('.hero-media', { yPercent: 25, ease: 'none', scrollTrigger: scrub })
        gsap.to('.hero-content', { y: -80, autoAlpha: 0, ease: 'none', scrollTrigger: { ...scrub, end: '70% top' } })
      })
      return () => mm.revert()
    },
    { scope: heroRef },
  )

  useParallax(teaserRef, 'img', 12)

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="hero-media">
          <img
            src="/images/creations/robe-sirene-volants-1.jpg"
            alt="Robe sirène à volants MOREL.A, photographie en studio"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-wordmark" aria-label={WORDMARK}>
            {[...WORDMARK].map((ch, i) => (
              <span className="char" aria-hidden="true" key={i}>{ch}</span>
            ))}
          </h1>
          <p className="hero-role eyebrow-caps">STYLISTE&nbsp;/&nbsp;CRÉATEUR</p>
          <p className="hero-vision">
            La couture comme langage. Chaque silhouette raconte une origine, une matière, une intention.
          </p>
        </div>
        <div className="hero-scroll"><span className="stem"></span> DÉFILER</div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <Reveal className="section-head">
            <h2>Créations</h2>
            <p className="section-note">
              Une garde-robe pensée comme un récit continu, où le masculin et le féminin se répondent sans frontière.
            </p>
          </Reveal>

          <div className="preview-grid">
            {previews.map((p) => {
              const c = getCreation(p.slug)
              return (
                <Reveal as="figure" className={p.cls} key={p.slug}>
                  <Link to={`/creations/${p.slug}`}>
                    <div className="img-frame ratio-fashion">
                      <img src={c.images[0].src} alt={c.images[0].alt} />
                    </div>
                    <figcaption className="cap"><span>{c.name}</span><span>{c.year ?? c.category}</span></figcaption>
                  </Link>
                </Reveal>
              )
            })}
          </div>

          <Reveal style={{ marginTop: 'clamp(48px, 7vw, 80px)', textAlign: 'right' }}>
            <Link className="text-link" to="/creations">Voir toutes les créations</Link>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="teaser">
        <div className="teaser-media" ref={teaserRef}>
          <img
            src="/images/creations/corset-wax-pantalon-1.jpg"
            alt="Corset en wax et pantalon large, création MOREL.A"
          />
        </div>
        <div className="wrap">
          <div className="teaser-content">
            <p className="eyebrow-caps" style={{ opacity: 0.75, marginBottom: 14 }}>Vision</p>
            <h2>Des matières, des architectures, une mémoire.</h2>
            <Link className="text-link" to="/vision" style={{ borderColor: 'var(--paper)' }}>
              Découvrir la vision
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  )
}
