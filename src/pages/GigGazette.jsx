import './GigGazette.css'

const FEATURES = [
  {
    title: 'Live set lists',
    body: "Know what's coming before the encore — updated in real time from the stage.",
  },
  {
    title: 'Backstage dispatches',
    body: 'Photos, voice memos, and tour notes the band posts straight from the green room.',
  },
  {
    title: 'Fan-only drops',
    body: 'Unreleased demos, early ticket windows, and merch only Gig Gazette readers see first.',
  },
]

export default function GigGazette() {
  return (
    <div className="gig-gazette">
      <section className="section gazette-hero">
        <div className="container gazette-hero__inner">
          <span className="eyebrow">Straight from the stage</span>
          <h1 className="gg-wordmark gazette-hero__title">Gig Gazette</h1>
          <p className="gazette-hero__lede">
            The Gardners' companion app — a backstage pass in your pocket. Set lists,
            tour dispatches, and fan-only extras, delivered live.
          </p>
          <a
            className="btn btn-primary"
            href="https://giggazette.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Visit giggazette.com
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ul className="grid grid--3">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="card gazette-feature">
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section gazette-cta">
        <div className="container gazette-cta__inner">
          <h2>Get the Gazette</h2>
          <p>Free to read. No account required for the headlines — sign in for the fan-only stuff.</p>
          <a
            className="btn btn-primary"
            href="https://giggazette.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open Gig Gazette
          </a>
        </div>
      </section>
    </div>
  )
}
