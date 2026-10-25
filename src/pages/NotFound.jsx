import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import useTitle from '../components/useTitle'

export default function NotFound() {
  useTitle('Page introuvable')

  return (
    <>
      <PageIntro eyebrow="404" title="Cette page n'existe pas, ou plus." />
      <div className="wrap section-pad-sm">
        <Link className="text-link" to="/">Retour à l'accueil</Link>
      </div>
    </>
  )
}
