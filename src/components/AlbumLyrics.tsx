import { Box } from '@styled-system/jsx'

import { TrackDetails } from '@components'

type AlbumLyricsProps = {
  data: {
    frontmatter: {
      album: string
      track: string
      lyrics: string
      credits: { name: string; role: string }[]
      title: string
    }
    html: any
  }[]
}

export function AlbumLyrics({ data }: AlbumLyricsProps) {
  return (
    <Box gap={1}>
      {data.map((x) => (
        <TrackDetails
          key={`${x.frontmatter.album}-${x.frontmatter.track}`}
          {...x}
        />
      ))}
    </Box>
  )
}
