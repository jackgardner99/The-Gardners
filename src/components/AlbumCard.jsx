import SmartImage from './SmartImage'
import PlatformIcon from './platformIcons'
import { PLATFORM_LABELS } from '../data/platformLabels'
import './AlbumCard.css'

export default function AlbumCard({ release, featured = false, catalog = false, selected = false, onSelect }) {
  const { title, coverImage, releaseDate, links = {} } = release
  const year = releaseDate ? new Date(releaseDate).getFullYear() : ''

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
          {Object.entries(links).map(([key, url]) =>
            url ? (
              <li key={key}>
                <a href={url} target="_blank" rel="noreferrer noopener" className="album-card__link">
                  <span className="album-card__icon-badge">
                    <PlatformIcon platform={key} />
                  </span>
                  <span className="album-card__link-label">{PLATFORM_LABELS[key] || key}</span>
                </a>
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </li>
  )
}
