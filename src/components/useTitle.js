import { useEffect } from 'react'

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — MOREL.A` : 'MOREL.A — Styliste / Créateur'
  }, [title])
}
