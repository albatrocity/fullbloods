import { graphql, Link } from 'gatsby'
import { format } from 'date-fns'

import { AlbumCover } from '@components'
import { AlbumLyrics } from '@components'
import { ListenLinks } from '@components'
// import SEO from '../components/seo'

import { Box } from '@styled-system/jsx'
import { Text } from '@components'

const ReleaseTemplate = ({ data }) => {
  const lyrics = data.lyrics.edges.map((x) => x.node)
  const album = data.album

  return (
    <>
      {/* <SEO
        title={album.frontmatter.title}
        keywords={['music', 'band', 'kansas city']}
      /> */}
      <Text component="span">
        <Link to="/music">Back to Music</Link>
      </Text>
      <h1>{album.frontmatter.title}</h1>
      <Text textStyle="info">
        {format(new Date(album.frontmatter.release_date), 'MMMM Do, yyyy')}
      </Text>

      {album.frontmatter.image && <AlbumCover release={album} />}

      <ListenLinks
        spotify={album.frontmatter.spotify}
        apm={album.frontmatter.apm}
        bandcamp={album.frontmatter.bandcamp}
        highdive={album.frontmatter.highdive}
        justify="center"
      />

      {album.frontmatter.soundcloud_embed && (
        <Box>
          <iframe
            width="100%"
            height="450"
            src={album.frontmatter.soundcloud_embed}
          />
        </Box>
      )}
      <Box>
        <h2>Lyrics/Players</h2>
        <AlbumLyrics data={lyrics} />
      </Box>

      <Box>
        <h2>Credits/Notes</h2>

        <div dangerouslySetInnerHTML={{ __html: album.html }} />
      </Box>
    </>
  )
}

export default ReleaseTemplate

export const query = graphql`
  query ReleaseByTitle($title: String!, $slug: String!) {
    lyrics: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/lyrics/" }
        frontmatter: { album: { eq: $title } }
      }
      sort: { frontmatter: { track: ASC } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            track
            credits {
              name
              role
            }
          }
        }
      }
    }
    album: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        release_date
        apm
        bandcamp
        highdive
        spotify
        buy
        slug
        soundcloud_embed
      }
    }
  }
`
