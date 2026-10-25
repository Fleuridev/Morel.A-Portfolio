import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import useTitle from '../components/useTitle'
import { milestones, archiveImages } from '../data/content'

export default function Parcours() {
  useTitle('Parcours')

  return (
    <>
      <PageIntro
        eyebrow="Parcours"
        title="Derrière MOREL.A, une trajectoire, pas seulement une marque."
      />

      {/* Récit */}
      <div className="wrap section-pad" style={{ paddingTop: 'clamp(24px, 4vw, 40px)' }}>
        <div className="about-layout">
          <Reveal className="about-media">
            <div className="img-frame ratio-tall">
              <img src="https://picsum.photos/seed/morela-about1/900/1150" alt="Le styliste MOREL.A dans son atelier" />
            </div>
            <div className="about-media-2 img-frame ratio-wide">
              <img src="https://picsum.photos/seed/morela-about2/900/650" alt="Le styliste au travail, penché sur un patron" />
            </div>
          </Reveal>

          <Reveal className="about-copy">
            <p className="lede">
              J'ai grandi entre deux mondes — celui des tissus que cousait ma mère, et celui des lignes que je dessinais en marge de mes cahiers.
            </p>
            <p>
              MOREL.A n'est pas né d'un plan de carrière, mais d'un besoin de traduire une mémoire en vêtements portables. Chaque collection part d'un lieu, d'une matière ou d'un souvenir précis — jamais d'une tendance.
            </p>
            <p>
              Je travaille seul, ou avec un petit cercle d'artisans de confiance, du premier croquis jusqu'à la dernière finition à la main. Cette lenteur est un choix : elle laisse le temps à chaque pièce de devenir juste.
            </p>
            <p>
              Aujourd'hui, mon travail se construit autour d'une question simple : comment habiller un corps contemporain sans effacer d'où l'on vient. C'est cette tension — entre héritage et modernité — qui anime chaque nouvelle création.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Repères chronologiques */}
      <div className="wrap section-pad-sm">
        <Reveal className="section-head">
          <h2>Repères</h2>
          <p className="section-note">
            Les expérimentations, les débuts, les projets qui ont construit le regard.
          </p>
        </Reveal>

        <div className="archive-list">
          {milestones.map((r) => (
            <Reveal className="archive-row" key={r.title}>
              <span className="yr">{r.year}</span>
              <span className="title">{r.title}</span>
              <span className="note">{r.note}</span>
            </Reveal>
          ))}
        </div>

        <div className="archive-grid">
          {archiveImages.map((a) => (
            <Reveal className="img-frame ratio-square" key={a.src}>
              <img src={a.src} alt={a.alt} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}
