import { FaSpotify, FaApple, FaBandcamp } from 'react-icons/fa'
import { HighDiveIcon } from './HighDiveIcon'
import { Box } from '@styled-system/jsx'

type ListenLinksProps = {
  highdive?: string
  spotify?: string
  apm?: string
  bandcamp?: string
  justify?: 'start' | 'center' | 'end'
  size?: number
}

export function ListenLinks({
  highdive,
  spotify,
  apm,
  bandcamp,
  justify = 'start',
  size = 1.4,
  ...rest
}: ListenLinksProps) {
  return (
    <Box
      direction="row"
      gap="small"
      alignItems="center"
      justifyContent={justify}
      paddingY={20}
      {...rest}
    >
      {highdive && (
        <Box width="100px">
          <a href={highdive}>
            <HighDiveIcon />
          </a>
        </Box>
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
}

export default ListenLinks
