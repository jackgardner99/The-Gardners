import './ShowRow.css'

function formatDate(dateString) {
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return { day: '--', month: '', weekday: '', full: dateString }
  return {
    day: date.toLocaleDateString('en-US', { day: '2-digit' }),
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
    full: date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
  }
}

export default function ShowRow({ show }) {
  const { day, month, weekday, full, time } = formatDate(show.date)

  return (
    <li className="show-row card">
      <div className="show-row__date" aria-hidden="true">
        <span className="show-row__weekday">{weekday}</span>
        <span className="show-row__day">{day}</span>
        <span className="show-row__month">{month}</span>
      </div>

      <div className="show-row__details">
        <h3 className="show-row__venue">{show.venue}</h3>
        {(show.city || (show.hasTime && time)) && (
          <p className="show-row__city">
            {show.city}
            {show.city && show.hasTime && time ? ' · ' : ''}
            {show.hasTime ? time : ''}
          </p>
        )}
        <p className="show-row__datetime visually-hidden">
          {full}
          {show.hasTime && time ? ` at ${time}` : ''}
        </p>
      </div>

      {show.ticketUrl ? (
        <a
          className="btn btn-primary show-row__cta"
          href={show.ticketUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          Tickets
        </a>
      ) : (
        <span className="show-row__cta show-row__cta--soon">Details soon</span>
      )}
    </li>
  )
}
