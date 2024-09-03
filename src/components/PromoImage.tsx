import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css } from '@styled-system/css'

export function PromoImage() {
  const data = useStaticQuery(graphql`
    query PromoImage {
      promo: file(relativePath: { eq: "promo.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  const image = getImage(data.promo)

  return (
    image && (
      <>
        <GatsbyImage image={image} alt="Photo by Alec Nicholas" />
        <caption className={css({ textStyle: 'info' })}>
          Photo by <a href="http://alecnicholas.com/">Alec Nicholas</a>
        </caption>
      </>
    )
  )
}