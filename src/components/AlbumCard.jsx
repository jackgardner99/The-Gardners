import SmartImage from './SmartImage'
import PlatformIcon from './platformIcons'
import { PLATFORM_LABELS } from '../data/platformLabels'
import './AlbumCard.css'

export default function AlbumCard({ release, featured = false, catalog = false, selected = false, onSelect }) {
  const { title, coverImage, releaseDate, links = {} } = release
  const year = releaseDate ? new Date(releaseDate).getFullYear() : ''
  const pendingLabels = Object.entries(links)
    .filter(([, url]) => !url?.trim())
    .map(([key]) => PLATFORM_LABELS[key] || key)

  if (catalog) {
    return (
      <li className={`album-card card album-card--catalog ${selected ? 'is-selected' : ''}`}>
        <button
          type="button"
          className="album-card__select"
          aria-pressed={selected}
          onClick={() => onSelect?.(release)}
        >
          <div className="album-card__cover">
            <SmartImage src={coverImage} placeholderClassName="album-card__placeholder" />
          </div>

          <div className="album-card__body">
            <h3 className="album-card__title">{title}</h3>
            {year && <p className="album-card__year">{year}</p>}
            <span className="album-card__selected-badge">
              {selected ? 'Now playing' : 'Select to listen'}
            </span>
          </div>
        </button>
      </li>
    )
  }

  return (
    <li className={`album-card card ${featured ? 'album-card--featured' : ''}`}>
      <div className="album-card__cover">
        <SmartImage src={coverImage} placeholderClassName="album-card__placeholder" />
      </div>

      <div className="album-card__body">
        <h3 className="album-card__title">{title}</h3>
        {year && <p className="album-card__year">{year}</p>}

        <ul className="album-card__links">
          {Object.entries(links).map(([key, url]) => {
            const label = PLATFORM_LABELS[key] || key
            const hasLink = Boolean(url?.trim())

            return (
              <li key={key}>
                {hasLink ? (
                  <a href={url} target="_blank" rel="noreferrer noopener" className="album-card__link">
                    <span className="album-card__icon-badge">
                      <PlatformIcon platform={key} />
                    </span>
                    <span className="album-card__link-label">{label}</span>
                  </a>
                ) : (
                  <span
                    className="album-card__link album-card__link--pending"
                    title={`We are waiting for our album to reach ${label}`}
                  >
                    <span className="album-card__icon-badge">
                      <PlatformIcon platform={key} />
                    </span>
                    <span className="album-card__link-label">Coming soon</span>
                  </span>
                )}
              </li>
            )
          })}
        </ul>

        {pendingLabels.length > 0 && (
          <p className="album-card__pending-note">
            We are waiting for our album to reach {pendingLabels.join(' and ')}.
          </p>
        )}
      </div>
    </li>
  )
}
