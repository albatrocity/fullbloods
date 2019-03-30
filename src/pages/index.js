import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import AlbumCover from '../components/AlbumCover'
import Shows from '../components/Shows'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Fullbloods</h1>
    <section id="mild_west">
      <div className="content">
        <h2 className="title">Mild West</h2>
        <a href="http://highdiverecords.com/?album=mild-west-by-fullbloods">
          <AlbumCover />
        </a>
        <p>
          2016's release. Analog and digital formats available from{' '}
          <a href="http://www.highdivekc.com/albums/mild-west-by-fullbloods/">
            High Dive Records
          </a>
        </p>
      </div>
    </section>
    <section id="shows">
      <div className="content">
        <h2 className="title">Shows</h2>
        <Shows />
      </div>
    </section>
    <section id="tunes">
      <div className="content">
        <h2 className="title">Tunes</h2>
        <p>
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/86662207&amp;amp;color=ff5500&amp;amp;auto_play=false&amp;amp;hide_related=false&amp;amp;show_comments=true&amp;amp;show_user=true&amp;amp;show_reposts=false"
          />
        </p>
        <h4>EIGHT ONE SIXTY in-studio session</h4>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/36XKO9bXv-Q"
          frameBorder="0"
          allowFullScreen="allowfullscreen"
        />
        <ul>
          <li>
            <a href="https://open.spotify.com/artist/5cyE8hPu5ZeisPUPmOl9Aw">
              Spotify
            </a>
          </li>
          <li>
            <a href="https://itunes.apple.com/us/artist/fullbloods/id553368622">
              iTunes
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="stuff">
      <p>
        Here's a{' '}
        <a href="http://bridge909.org/eightonesixty/fullbloods/">
          live in-studio EIGHT ONE SIXY session
        </a>{' '}
        at 90.9 The Bridge that we did.
      </p>
      <p>
        We're on{' '}
        <a href="http://highdiverecords.com/?band=fullbloods">
          High Dive Records
        </a>
      </p>
      <ul>
        <li>
          <a href="https://www.facebook.com/fullbloods">Facebook</a>
        </li>
        <li>
          <a href="https://twitter.com/fullbloods">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/fullbloods.mp3/">Instagram</a>
        </li>
        <li>
          <a href="mailto:booking@fullbloods.com">Booking</a>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
