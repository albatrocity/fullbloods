import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from 'grommet'

import Release from './Release'

const Releases = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/releases/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: [frontmatter___release_date], order: DESC }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              release_date
              spotify
              apm
              bandcamp
              buy
              image
              slug
              highdive
            }
          }
        }
      }
    }
  `)
  const releases = data.allMarkdownRemark.edges.map(x => x.node)
  return (
    <Box direction="row-responsive" gap="small" justify="between">
      {releases.map(x => (
        <Release
          key={x.id}
          {...Object.assign(x.frontmatter, { body: x.html })}
        />
      ))}
    </Box>
  )
}

export default Releases
