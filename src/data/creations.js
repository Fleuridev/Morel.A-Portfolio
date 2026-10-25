// MOREL.A — catalogue des créations (source unique pour l'accueil, le portfolio et les pages détail)
// Photos : public/images/creations/ (préparées depuis les photos du styliste).
// Les noms sont descriptifs et provisoires ; year, materials et description sont à compléter —
// un champ laissé à null n'est simplement pas affiché.

const photo = (slug, n = 1) => `/images/creations/${slug}-${n}.jpg`

const creation = (slug, name, category, alts, extra = {}) => ({
  slug,
  name,
  category,
  year: null,
  materials: null,
  description: null,
  images: alts.map((alt, i) => ({ src: photo(slug, i + 1), alt })),
  ...extra,
})

export const creations = [
  creation('robe-sirene-volants', 'Robe sirène à volants', 'Robe', ['Robe sirène gris et noir à volants, portée en studio']),
  creation('robe-asymetrique-anis', 'Robe asymétrique vert anis', 'Robe', ["Robe asymétrique vert anis à épaule drapée"]),
  creation('ensemble-carreaux', 'Ensemble pantalon à carreaux', 'Ensemble', ['Ensemble pantalon à carreaux noir et blanc, porté assis']),
  creation('caftan-wax-franges', 'Caftan wax à franges', 'Robe', ['Caftan en wax vert à motifs géométriques et franges noires']),
  creation('corset-wax-pantalon', 'Corset wax et pantalon large', 'Ensemble', ['Corset en wax et pantalon large blanc']),
  creation('robe-wax-volant', "Robe wax à volant d'épaule", 'Robe', [
    "Robe longue en wax à volant d'épaule noir",
    'Détail du volant et du bustier en wax',
  ]),
  creation('bustier-jupe-franges', 'Bustier et jupe à franges', 'Ensemble', ['Bustier et jupe indigo à franges']),
  creation('veste-kimono-imprimee', 'Veste kimono imprimée', 'Ensemble', [
    'Veste kimono noire imprimée, portée assise',
    'Portrait en veste kimono imprimée',
  ]),
  creation('robe-soiree-satin', 'Robe de soirée satinée', 'Robe', ['Robe de soirée noire satinée à manches bouffantes, portée lors d’un gala']),
  creation('tunique-brodee', 'Tunique brodée', 'Ensemble', ['Tunique blanche à broderie florale et pantalon']),
  creation('haut-volants-jupe-wax', 'Haut à volants et jupe wax', 'Ensemble', ['Haut noir à volants et jupe en wax, porté assis']),
  creation('ensemble-chemise-pantalon', 'Ensemble chemise et pantalon', 'Ensemble', ['Ensemble chemise zippée et pantalon noir, porté en extérieur']),
]

export function getCreation(slug) {
  return creations.find((item) => item.slug === slug) ?? null
}

export function getSiblings(slug) {
  const i = creations.findIndex((item) => item.slug === slug)
  const n = creations.length
  return {
    prev: creations[(i - 1 + n) % n],
    next: creations[(i + 1) % n],
  }
}

export const filters = ['Toutes', 'Robes', 'Ensembles']

export function matchesFilter(creation, filter) {
  if (filter === 'Toutes') return true
  return `${creation.category}s` === filter
}
