import { Link, graphql } from 'gatsby'
import { Box, Stack } from '@styled-system/jsx'

import { SEO } from '../components/Seo'
import { Layout } from '@components'
import { ListenLinks } from '@components'
import { NoHesitationCover } from 'src/components/NoHesitationCover'
import { WhiteHouseCover } from 'src/components/WhiteHouseCover'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Fullbloods" />
      <Stack gap="4">
        <h1>New single, "White House Dot Com (Blue Websites)"</h1>
        <Stack gap="4">
          <WhiteHouseCover />
          <Box direction="row-responsive" gap="small">
            <ListenLinks
              spotify="https://open.spotify.com/album/2DMkrj7uSrSz6hinBc5jkx"
              apm="https://music.apple.com/us/album/white-house-dot-com-blue-websites-single/1784003581"
              bandcamp="https://highdiverecords.bandcamp.com/album/fullbloods-playing-it-safe"
              highdive="https://www.highdivekc.com/fullbloods-announce-official-release-date-new-album-playing-it-safe/"
              justify="center"
            />
          </Box>
        </Stack>

        <Stack gap="4">
          <p>
            Fullbloods is a studio project of songwriter and producer Ross Brown
            (Shy Boys, Koney, Snacky). Live he is joined by his friends and the
            music is probably better that way. Thanks for listening!
          </p>
          <Box>
            <p>
              <a href="mailto:booking@fullbloods.com">
                Booking: booking@fullbloods.com
              </a>
            </p>
          </Box>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        title
      }
    }
    featuredRelease: markdownRemark(
      frontmatter: { title: {}, slug: { eq: "music/playing-it-safe" } }
    ) {
      id
      frontmatter {
        slug
        title
        release_date
        image
      }
    }
  }
`
