export default function PageIntro({ eyebrow, title, lede }) {
  return (
    <div className="wrap page-intro">
      <span className="eyebrow-caps">{eyebrow}</span>
      <h1>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </div>
  )
}
