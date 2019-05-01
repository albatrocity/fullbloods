import 'isomorphic-fetch'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import {
  Box,
  Grid,
  Button,
  Text,
  Layer,
  ResponsiveContext,
  Grommet,
} from 'grommet'
import BackgroundSection from './BackgroundSection'
import Header from './Header'
import theme from '../lib/theme'

import './layout.css'

const Layout = ({ children }) => {
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
        <Grommet theme={theme}>
          <ResponsiveContext.Consumer>
            {size => {
              const layout = size === 'small' ? 'mobile' : 'desktop'
              return (
                <Box
                  height={layout === 'mobile' ? 'auto' : '100vh'}
                  direction="row-responsive"
                  justify="start"
                  align="start"
                >
                  <Box
                    width="medium"
                    id="sidebar"
                    fill={size === 'small' ? 'horizontal' : 'vertical'}
                  >
                    <BackgroundSection layout={layout}>
                      <Box
                        pad={{ right: 'large', left: 'medium', top: 'small' }}
                      >
                        <Header layout={layout} />
                      </Box>
                    </BackgroundSection>
                  </Box>
                  <Box flex id="main" overflow="auto" fill>
                    <Box pad={{ vertical: 'none', horizontal: 'medium' }}>
                      {children}
                    </Box>
                  </Box>
                </Box>
              )
            }}
          </ResponsiveContext.Consumer>
        </Grommet>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
