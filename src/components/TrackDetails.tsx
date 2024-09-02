import { Box } from '@styled-system/jsx'
import { Text } from '@components'
import { Heading } from './Heading'
import { renderAst } from 'src/lib/markdown'
import { Node } from 'unified/lib'

type TrackDetailsProps = {
  frontmatter: {
    title: string
    track: string
    credits: {
      name: string
      role: string
    }[]
  }
  htmlAst: Node
}

export function TrackDetails({
  frontmatter: { title, track, credits },
  htmlAst,
}: TrackDetailsProps) {
  return (
    <Box>
      <div>
        <Heading level={3}>{title}</Heading>
        {renderAst(htmlAst)}
        {credits.map((x) => (
          <Text size="small" key={`role-${title}-${x.name}`}>
            {x.name} - {x.role}
            <br />
          </Text>
        ))}
      </div>
    </Box>
  )
}
