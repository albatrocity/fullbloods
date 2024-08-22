import { Link } from 'gatsby'
import { Box, VStack } from '@styled-system/jsx'
import { Text } from '@components'
import { format } from 'date-fns'
import { AlbumCover } from './AlbumCover'
import { ListenLinks } from './ListenLinks'
import { IRelease } from '@types'
import { Heading } from './Heading'
import { css } from '@styled-system/css'

export function Release(release: IRelease) {
  const { title, release_date, spotify, apm, bandcamp, slug, highdive } =
    release
  return (
    <VStack gap={0}>
      <Link to={`/${slug}`}>
        <AlbumCover release={release} />
      </Link>
      <Box>
        <span
          className={css({
            textStyle: 'heading',
          })}
        >
          <Link to={`/${slug}`}>{title}</Link>
        </span>
        <Text textStyle="info">{release_date.toString()}</Text>
        <ListenLinks
          spotify={spotify}
          apm={apm}
          bandcamp={bandcamp}
          highdive={highdive}
        />
      </Box>
    </VStack>
  )
}

export default IRelease
