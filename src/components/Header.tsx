import { Box, Stack } from '@styled-system/jsx'
import { hstack } from '@styled-system/patterns'
import {
  FaInstagram,
  FaTwitter,
  FaBandcamp,
  FaFacebook,
  FaSpotify,
} from 'react-icons/fa'
import { Logo } from './Logo'
import { Text } from './Text'
import { Link } from 'gatsby'

export function Header({ siteTitle }: { siteTitle: string }) {
  return (
    <Stack>
      <Box>
        <Link to="/">
          <Logo />
        </Link>
      </Box>
      <nav className={hstack()}>
        <Link to="/music">Music</Link>
        <Link to="/shows">Shows</Link>
        <a href="https://fullbloods.bandcamp.com">
          <FaBandcamp />
        </a>
        <a href="https://open.spotify.com/artist/5cyE8hPu5ZeisPUPmOl9Aw">
          <FaSpotify />
        </a>
        <a href="https://www.instagram.com/fullbloods.mp3/">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/fullbloods/">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com/fullbloods/">
          <FaTwitter />
        </a>
      </nav>
    </Stack>
  )
}
