import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { format } from 'date-fns'
import renderCustomMarkdown from '../lib/renderCustomMarkdown'

import StyledLink from '../components/StyledLink'
import Layout from '../components/layout'
import AlbumCover from '../components/AlbumCover'
import AlbumLyrics from '../components/AlbumLyrics'
import ListenLinks from '../components/ListenLinks'
import SEO from '../components/seo'
import Page from '../components/Page'

import { Heading, Box, Text, Paragraph, Anchor } from 'grommet'

const ReleaseTemplate = ({ data }) => {
  const lyrics = data.lyrics.edges.map(x => x.node)
  const album = data.album.edges.map(x => x.node)[0]

  return (
    <Page>
      <SEO
        title={album.frontmatter.title}
        keywords={['music', 'band', 'kansas city']}
      />
      <StyledLink to="/music">Back to Music</StyledLink>
      <Heading margin={{ bottom: 'none' }}>{album.frontmatter.title}</Heading>
      <Text margin={{ bottom: 'medium' }} level={4}>
        {format(new Date(album.frontmatter.release_date), 'MMMM Do, YYYY')}
      </Text>

      {album.frontmatter.image && (
        <AlbumCover image={album.frontmatter.image} />
      )}

      <ListenLinks
        spotify={album.frontmatter.spotify}
        apm={album.frontmatter.apm}
        bandcamp={album.frontmatter.bandcamp}
        highdive={album.frontmatter.highdive}
        justify="center"
      />

      {album.frontmatter.soundcloud_embed && (
        <Box margin={{ vertical: 'medium' }}>
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            src={album.frontmatter.soundcloud_embed}
          />
        </Box>
      )}
      <Box margin={{ vertical: 'medium' }}>
        <Heading level={2}>Lyrics/Players</Heading>
        <AlbumLyrics data={lyrics} />
      </Box>

      <Box margin={{ vertical: 'medium' }}>
        <Heading level={2}>Credits/Notes</Heading>

        <Text>{renderCustomMarkdown(album.htmlAst)}</Text>
      </Box>
    </Page>
  )
}

export default ReleaseTemplate

export const pageQuery = graphql`
  query WorkPostByID($title: String!) {
    lyrics: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/lyrics/" }
        frontmatter: { album: { eq: $title } }
      }
      sort: { fields: [frontmatter___track], order: ASC }
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
    album: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/releases/" }
        frontmatter: { title: { eq: $title } }
      }
    ) {
      edges {
        node {
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
    }
  }
`
