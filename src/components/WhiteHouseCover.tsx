import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css } from '@styled-system/css'
import { stack } from '@styled-system/patterns'

export function WhiteHouseCover() {
  const data = useStaticQuery(graphql`
    query NoHesitationCover {
      no_hesitation: file(
        relativePath: { eq: "white-house-dot-com_david-robert-elliott.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  const image = getImage(data.no_hesitation)

  return (
    image && (
      <figure className={stack({ gap: '2' })}>
        <a
          target="_blank"
          href="https://distrokid.com/hyperfollow/fullbloods/white-house-dot-com-blue-websites"
        >
          <GatsbyImage
            image={image}
            alt="A man dressed as an umpire uses tongs to retrieve a single hot dog from a propane grill. One might think he intends to place it on the lone slice of white bread on a paper plate nearby. This photo was taken by David Robert Elliott."
          />
        </a>
        <figcaption className={css({ textStyle: 'info' })}>
          Photo by{' '}
          <a href="http://davidrobertelliott.com">David Robert Elliott</a>
        </figcaption>
      </figure>
    )
  )
}
