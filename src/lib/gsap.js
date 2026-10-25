// MOREL.A — configuration GSAP partagée (plugins, easing maison, préférences de mouvement)
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// Équivalent de --ease: cubic-bezier(.16,.8,.24,1) dans styles.css
gsap.defaults({ ease: 'power4.out', duration: 1 })

// Les animations ne sont créées que si l'utilisateur n'a pas demandé moins de mouvement
export const MOTION_OK = '(prefers-reduced-motion: no-preference)'

export { gsap, ScrollTrigger, useGSAP }
