import React from 'react'
import { Link } from 'gatsby'
import { Paragraph, Box, Text, Anchor } from 'grommet'

import SEO from '../components/seo'
import Page from '../components/Page'
import PromoImage from '../components/PromoImage'

const IndexPage = () => (
  <Page>
    <SEO title="Fullbloods" keywords={['music', 'band', 'kansas city']} />

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
