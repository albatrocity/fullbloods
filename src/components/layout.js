import prom from 'es6-promise'
import 'isomorphic-fetch'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import drawer from '../lib/draw'

import './layout.css'

prom.polyfill()
const Layout = ({ children }) => {
  useEffect(() => {
    // Update the document title using the browser API
    const canvas = document.getElementById('drawCanvas')
    console.log(canvas)
    drawer.setupCanvas(canvas)
  })
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <canvas id="drawCanvas" width="580" height="300" />
          <section id="main">{children}</section>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
