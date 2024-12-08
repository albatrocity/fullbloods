import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css } from '@styled-system/css'
import { stack } from '@styled-system/patterns'

export function NoHesitationCover() {
  const data = useStaticQuery(graphql`
    query NoHesitationCover {
      no_hesitation: file(
        relativePath: { eq: "no-hesitation_david-robert-elliott.jpg" }
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
          href="https://open.spotify.com/album/4Rvd2HpMoRhkbDNTxEYVfN?si=abgxsn6oQw6bTR0LuOfMbw"
        >
          <GatsbyImage image={image} alt="Photo by David Robert Elliott" />
        </a>
        <figcaption className={css({ textStyle: 'info' })}>
          Photo by{' '}
          <a href="http://davidrobertelliott.com">David Robert Elliott</a>
        </figcaption>
      </figure>
    )
  )
}
