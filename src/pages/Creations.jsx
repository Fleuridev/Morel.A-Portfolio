import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import useTitle from '../components/useTitle'
import { creations, filters, matchesFilter } from '../data/creations'

export default function Creations() {
  useTitle('Créations')
  const [active, setActive] = useState('Toutes')
  const visible = creations.filter((c) => matchesFilter(c, active))

  return (
    <>
      <PageIntro
        eyebrow="Créations"
        title="Chaque pièce, une réponse à une matière, une silhouette ou une mémoire."
        lede="Robes, ensembles et pièces de cérémonie, pensés et façonnés à l'atelier — chaque création est une étude complète."
      />

      <div className="wrap">
        <div className="filter-row">
          {filters.map((f) => (
            <button
              key={f}
              className={f === active ? 'is-active' : undefined}
              aria-pressed={f === active}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grille éditoriale : décalages verticaux gérés en CSS (.masonry > :nth-child) */}
        <div className="masonry">
          {visible.map((c, i) => (
            <Reveal
              as={Link}
              key={`${active}-${c.slug}`}
              className="m-item"
              to={`/creations/${c.slug}`}
              delay={(i % 3) * 0.08}
            >
              <div className="img-frame ratio-fashion">
                <img src={c.images[0].src} alt={c.images[0].alt} loading="lazy" />
                <span className="tag">{c.category}</span>
              </div>
              <div className="cap">
                <span className="name">{c.name}</span>
                <span className="yr">{c.year ?? c.category}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="wrap section-pad-sm" style={{ textAlign: 'center' }}>
        <p className="eyebrow-caps" style={{ color: 'var(--stone)' }}>
          {visible.length ? 'Fin de la sélection actuelle' : 'Aucune création pour ce filtre'}
        </p>
      </div>
    </>
  )
}
