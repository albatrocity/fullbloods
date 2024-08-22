import { Box } from '@styled-system/jsx'
import { Text } from '@components'
import { css } from '@styled-system/css'
import { Heading } from './Heading'

type TrackDetailsProps = {
  frontmatter: {
    title: string
    track: string
    credits: {
      name: string
      role: string
    }[]
  }
  html: any
}

export function TrackDetails({
  frontmatter: { title, track, credits },
  html,
}: TrackDetailsProps) {
  return (
    <Box>
      <div>
        <Heading level={3}>{title}</Heading>
        <div
          className={css({
            textStyle: 'paragraph',
          })}
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
