import { useStaticQuery, graphql } from 'gatsby'
import { Grid, GridItem } from '@styled-system/jsx'

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
    <Grid columns={4}>
      {releases.map((x) => (
        <GridItem key={x.id}>
          <Release {...Object.assign(x.frontmatter, { body: x.html })} />
        </GridItem>
      ))}
    </Grid>
  )
}
