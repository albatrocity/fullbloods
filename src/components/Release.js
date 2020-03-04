import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Text } from 'grommet'
import { format } from 'date-fns'
import AlbumCover from './AlbumCover'
import ListenLinks from './ListenLinks'
import StyledLink from './StyledLink'
import { FaSpotify, FaApple, FaBandcamp } from 'react-icons/fa'

const Release = ({
  title,
  image,
  release_date,
  spotify,
  apm,
  youtube,
  bandcamp,
  slug,
  highdive,
}) => (
  <Box basis="50%">
    <Link direction="left" to={`/${slug}`}>
      <AlbumCover image={image} />
    </Link>
    <Box pad={{ vertical: 'small' }}>
      <Heading level={3} margin="none">
        <StyledLink to={`/${slug}`}>{title}</StyledLink>
      </Heading>
      <Text size="small">{format(release_date, 'M/D/YY')}</Text>
      <ListenLinks
        spotify={spotify}
        apm={apm}
        bandcamp={bandcamp}
        highdive={highdive}
      />
    </Box>
  </Box>
)

export default Release
