import { Stack } from '@styled-system/jsx'
import { css } from '@styled-system/css'
import paragraphs from 'lines-to-paragraphs'

type TrackDetailsProps = {
  frontmatter: {
    title: string
    track: string
    credits: {
      name: string
      role: string
    }[]
  }
  html: string
}

export function TrackDetails({
  frontmatter: { title, track, credits },
  html,
}: TrackDetailsProps) {
  return (
    <Stack gap="4">
      <h3>
        <span
          className={css({
            color: 'text.muted',
          })}
        >
          {track}
        </span>{' '}
        {title}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: paragraphs(html) }} />
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
    </Stack>
  )
}
