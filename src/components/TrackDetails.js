import React from 'react'
import renderCustomMarkdown from '../lib/renderCustomMarkdown'

import { Heading, Text, Box } from 'grommet'

const TrackDetails = ({ frontmatter: { title, track, credits }, htmlAst }) => {
  return (
    <Box margin={{ vertical: 'medium' }} width="medium">
      <div>
        <Heading level={3} margin={{ bottom: 'none' }}>
          {title}
        </Heading>
        <Text>{renderCustomMarkdown(htmlAst)}</Text>
        {credits.map(x => (
          <Text size="xsmall" key={`role-${title}-${x.name}`}>
            {x.name} - {x.role}
            <br />
          </Text>
        ))}
      </div>
    </Box>
  )
}

export default TrackDetails
