import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IRelease } from '@types'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

export function AlbumCover({ release }: { release: IRelease }) {
  console.log('RELEASE', release)
  const data = useStaticQuery(graphql`
    query AlbumCovers {
      mild_west: file(relativePath: { eq: "mild_west_cover.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      svt: file(relativePath: { eq: "svt_cover.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)
  const image = getImage(data[release?.image])

  return (
    image && (
      <GatsbyImage
        alt={release.title}
        style={{ border: '4px solid #fff' }}
        image={image}
      />
    )
  )
}
export default AlbumCover
