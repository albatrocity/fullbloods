import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Text } from 'grommet'
import AlbumCover from './AlbumCover'
import ListenLinks from './ListenLinks'
import { FaSpotify, FaApple, FaBandcamp } from 'react-icons/fa'

const Release = ({
  title,
  image,
  date,
  spotify,
  apm,
  youtube,
  bandcamp,
  info,
}) => (
  <Box basis="50%">
    <Link swipe direction="left" to={info}>
      <AlbumCover image={image} />
    </Link>
    <Box pad={{ vertical: 'small' }}>
      <Heading level={3} margin="none">
        {title}
      </Heading>
      <Text size="small">{date}</Text>
      <ListenLinks spotify={spotify} apm={apm} bandcamp={bandcamp} />
    </Box>
  </Box>
)

export default Release
