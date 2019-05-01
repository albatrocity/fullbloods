import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import AlbumCover from '../components/AlbumCover'
import AlbumLyrics from '../components/AlbumLyrics'
import ListenLinks from '../components/ListenLinks'
import SEO from '../components/seo'
import Page from '../components/Page'

import { Heading, Box, Text, Paragraph, Anchor } from 'grommet'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { album: { eq: "Mild West" } } }
        sort: { fields: [frontmatter___track], order: ASC }
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
    }
  `)
  const lyrics = data.allMarkdownRemark.edges.map(x => x.node)

  return (
    <Page>
      <SEO title="Mild West" keywords={['music', 'band', 'kansas city']} />
      <Link to="/music">Back to Music</Link>
      <Heading margin={{ bottom: 'none' }}>Mild West</Heading>
      <Text margin={{ bottom: 'medium' }} level={4}>
        Released March 1, 2016
      </Text>

      <AlbumCover image="mild_west" />

      <ListenLinks
        spotify="https://open.spotify.com/album/6DFuYDgGPtosCXaRwcwJFc?si=ll_lBk18RVyAhpnalhzybg"
        apm="https://itunes.apple.com/us/album/mild-west/1072624551"
        bandcamp="http://fullbloods.bandcamp.com/album/mild-west"
        justify="center"
      />

      <Box margin={{ vertical: 'medium' }}>
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/86662207&amp;amp;color=ff5500&amp;amp;auto_play=false&amp;amp;hide_related=false&amp;amp;show_comments=true&amp;amp;show_user=true&amp;amp;show_reposts=false"
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Heading level={2}>Lyrics/Players</Heading>
        <AlbumLyrics data={lyrics} />
      </Box>

      <Box margin={{ vertical: 'medium' }}>
        <Heading level={2}>Credits/Notes</Heading>

        <Text>
          Engineered by Mike Nolte at{' '}
          <Anchor href="http://westendstudio.com">Westend Studios</Anchor> in
          Kansas City, Kansas
        </Text>
        <Text>
          Additional tracking by Ross Brown at home in Kansas City, MO
        </Text>
        <Text>
          Mixed by Fullbloods at{' '}
          <Anchor href="http://westendstudio.com">Westend Studios</Anchor>
        </Text>
        <Text>
          Mastered by Mike Nolte at{' '}
          <Anchor href="http://eurekamastering.com">Eureka Mastering</Anchor>
        </Text>
        <br />
        <Text>
          Artwork by{' '}
          <Anchor href="http://shelbykeierleber.com">Shelby Keierleber</Anchor>,
          photographed by{' '}
          <Anchor href="https://www.chrisdaharsh.com">Chris Daharsh</Anchor>
        </Text>
        <Text>
          Photographs by{' '}
          <Anchor href="http://www.staceyschmitz.com">Stacey Schmitz</Anchor>
        </Text>
        <br />
        <Text>
          Special thanks to Jerad Tomasino, Mike Nolte, David Seume, The ACBS,
          and friends + families
        </Text>
        <br />
        <Text>
          All songs written by Ross Brown (&copy;2015 Bargain Hunt Music /
          ASCAP)
        </Text>
        <br />
        <Text>
          Instruments used:
          <ul>
            <li>Rickenbacker 325 (1,2,3,4,5,6,7,9,10,11,12)</li>
            <li>FrankenStrat (1,2,3,4,5,7,9)</li>
            <li>Gretsch Duo Jet (6,11)</li>
            <li>Martin D-12 (4,5,8)</li>
            <li>Mirage B6-E (8,10)</li>
            <li>Fender Bullet Bass (1,3,4,5,7)</li>
            <li>Fender Musicmaster Bass (2,6,8,9,10)</li>
            <li>Rogers Drums (all)</li>
            <li>Roland Juno 6 (1,2,4,6,8,9,10,11)</li>
            <li>Moog Minitaur (11)</li>
            <li>Moog Sub Phatty (1,2,3,4,6)</li>
            <li>Farfisa Fast 5 (12)</li>
            <li>Fender and Gibson amps</li>
          </ul>
        </Text>
      </Box>
    </Page>
  )
}

export default IndexPage
