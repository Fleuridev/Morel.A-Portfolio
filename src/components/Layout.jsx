import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { gsap, useGSAP, ScrollTrigger, MOTION_OK } from '../lib/gsap'

const navItems = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/creations', label: 'Créations' },
  { to: '/vision', label: 'Vision' },
  { to: '/parcours', label: 'Parcours' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Fond crème dès qu'on quitte le haut de page, pour rester lisible sur tout contenu
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  // En haut de l'accueil, l'en-tête est posé sur la photo du héros : texte clair
  const onPhoto = pathname === '/' && !scrolled
  const classes = ['site-header', scrolled && 'is-scrolled', (onPhoto || open) && 'is-light', open && 'is-open']
    .filter(Boolean)
    .join(' ')

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className={classes}>
      <Link to="/" className="mark" aria-label="MOREL.A — accueil">
        <span className="mark-logo" aria-hidden="true"></span>
      </Link>
      <button
        className="nav-toggle"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'FERMER' : 'MENU'}
      </button>
      <nav className={`site-nav${open ? ' is-open' : ''}`}>
        {navItems.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-mark">MOREL.A</div>
        <div className="rule" style={{ marginBottom: 28 }}></div>
        <div className="footer-row">
          <span>© 2026 MOREL.A. Tous droits réservés.</span>
          <div className="footer-links">
            <Link to="/contact">Contact</Link>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)

  // Retour en haut de page à chaque navigation (comportement d'un site multi-pages)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Les images se chargent après le rendu et décalent la mise en page :
  // on recalcule les déclencheurs ScrollTrigger à chaque image chargée
  useEffect(() => {
    const imgs = [...mainRef.current.querySelectorAll('img')].filter((img) => !img.complete)
    const refresh = () => ScrollTrigger.refresh()
    imgs.forEach((img) => img.addEventListener('load', refresh, { once: true }))
    return () => imgs.forEach((img) => img.removeEventListener('load', refresh))
  }, [pathname])

  // Transition d'entrée de page
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.from(mainRef.current, { autoAlpha: 0, y: 12, duration: 0.7, ease: 'power2.out', clearProps: 'all' })
      })
      return () => mm.revert()
    },
    { dependencies: [pathname] },
  )

  return (
    <>
      <Header />
      <main ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
