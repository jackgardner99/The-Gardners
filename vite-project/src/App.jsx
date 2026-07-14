import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shows from './pages/Shows'
import Shop from './pages/Shop'
import Bio from './pages/Bio'
import GigGazette from './pages/GigGazette'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/gig-gazette" element={<GigGazette />} />
          <Route
            path="*"
            element={
              <section className="section container">
                <h1>Page not found</h1>
                <p>That page wandered off. Try one of the links above.</p>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
