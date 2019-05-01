import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Page from '../components/Page'

const IndexPage = () => (
  <Page>
    <SEO title="Fullbloods" keywords={['music', 'band', 'kansas city']} />

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
  </Page>
)

export default IndexPage
