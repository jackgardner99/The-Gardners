import { useState } from 'react'
import { Link } from 'react-router-dom'
import AlbumCard from '../components/AlbumCard'
import VideoCard from '../components/VideoCard'
import releases from '../data/releases.json'
import videos from '../data/videos.json'
import './Home.css'

export default function Home() {
  const [heroPhotoLoaded, setHeroPhotoLoaded] = useState(false)
  const sortedReleases = [...releases].sort(
    (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate),
  )
  const [selectedId, setSelectedId] = useState(sortedReleases[0]?.id)
  const selectedAlbum = sortedReleases.find((release) => release.id === selectedId) ?? sortedReleases[0]

  return (
    <>
      <section className="hero">
        <img
          src="/images/home/homephoto.JPG"
          alt=""
          className={`hero__photo ${heroPhotoLoaded ? 'is-loaded' : ''}`}
          aria-hidden="true"
          onLoad={() => setHeroPhotoLoaded(true)}
        />
        <div className="container hero__inner">
          <span className="eyebrow">Rustic folk-rock, made by hand</span>
          <h1 className="hero__title">The Gardners</h1>
          <p className="hero__lede">
            Front-porch harmonies, road-worn stories, and songs built to be sung back to us.
            Catch us live, take a piece of the band home, or dig into the world of Gig Gazette.
          </p>
          <div className="hero__ctas">
            <Link to="/shows" className="btn btn-primary">
              See upcoming shows
            </Link>
          </div>
        </div>
      </section>

      {selectedAlbum && (
        <section className="section new-album">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow eyebrow--alt">Now playing</span>
              <h2>Selected album</h2>
            </div>
            <ul className="new-album__module">
              <AlbumCard key={selectedAlbum.id} release={selectedAlbum} featured />
            </ul>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The whole shed</span>
            <h2>Albums</h2>
          </div>
          <ul className="grid grid--catalog">
            {sortedReleases.map((release) => (
              <AlbumCard
                key={release.id}
                release={release}
                catalog
                selected={release.id === selectedAlbum?.id}
                onSelect={(picked) => setSelectedId(picked.id)}
              />
            ))}
          </ul>
        </div>
      </section>

      <hr className="stitch container" />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--alt">Watch</span>
            <h2>Latest videos</h2>
          </div>
          <ul className="grid grid--3">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section gazette-teaser">
        <div className="container gazette-teaser__inner">
          <div>
            <span className="eyebrow">Something new</span>
            <h2>Gig Gazette</h2>
            <p>
              Our companion app — set lists, backstage dispatches, and fan-only extras. Peek
              behind the neon curtain.
            </p>
          </div>
          <Link to="/gig-gazette" className="btn btn-primary">
            Explore Gig Gazette
          </Link>
        </div>
      </section>
    </>
  )
}
