import type { GatsbyNode } from 'gatsby'

// You can delete this file if you're not using it
import path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions

  const result = await graphql(`
    query ReleasesData {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/releases/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { frontmatter: { release_date: ASC } }
      ) {
        edges {
          node {
            id
            html
            htmlAst
            frontmatter {
              title
              release_date
              spotify
              apm
              bandcamp
              buy
              image
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()))
    throw new Error(result.errors)
  }

  const releases = result.data.allMarkdownRemark.edges

  releases.forEach((edge) => {
    const {
      id,
      htmlAst,
      frontmatter: { title, slug },
    } = edge.node
    createPage({
      path: edge.node.frontmatter.slug,
      component: path.resolve(`src/templates/ReleaseTemplate.tsx`),
      // additional data can be passed via context
      context: {
        id,
        title,
        slug,
      },
    })
  })
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
