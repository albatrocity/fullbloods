import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Text, Anchor } from 'grommet'

const PromoImage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          promo: file(relativePath: { eq: "images/promo.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 95) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Img
            fluid={data.promo.childImageSharp.fluid}
            alt="Photo by Alec Nicholas"
          />
          <Text textAlign="end" size="small">
            Photo by{' '}
            <Anchor href="http://alecnicholas.com/">Alec Nicholas</Anchor>
          </Text>
        </>
      )}
    />
  )
}
export default PromoImage
