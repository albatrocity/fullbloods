import React from 'react'
import { Box } from 'grommet'

import TrackDetails from './TrackDetails'

const AlbumLyrics = ({ data }) => (
  <Box direction="row-responsive" wrap={true} gap="medium">
    {data.map(x => (
      <TrackDetails
        key={`${x.frontmatter.album}-${x.frontmatter.track}`}
        {...x}
      />
    ))}
  </Box>
)

export default AlbumLyrics
