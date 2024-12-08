import { graphql, Link } from 'gatsby'
import { format } from 'date-fns'

import { css } from '@styled-system/css'
import { Stack } from '@styled-system/jsx'

import { AlbumCover, Layout } from '@components'
import { AlbumLyrics } from '@components'
import { ListenLinks } from '@components'
// import SEO from '../components/seo'

const ReleaseTemplate = ({ data }) => {
  const lyrics = data.lyrics.edges.map((x) => x.node)
  const album = data.album

  return (
    <Layout>
      {/* <SEO
        title={album.frontmatter.title}
        keywords={['music', 'band', 'kansas city']}
      /> */}
      <Stack gap="8">
        <div>
          <h1>{album.frontmatter.title}</h1>
          <p
            className={css({
              textStyle: 'info',
            })}
          >
            {format(new Date(album.frontmatter.release_date), 'MMMM d, yyyy')}
          </p>
        </div>

        {album.frontmatter.image && <AlbumCover release={album.frontmatter} />}

        <ListenLinks
          spotify={album.frontmatter.spotify}
          apm={album.frontmatter.apm}
          bandcamp={album.frontmatter.bandcamp}
          highdive={album.frontmatter.highdive}
          justify="center"
        />

        {album.frontmatter.soundcloud_embed && (
          <div>
            <iframe
              width="100%"
              height="450"
              src={album.frontmatter.soundcloud_embed}
            />
          </div>
        )}

        <Stack gap="4">
          <h2>Lyrics/Players</h2>
          <AlbumLyrics data={lyrics} />
        </Stack>

        <Stack gap="4">
          <h2>Credits/Notes</h2>
          <div dangerouslySetInnerHTML={{ __html: album.html }} />
        </Stack>
      </Stack>
    </Layout>
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
