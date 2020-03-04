import React from 'react'
import { FaSpotify, FaApple, FaBandcamp } from 'react-icons/fa'
import HighDiveIcon from './HighDiveIcon'
import { Box } from 'grommet'

const ListenLinks = ({
  highdive,
  spotify,
  apm,
  bandcamp,
  justify = 'start',
}) => (
  <Box
    direction="row"
    gap="small"
    align="center"
    justify={justify}
    pad={{ vertical: 'small' }}
  >
    {highdive && (
      <a href={highdive}>
        <HighDiveIcon size="1.8em" color="#000" />
      </a>
    )}
    {spotify && (
      <a href={spotify}>
        <FaSpotify size="1.4em" color="#000" />
      </a>
    )}
    {apm && (
      <a href={apm}>
        <FaApple size="1.4em" color="#000" />
      </a>
    )}
    {bandcamp && (
      <a href={bandcamp}>
        <FaBandcamp size="1.4em" color="#000" />
      </a>
    )}
  </Box>
)

export default ListenLinks
