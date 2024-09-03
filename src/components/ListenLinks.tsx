import { FaSpotify, FaApple, FaBandcamp } from 'react-icons/fa'
import { HighDiveIcon } from './HighDiveIcon'
import { Box, HStack, HstackProps } from '@styled-system/jsx'
import { css } from '@styled-system/css'
import { ColorToken } from '@styled-system/tokens'

type ListenLinksProps = {
  highdive?: string
  spotify?: string
  apm?: string
  bandcamp?: string
  justify?: 'start' | 'center' | 'end'
  size?: number
} & HstackProps

const color: ColorToken = 'icon'

export function ListenLinks({
  highdive,
  spotify,
  apm,
  bandcamp,
  size = 1.4,
  ...rest
}: ListenLinksProps) {
  return (
    <HStack {...rest}>
      {highdive && (
        <Box width="40px">
          <a href={highdive}>
            <HighDiveIcon color={color} />
          </a>
        </Box>
      )}
      {spotify && (
        <a href={spotify}>
          <FaSpotify size={`${size}em`} className={css({ color })} />
        </a>
      )}
      {apm && (
        <a href={apm}>
          <FaApple size={`${size}em`} className={css({ color })} />
        </a>
      )}
      {bandcamp && (
        <a href={bandcamp}>
          <FaBandcamp size={`${size}em`} className={css({ color })} />
        </a>
      )}
    </HStack>
  )
}

export default ListenLinks
