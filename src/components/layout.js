import 'isomorphic-fetch'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Box, Button, Text, Layer, ResponsiveContext, Grommet } from 'grommet'
import Header from './Header'
import theme from '../lib/theme'
import styled from 'styled-components'

import './layout.css'

const Background = styled.div`
  background: url(${p => p.url});
  background-repeat: repeat;
`

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site: site {
            siteMetadata {
              title
            }
          }
          background: file(relativePath: { eq: "images/bg.png" }) {
            publicURL
            name
          }
        }
      `}
      render={data => (
        <Grommet theme={theme}>
          <ResponsiveContext.Consumer>
            {size => {
              console.log(data.background.publicURL)
              const layout = size === 'small' ? 'mobile' : 'desktop'
              return (
                <Background url={data.background.publicURL}>
                  <Box width="xxlarge" margin={{ horizontal: 'auto' }}>
                    <Box
                      direction="row-responsive"
                      justify="start"
                      align="start"
                    >
                      <Box
                        width="medium"
                        id="sidebar"
                        fill={size === 'small' ? 'horizontal' : false}
                      >
                        <Box
                          pad={{ right: 'large', left: 'medium', top: 'small' }}
                        >
                          <Header layout={layout} />
                        </Box>
                      </Box>
                      <Box flex id="main">
                        <Box pad="medium">
                          <Box width="xlarge" margin={{ horizontal: 'auto' }}>
                            {children}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Background>
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
