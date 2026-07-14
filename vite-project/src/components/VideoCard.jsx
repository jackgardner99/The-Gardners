import { useState } from 'react'
import SmartImage from './SmartImage'
import './VideoCard.css'

export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)
  const { id, title, thumbnail } = video

  return (
    <li className="video-card card">
      <div className="video-card__frame">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-card__play"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
          >
            <SmartImage src={thumbnail} placeholderClassName="video-card__placeholder" />
            <span className="video-card__play-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path fill="currentColor" d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <h3 className="video-card__title">{title}</h3>
    </li>
  )
}
