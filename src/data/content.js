// MOREL.A — contenus éditoriaux (vision, parcours)

const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const inspirations = [
  {
    index: '01 — Matières',
    title: 'La terre comme palette',
    text: 'Ocres, terres cuites, sables — les couleurs viennent du sol avant de venir du tissu. Chaque teinte est choisie pour sa patine, jamais pour sa saturation.',
    img: img('morela-u1', 900, 1150),
    alt: 'Texture de terre cuite et latérite',
  },
  {
    index: '02 — Architecture',
    title: 'Des lignes construites',
    text: 'Les toitures basses, les murs en banco, les cours intérieures — une grammaire de volumes qui devient épaule, pince et surpiqûre.',
    img: img('morela-u2', 900, 1150),
    alt: 'Architecture vernaculaire, lignes et ombres',
  },
  {
    index: '03 — Silhouettes',
    title: 'Le corps qui marche',
    text: 'Chaque forme est pensée en mouvement, jamais figée sur un mannequin. La démarche précède la coupe.',
    img: img('morela-u3', 900, 1150),
    alt: 'Silhouettes et mouvement du corps',
  },
  {
    index: '04 — Artisanat',
    title: 'La main avant la machine',
    text: 'Tissages, teintures, broderies — un dialogue constant avec des savoir-faire transmis, réinterprétés sans jamais être copiés.',
    img: img('morela-u4', 900, 1150),
    alt: 'Détail de tissage artisanal',
  },
  {
    index: '05 — Photographie',
    title: 'Voir en noir et blanc',
    text: "Les références visuelles naissent souvent d'une photographie argentique — sa lumière dure, ses contrastes, son grain.",
    img: img('morela-u5', 900, 1150),
    alt: 'Photographie argentique en noir et blanc',
  },
]

export const milestones = [
  { year: 2022, title: 'Premiers moulages', note: "Série d'expérimentations en toile de coton" },
  { year: 2022, title: 'Étude — teintures naturelles', note: 'Recherche autour des pigments végétaux' },
  { year: 2021, title: 'Collaboration — atelier tissage', note: 'Projet mené avec des artisans locaux' },
  { year: 2021, title: 'Carnet de croquis, vol. I', note: 'Cinquante silhouettes non produites' },
  { year: 2020, title: 'Série photographique — Origines', note: 'Premier travail documentaire personnel' },
  { year: 2019, title: 'Première pièce cousue à la main', note: 'Point de départ du projet MOREL.A' },
]

export const archiveImages = [
  { src: img('morela-arc1', 500, 500), alt: 'Archive — expérimentation en toile' },
  { src: img('morela-arc2', 500, 500), alt: 'Archive — étude de teinture' },
  { src: img('morela-arc3', 500, 500), alt: 'Archive — atelier de tissage' },
  { src: img('morela-arc4', 500, 500), alt: 'Archive — carnet de croquis' },
]
