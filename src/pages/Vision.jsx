import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import useTitle from '../components/useTitle'
import { inspirations } from '../data/content'

export default function Vision() {
  useTitle('Vision')

  return (
    <>
      <PageIntro
        eyebrow="Vision"
        title="Ce qui nourrit chaque silhouette, bien avant le premier croquis."
        lede="Une géographie personnelle faite de terres, de bâtis et de gestes hérités — traduite en formes contemporaines."
      />

      <div className="wrap">
        {inspirations.map((b, i) => (
          <Reveal className={`univers-block${i % 2 ? ' flip' : ''}`} key={b.index}>
            <div className="ub-media">
              <div className="img-frame ratio-tall">
                <img src={b.img} alt={b.alt} />
              </div>
            </div>
            <div className="ub-text">
              <span className="ub-index">{b.index}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  )
}
