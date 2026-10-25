import { gsap, useGSAP, MOTION_OK } from '../lib/gsap'

// Parallaxe d'une image dans un conteneur en overflow: hidden.
// L'image est agrandie juste assez pour ne jamais laisser de bord visible.
export default function useParallax(scopeRef, selector, amount = 10, dependencies = []) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray(selector, scopeRef.current).forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -amount, scale: 1 + (amount * 2) / 100 },
            {
              yPercent: amount,
              ease: 'none',
              scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
            },
          )
        })
      })
      return () => mm.revert()
    },
    { scope: scopeRef, dependencies },
  )
}
