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
  size = 1.4,
  ...rest
}) => (
  <Box
    direction="row"
    gap="small"
    align="center"
    justify={justify}
    pad={{ vertical: 'small' }}
    {...rest}
  >
    {highdive && (
      <a href={highdive}>
        <HighDiveIcon size={`${size + 0.2}em`} color="#000" />
      </a>
    )}
    {spotify && (
      <a href={spotify}>
        <FaSpotify size={`${size}em`} color="#000" />
      </a>
    )}
    {apm && (
      <a href={apm}>
        <FaApple size={`${size}em`} color="#000" />
      </a>
    )}
    {bandcamp && (
      <a href={bandcamp}>
        <FaBandcamp size={`${size}em`} color="#000" />
      </a>
    )}
  </Box>
)

export default ListenLinks
