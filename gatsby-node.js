/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
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
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const releases = result.data.allMarkdownRemark.edges

    releases.forEach(edge => {
      const {
        id,
        htmlAst,
        frontmatter: { title },
      } = edge.node
      createPage({
        path: edge.node.frontmatter.slug,
        component: path.resolve(`src/templates/release.js`),
        // additional data can be passed via context
        context: {
          id,
          title,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
