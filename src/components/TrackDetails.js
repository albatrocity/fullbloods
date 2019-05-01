import React from 'react'

import { Heading, Text, Box } from 'grommet'

const TrackDetails = ({ frontmatter: { title, track, credits }, html }) => {
  return (
    <Box margin={{ vertical: 'medium' }} basis="medium">
      <Heading level={3} margin={{ bottom: 'none' }}>
        {title}
      </Heading>
      <Text dangerouslySetInnerHTML={{ __html: html }} />
      {credits.map(x => (
        <Text size="xsmall" key={`role-${title}-${x.name}`}>
          {x.name} - {x.role}
        </Text>
      ))}
    </Box>
  )
}

export default TrackDetails
