import React from 'react'
import renderCustomMarkdown from '../lib/renderCustomMarkdown'

import { Heading, Text, Box } from 'grommet'

const TrackDetails = ({ frontmatter: { title, track, credits }, htmlAst }) => {
  return (
    <Box margin={{ vertical: 'medium' }} basis="medium">
      <Heading level={3} margin={{ bottom: 'none' }}>
        {title}
      </Heading>
      <Text>{renderCustomMarkdown(htmlAst)}</Text>
      {credits.map(x => (
        <Text size="xsmall" key={`role-${title}-${x.name}`}>
          {x.name} - {x.role}
        </Text>
      ))}
    </Box>
  )
}

export default TrackDetails
