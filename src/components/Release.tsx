import { Link } from 'gatsby'
import { Box } from '@styled-system/jsx'
import { Text } from '@components'
import { format } from 'date-fns'
import { AlbumCover } from './AlbumCover'
import { ListenLinks } from './ListenLinks'
import { IRelease } from '@types'

export function Release(release: IRelease) {
  const { title, release_date, spotify, apm, bandcamp, slug, highdive } =
    release
  return (
    <Box>
      <Link to={`/${slug}`}>
        <AlbumCover release={release} />
      </Link>
      <Box>
        <h3>
          <Link to={`/${slug}`}>{title}</Link>
        </h3>
        <Text size="small">{release_date}</Text>
        <ListenLinks
          spotify={spotify}
          apm={apm}
          bandcamp={bandcamp}
          highdive={highdive}
        />
      </Box>
    </Box>
  )
}

export default IRelease
