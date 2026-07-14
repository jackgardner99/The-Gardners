import { useGoogleCalendarShows } from '../hooks/useGoogleCalendarShows'
import ShowRow from '../components/ShowRow'
import './Shows.css'

export default function Shows() {
  const { shows, loading, error } = useGoogleCalendarShows()

  return (
    <section className="section shows-page">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">On the road</span>
          <h1>Shows</h1>
          <p className="shows-page__intro">
            Every date we've got booked, pulled straight from the tour calendar.
          </p>
        </div>

        {loading && (
          <p className="shows-page__status" role="status">
            Loading shows&hellip;
          </p>
        )}

        {!loading && error && (
          <p className="shows-page__status shows-page__status--error" role="alert">
            We couldn't load the show calendar right now. Check back soon, or find us on
            socials for the latest dates.
          </p>
        )}

        {!loading && !error && shows.length === 0 && (
          <p className="shows-page__status">No shows booked — check back soon.</p>
        )}

        {!loading && !error && shows.length > 0 && (
          <ul className="shows-page__list">
            {shows.map((show) => (
              <ShowRow key={show.id} show={show} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
