import { useState } from 'react'
import SmartImage from '../components/SmartImage'
import './Bio.css'

const SECTIONS = [
  { id: 'gardners', label: 'The Gardners', image: '/images/bio/TheGardnersBio.jpg', alt: 'Jack Gardner and Kadi Beth' },
  { id: 'jack', label: "Jack's Bio", image: '/images/bio/JackBio.JPEG', alt: 'Jack Gardner' },
  { id: 'kadi', label: "Kadi's Bio", image: '/images/bio/KadiBio.JPG', alt: 'Kadi Beth' },
]

export default function Bio() {
  const [activeSection, setActiveSection] = useState('gardners')

  return (
    <section className="section bio-page">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Where it started</span>
          <h1>Bio</h1>
        </div>

        <div className="bio-page__tabs" role="tablist">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              role="tab"
              aria-selected={activeSection === section.id}
              className={`bio-page__tab ${activeSection === section.id ? 'is-active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="bio-page__layout">
          <div className="bio-page__body" key={`body-${activeSection}`}>
            {activeSection === 'gardners' && (
              <>
                <p>
                  The Gardners are Jack Gardner and Kadi Beth. Kadi tells the stories with profound lyricism,
                  while Jack provides the taste of music and harmonies. Together, they have written over 150 songs
                  and are writing more. A couple of airheads, they have a deep desire to be detached and free
                  from the reality of modern society.
                </p>
                <p>
                  Jack and Kadi met in Nashville at an open mic night, subconsciously knowing the future they were about to embark
                  with each other. They spent a couple years not only enjoying the company of each other, but have been constantly
                  researching the truth behind living the highest form of life, love, and happiness. They got engaged on July 3rd, 2026, 
                  and are looking to find more wisdom to life's most difficult questions.
                </p>
                <p>
                  The Gardners EPK is the first product of Jack and Kadi's blended musicianship and time together, recorded at Blue House Studios,
                  and they are more than excited to get this show on the road. The Gardners EP is out everywhere! Go stream it, and keep up
                  with where the Gardners are playing today.
                </p>
              </>
            )}

            {activeSection === 'jack' && (
              <>
                <p>
                  Jack is an award-winning singer and multi-instrumentalist from a small lake town called Heber Springs in Arkansas,
                  where he grew up playing folk and gospel music with his family. He is the recipient of the Art Porter Scholarship Award,
                  Musician of Merit from the Duke Ellington Jazz at the Lincoln Center, the Louis Armstrong Award, and multiple All-Region
                  and All-State awards.
                </p>
                <p>
                  Jack's family band, The Gardner Boys, were one of the biggest hits in the northern Arkansas region by the time he
                  was 9. They were regulars at the Ozark Folk Center, recorded 2 gospel and folk albums, won the Variety Act at the
                  Arkansas State Fair, featured on Channel 7 Morning News on multiple occasions, and were featured on Arkansas'
                  20/20 to Watch.
                </p>
                <p>
                  In Jack's later adolescent years, he moved to Nashville in 2017 to pursue music professionally. He attended Belmont
                  University's Music Program for 3 years until he started offering his services as a full-time studio and live musician.
                  He joined the Blue House Band in June of 2022 as the saxophonist for their open mic night, Artist Night, in downtown Nashville,
                  then officially joined the band towards the end of 2022. He has recorded over 100 songs with local artists at the band's
                  studio, Blue House Studios, one of them being the recipient of the Josie Award at the Grand Ole Opry.
                </p>
              </>
            )}

            {activeSection === 'kadi' && (
              <>
                <p>
                  Kadi Beth is a soulful rock singer with incredible abilities to turns life's trials and tribulations into melody.
                  Kadi grew up in Athens, Georgia home to artists like R.E.M., the B52’s, Widespread Panic, and Pylon.
                  As a young kid, Kadi began singing in the church choir. With her powerhouse voice, she needed no microphone.
                </p>
                <p>
                  In middle school, she auditioned for her first rock band, “the Friday Knights”, finding a home for her rock voice
                  and beginning her music career. The band played the main stage at the Athens summer music festival “Athfest” in 2011.
                </p>
                <p>
                  In her second band “Zenith Blue”, Kadi took a more prominent role and began performing her own songs. All about 15 years old,
                  Zenith Blue was also known around town to cover the greats, namely Led Zeppelin and The Who. The group played Athfest,
                  the 40 Watt, and participated in an album called “Players of the Lyre” benefitting the American Cancer Society in 2016.
                </p>
                <p>
                  Kadi attended college at the University of Georgia, studying International Affairs. Fluent in Spanish and Portuguese,
                  she grew her love for languages and minored in Russian and Arabic while also studying Mandarin. With dreams to develop
                  intimate connections with fans globally, Kadi expanded her songwriting skills and wrote a song in Portuguese called “Serial Lover”.
                  To make louder echoes, Kadi was on the hunt for a band and created “Kadillak” with local Athens friends. Kadillak recorded
                  two EPs and 1 album showcasing. The first album, released in 2021, was recorded by David Barbe, producer of Drive-By Truckers,
                  long-time musician, and Director of Music Business at the University of Georgia. The second and final Kadillak EP was recorded in the basement
                  on tape with the help of a friend, Jeff Vernon.
                </p>
                <p>
                  Kadi now resides in Nashville, Tennessee, pursuing a solo career and sharing her songwriting skills with other artists.
                  Since 2023, Kadi has released 8 solo singles. Her music video "Yonah" filmed on top of Yonah mountain in Georgia won
                  Best Music Video in NYC's International Film Festival and 5 other film festival awards around the globe. Kadi also founded the group
                  “Echo5” - a garage-punk band that released a 3-song EP in 2023. With an acoustic rock album on the way, Kadi hopes to use her musical
                  abilities be a voice for others, turning personal stories into universal melodies.
                </p>
              </>
            )}
          </div>

          <div className="bio-page__portrait" key={`portrait-${activeSection}`}>
            <SmartImage
              src={SECTIONS.find((section) => section.id === activeSection).image}
              alt={SECTIONS.find((section) => section.id === activeSection).alt}
              className="bio-page__portrait-img"
              placeholderClassName="bio-page__portrait-img bio-page__portrait-img--placeholder"
            />
          </div>
        </div>

        <hr className="stitch" />


      </div>
    </section>
  )
}
