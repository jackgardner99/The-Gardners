import { useEffect, useState } from 'react'

const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID
const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY

const URL_PATTERN = /https?:\/\/\S+/i

function extractTicketUrl(description) {
  if (!description) return null
  const match = description.match(URL_PATTERN)
  return match ? match[0].replace(/[.,)\]]+$/, '') : null
}

function splitVenueCity(summary) {
  if (!summary) return { venue: 'TBA', city: '' }
  const [venue, ...rest] = summary.split(' — ').length > 1
    ? summary.split(' — ')
    : summary.split(' - ')
  return { venue: venue.trim(), city: rest.join(' - ').trim() }
}

function mapEventToShow(event) {
  const { venue, city } = splitVenueCity(event.summary)
  return {
    id: event.id,
    venue,
    city,
    date: event.start?.dateTime || event.start?.date,
    hasTime: Boolean(event.start?.dateTime),
    ticketUrl: extractTicketUrl(event.description),
  }
}

export function useGoogleCalendarShows() {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchShows() {
      if (!CALENDAR_ID || !API_KEY) {
        if (!cancelled) {
          setError('Calendar is not configured yet.')
          setLoading(false)
        }
        return
      }

      setLoading(true)
      setError(null)

      try {
        const nowISO = new Date().toISOString()
        const endpoint = new URL(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events`,
        )
        endpoint.searchParams.set('key', API_KEY)
        endpoint.searchParams.set('singleEvents', 'true')
        endpoint.searchParams.set('orderBy', 'startTime')
        endpoint.searchParams.set('timeMin', nowISO)

        const response = await fetch(endpoint.toString())

        if (!response.ok) {
          throw new Error(`Calendar request failed (${response.status})`)
        }

        const data = await response.json()
        const items = Array.isArray(data.items) ? data.items : []
        const upcoming = items
          .map(mapEventToShow)
          .filter((show) => show.date && new Date(show.date) >= new Date())
          .sort((a, b) => new Date(a.date) - new Date(b.date))

        if (!cancelled) {
          setShows(upcoming)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Could not load shows right now.')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchShows()

    return () => {
      cancelled = true
    }
  }, [])

  return { shows, loading, error }
}
