import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shows', label: 'Shows' },
  { to: '/shop', label: 'Shop & Fan Packs' },
  { to: '/bio', label: 'Bio' },
  { to: '/gig-gazette', label: 'Gig Gazette' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isGazette = location.pathname.startsWith('/gig-gazette')

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className={`navbar ${isGazette ? 'gig-gazette' : ''}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" aria-label="The Gardners — Home">
          The Gardners
        </NavLink>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <nav id="primary-nav" className={`navbar__nav ${open ? 'is-open' : ''}`}>
          <ul>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'is-active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
