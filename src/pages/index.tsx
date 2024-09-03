import { Link, graphql } from 'gatsby'
import { Box, Stack } from '@styled-system/jsx'

// import SEO from '../components/Seo'
import { Layout, PromoImage } from '@components'
import { AlbumCover } from '@components'
import { ListenLinks } from '@components'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {/* <SEO title="Fullbloods" keywords={['music', 'band', 'kansas city']} /> */}

      <h1>{data.featuredRelease.frontmatter.title} out now!</h1>
      <Stack gap="4">
        <Box>
          <Link to={data.featuredRelease.frontmatter.slug}>
            <AlbumCover release={data.featuredRelease.frontmatter} />
          </Link>
        </Box>
        <Stack gap="4" direction="row">
          <Stack gap="4" direction="row" alignItems="center">
            <a href="https://highdiverecords.bandcamp.com/album/fullbloods-soft-and-virtual-touch">
              Order Physical on Bandcamp
            </a>
            <a href="https://fullbloods.bandcamp.com/album/soft-and-virtual-touch">
              Order Digital on Bandcamp
            </a>
          </Stack>
          <Box direction="row-responsive" gap="small">
            <ListenLinks
              spotify="https://open.spotify.com/album/6A552YI2SM0EE1kbgdV0w9?si=jZdJ3f3BRZOg-LoznnilAQ"
              apm="https://music.apple.com/us/album/soft-and-virtual-touch/1500104940"
              bandcamp="https://highdiverecords.bandcamp.com/album/fullbloods-soft-and-virtual-touch"
              highdive="http://www.highdivekc.com/albums/soft-and-virtual-touch-by-fullbloods"
              justify="center"
            />
          </Box>
        </Stack>
      </Stack>

      <Stack gap="4">
        <PromoImage />
        <p>
          Fullbloods is a studio project of songwriter and producer Ross Brown,
          dedicated to gently nudging the boundaries of pop music for the
          guitar/synth/bass/drums band arrangement. Live he is joined by his
          wonderfully talented friends, where the project takes on a separate
          but cohesive identity. Melodies and hooks are the core values of a
          Fullbloods song. Thanks for listening!
        </p>
        <Box>
          <p>
            <a href="mailto:booking@fullbloods.com">
              Booking: booking@fullbloods.com
            </a>
          </p>
        </Box>
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
      frontmatter: { title: {}, slug: { eq: "music/soft-and-virtual-touch" } }
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
