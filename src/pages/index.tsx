import { Link, graphql } from 'gatsby'
import { Box } from '../../styled-system/jsx'

// import SEO from '../components/Seo'
import { Layout, PromoImage, Text } from '@components'
import { AlbumCover } from '@components'
import { ListenLinks } from '@components'
import { Heading } from 'src/components/Heading'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {/* <SEO title="Fullbloods" keywords={['music', 'band', 'kansas city']} /> */}

      <Heading level={1}>
        {data.featuredRelease.frontmatter.title} out now!
      </Heading>
      <Box direction="row-responsive" gap="medium">
        <Box>
          <Link to={data.featuredRelease.frontmatter.slug}>
            <AlbumCover release={data.featuredRelease.frontmatter} />
          </Link>
        </Box>
        <Box gap="small">
          <Box direction="row-responsive" gap="small">
            <a href="https://highdiverecords.bandcamp.com/album/fullbloods-soft-and-virtual-touch">
              Order Physical on Bandcamp
            </a>
            <a href="https://fullbloods.bandcamp.com/album/soft-and-virtual-touch">
              Order Digital on Bandcamp
            </a>
          </Box>
          <Box direction="row-responsive" gap="small">
            <ListenLinks
              spotify="https://open.spotify.com/album/6A552YI2SM0EE1kbgdV0w9?si=jZdJ3f3BRZOg-LoznnilAQ"
              apm="https://music.apple.com/us/album/soft-and-virtual-touch/1500104940"
              bandcamp="https://highdiverecords.bandcamp.com/album/fullbloods-soft-and-virtual-touch"
              highdive="http://www.highdivekc.com/albums/soft-and-virtual-touch-by-fullbloods"
              justify="center"
            />
          </Box>
        </Box>
      </Box>

      <PromoImage />
      <Box direction="row-responsive" gap="large">
        <Text>
          Fullbloods is a studio project of songwriter and producer Ross Brown,
          dedicated to gently nudging the boundaries of pop music for the
          guitar/synth/bass/drums band arrangement. Live he is joined by his
          wonderfully talented friends, where the project takes on a separate
          but cohesive identity. Melodies and hooks are the core values of a
          Fullbloods song. Thanks for listening!
        </Text>
        <Box>
          <Text>
            <a href="mailto:booking@fullbloods.com">
              Booking: booking@fullbloods.com
            </a>
          </Text>
        </Box>
      </Box>
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
