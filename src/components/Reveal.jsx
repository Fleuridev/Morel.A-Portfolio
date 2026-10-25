import { useRef } from 'react'
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap'

// Apparition au scroll, pilotée par GSAP ScrollTrigger
export default function Reveal({ as: Tag = 'div', delay = 0, children, ...rest }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.from(ref.current, {
          autoAlpha: 0,
          y: 28,
          duration: 1.1,
          delay,
          scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
        })
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  )
}
