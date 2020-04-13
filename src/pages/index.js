import React from 'react'
import { Link } from 'gatsby'
import { Paragraph, Box, Button, Text, Anchor, Heading } from 'grommet'

import SEO from '../components/seo'
import Page from '../components/Page'
import PromoImage from '../components/PromoImage'
import AlbumCover from '../components/AlbumCover'
import ListenLinks from '../components/ListenLinks'

const IndexPage = () => (
  <Page>
    <SEO title="Fullbloods" keywords={['music', 'band', 'kansas city']} />

    <Heading>Soft and Virtual Touch out now!</Heading>
    <Box
      direction="row-responsive"
      gap="medium"
      pad={{ bottom: 'medium' }}
      margin={{ bottom: 'medium' }}
      border={{
        color: 'brand',
        size: 'small',
        side: 'bottom',
        style: 'dashed',
      }}
    >
      <Box flex="grow">
        <Link to="/music/soft-and-virtual-touch">
          <AlbumCover image="svt" />
        </Link>
      </Box>
      <Box flex gap="small">
        <Box direction="row-responsive" gap="small">
          <Button
            primary
            label="Order Physical on Bandcamp"
            href="https://highdiverecords.bandcamp.com/album/fullbloods-soft-and-virtual-touch"
          />
          <Button
            primary
            label="Order Digital on Bandcamp"
            href="https://fullbloods.bandcamp.com/album/soft-and-virtual-touch"
          />
        </Box>
        <Box direction="row-responsive" gap="small">
          <ListenLinks
            spotify="https://open.spotify.com/album/6A552YI2SM0EE1kbgdV0w9?si=jZdJ3f3BRZOg-LoznnilAQ"
            apm="https://music.apple.com/us/album/soft-and-virtual-touch/1500104940"
            bandcamp="https://highdiverecords.bandcamp.com/album/fullbloods-soft-and-virtual-touch"
            highdive="http://www.highdivekc.com/albums/soft-and-virtual-touch-by-fullbloods"
            justify="center"
            size={4}
            margin={{ top: 'large' }}
            fill="horizontal"
            gap="medium"
            wrap={true}
          />
        </Box>
      </Box>
    </Box>

    <PromoImage />
    <Box direction="row-responsive" gap="large">
      <Paragraph>
        Fullbloods is a studio project of songwriter and producer Ross Brown,
        dedicated to gently nudging the boundaries of pop music for the
        guitar/synth/bass/drums band arrangement. Live he is joined by his
        wonderfully talented friends, where the project takes on a separate but
        cohesive identity. Melodies and hooks are the core values of a
        Fullbloods song. Thanks for listening!
      </Paragraph>
      <Box>
        <Paragraph>
          <Anchor href="mailto:booking@fullbloods.com">
            Booking: booking@fullbloods.com
          </Anchor>
        </Paragraph>
      </Box>
    </Box>
  </Page>
)

export default IndexPage
