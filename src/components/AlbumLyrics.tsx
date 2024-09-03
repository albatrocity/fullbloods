import { Grid, GridItem } from '@styled-system/jsx'

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
    html: string
  }[]
}

export function AlbumLyrics({ data }: AlbumLyricsProps) {
  return (
    <Grid columns={[1, 2]} gap="6">
      {data.map((x) => (
        <GridItem>
          <TrackDetails
            key={`${x.frontmatter.album}-${x.frontmatter.track}`}
            {...x}
          />
        </GridItem>
      ))}
    </Grid>
  )
}
