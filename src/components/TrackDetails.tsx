import { Box } from '@styled-system/jsx'
import { Text } from '@components'
import { renderAst } from 'src/lib/markdown'
import { Node } from 'unified/lib'
import { css } from '@styled-system/css'

type TrackDetailsProps = {
  frontmatter: {
    title: string
    track: string
    credits: {
      name: string
      role: string
    }[]
  }
  html: Node
}

export function TrackDetails({
  frontmatter: { title, track, credits },
  html,
}: TrackDetailsProps) {
  return (
    <Box>
      <div>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {credits.map((x) => (
          <span
            className={css({
              textStyle: 'info',
            })}
            key={`role-${title}-${x.name}`}
          >
            {x.name} - {x.role}
            <br />
          </span>
        ))}
      </div>
    </Box>
  )
}
