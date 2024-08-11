import { useStaticQuery, graphql } from 'gatsby'
import { Box } from '@styled-system/jsx'

import { Release } from './Release'

export function Releases() {
  const data = useStaticQuery(graphql`
    query Releases {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/releases/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { frontmatter: { release_date: DESC } }
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
  const releases = data.allMarkdownRemark.edges.map((x) => x.node)
  return (
    <Box direction="row-responsive" gap="small" justifyContent="space-between">
      {releases.map((x) => (
        <Release
          key={x.id}
          {...Object.assign(x.frontmatter, { body: x.html })}
        />
      ))}
    </Box>
  )
}
