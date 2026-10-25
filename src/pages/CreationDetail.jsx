import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import useTitle from '../components/useTitle'
import { getCreation, getSiblings } from '../data/creations'
import NotFound from './NotFound'

export default function CreationDetail() {
  const { slug } = useParams()
  const creation = getCreation(slug)
  useTitle(creation?.name ?? 'Introuvable')

  if (!creation) return <NotFound />
  const { prev, next } = getSiblings(slug)
  const [cover, ...gallery] = creation.images

  // Seuls les champs renseignés sont affichés
  const meta = [
    ['Catégorie', creation.category],
    ['Année', creation.year],
    ['Matières', creation.materials],
  ].filter(([, value]) => value)

  return (
    <>
      {/* Silhouette entière : la photo n'est pas recadrée */}
      <div className="detail-hero" key={slug}>
        <img src={cover.src} alt={cover.alt} />
      </div>

      <div className="wrap">
        <div className="detail-meta">
          <h1>{creation.name}</h1>
          <div className="meta-side">
            <dl>
              {meta.map(([label, value]) => (
                <div key={label} style={{ display: 'contents' }}>
                  <dt>{label}</dt><dd>{value}</dd>
                </div>
              ))}
            </dl>
            {creation.description && <p>{creation.description}</p>}
          </div>
        </div>

        {gallery.length > 0 && (
          <div className="detail-gallery">
            {gallery.map((g, i) => (
              // key sur le slug pour rejouer l'apparition en passant d'une création à l'autre
              <Reveal as="figure" className={`dg-${i + 1}`} key={`${slug}-${i}`}>
                <div className="img-frame ratio-fashion">
                  <img src={g.src} alt={g.alt} loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <nav className="wrap detail-nav">
        <Link to={`/creations/${prev.slug}`}>← Précédente</Link>
        <Link
          to="/creations"
          style={{ fontFamily: 'var(--sans)', fontStyle: 'normal', fontSize: 13, letterSpacing: '.1em', alignSelf: 'center' }}
        >
          Toutes les créations
        </Link>
        <Link to={`/creations/${next.slug}`}>Suivante →</Link>
      </nav>
    </>
  )
}
