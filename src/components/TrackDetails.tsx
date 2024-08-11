import { Box } from '@styled-system/jsx'
import { Text } from '@components'

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
  console.log(html)
  return (
    <Box>
      <div>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
