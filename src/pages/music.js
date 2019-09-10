import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Releases from '../components/Releases'
import SEO from '../components/seo'
import Page from '../components/Page'

import { Heading } from 'grommet'

const IndexPage = () => (
  <Page>
    <SEO title="Music" keywords={['music', 'band', 'kansas city']} />
    <Heading>Music</Heading>
    <Releases />

    <h4>EIGHT ONE SIXTY in-studio session</h4>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/36XKO9bXv-Q"
      frameBorder="0"
      allowFullScreen="allowfullscreen"
    />
  </Page>
)

export default IndexPage
