import { useStaticQuery, graphql, Link } from 'gatsby'
import { format } from 'date-fns'

import { AlbumCover } from '@components'
import { AlbumLyrics } from '@components'
import { ListenLinks } from '@components'
import { renderAst } from 'src/lib/markdown'
// import SEO from '../components/seo'

import { Box } from '@styled-system/jsx'
import { Text } from '@components'
import { Heading } from 'src/components/Heading'
import { css } from '@styled-system/css'

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
      <Heading level={1}>{album.frontmatter.title}</Heading>
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
        <Heading level={2}>Lyrics/Players</Heading>
        <AlbumLyrics data={lyrics} />
      </Box>

      <Box>
        <Heading level={2}>Credits/Notes</Heading>

        {renderAst(album.htmlAst)}
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
          htmlAst
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
      htmlAst
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
