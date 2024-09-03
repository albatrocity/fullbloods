import { Link } from 'gatsby'
import { Box, Stack } from '@styled-system/jsx'
import { format } from 'date-fns'
import { AlbumCover } from './AlbumCover'
import { ListenLinks } from './ListenLinks'
import { IRelease } from '@types'
import { css } from '@styled-system/css'

export function Release(release: IRelease) {
  const { title, release_date, spotify, apm, bandcamp, slug, highdive } =
    release
  return (
    <Stack gap="2">
      <Link to={`/${slug}`}>
        <AlbumCover release={release} />
      </Link>
      <Box>
        <span
          className={css({
            textStyle: 'h5',
          })}
        >
          <Link to={`/${slug}`}>{title}</Link>
        </span>
        <span className={css({ textStyle: 'info' })}>
          {format(new Date(release_date), 'MMMM d, yyyy')}
        </span>
        <ListenLinks
          spotify={spotify}
          apm={apm}
          bandcamp={bandcamp}
          highdive={highdive}
        />
      </Box>
    </Stack>
  )
}

export default IRelease
