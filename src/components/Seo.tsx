import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export function SEO({ description, lang, meta, keywords, title }) {
  return null
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
