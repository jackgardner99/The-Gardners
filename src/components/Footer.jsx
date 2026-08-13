import { NavLink, useLocation } from 'react-router-dom'
import './Footer.css'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shows', label: 'Shows' },
  { to: '/bio', label: 'Bio' },
  { to: '/gig-gazette', label: 'Gig Gazette' },
]

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/wearethegardnersmusic/',
    path: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm4.75-3.25a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/wearethegardnersmusic',
    path: 'M13.5 21v-7.2h2.4l.36-2.8h-2.76V9.1c0-.81.22-1.36 1.39-1.36h1.48V5.2A19.9 19.9 0 0014.4 5c-2.13 0-3.6 1.3-3.6 3.68V11H8.4v2.8h2.4V21h2.7z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@TheGardnersMusic',
    path: 'M21.6 7.6a2.7 2.7 0 00-1.9-1.9C18 5.2 12 5.2 12 5.2s-6 0-7.7.5A2.7 2.7 0 002.4 7.6 28 28 0 002 12a28 28 0 00.4 4.4 2.7 2.7 0 001.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 001.9-1.9A28 28 0 0022 12a28 28 0 00-.4-4.4zM10 15.2V8.8L15.8 12z',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@the.gardners97',
    path: 'M16.6 5.82c-.9-.78-1.44-1.9-1.44-3.16h-3.09v12.4a2.59 2.59 0 01-2.59 2.5 2.6 2.6 0 01-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.15 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.32 1.38V7.3c-1.13 0-2.16-.44-2.88-1.48z',
  },
]

export default function Footer() {
  const location = useLocation()
  const isGazette = location.pathname.startsWith('/gig-gazette')
  const year = new Date().getFullYear()

  return (
    <footer className={`footer ${isGazette ? 'gig-gazette' : ''}`}>
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__wordmark">The Gardners</span>
          <p className="footer__tag">Rustic folk-rock, made by hand.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <ul>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className="footer__link">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer__socials">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer noopener" aria-label={s.label}>
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d={s.path} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} The Gardners. All rights reserved.</p>
      </div>
    </footer>
  )
}
