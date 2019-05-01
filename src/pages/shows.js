import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Shows from '../components/Shows'
import SEO from '../components/seo'
import Page from '../components/Page'

const IndexPage = () => (
  <Page>
    <SEO title="Fullbloods" keywords={['music', 'band', 'kansas city']} />

    <Shows />
  </Page>
)

export default IndexPage
