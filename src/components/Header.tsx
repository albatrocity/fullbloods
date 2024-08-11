import { Box } from '@styled-system/jsx'
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
    <Box>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <Box>
          <Text size="large">
            <Link to="/music">Music</Link>
          </Text>
          <Text size="large">
            <Link to="/shows">Shows</Link>
          </Text>
          <Text size="large">
            <a href="https://fullbloods.bandcamp.com">
              <FaBandcamp />
            </a>
          </Text>
          <Text size="large">
            <a href="https://open.spotify.com/artist/5cyE8hPu5ZeisPUPmOl9Aw">
              <FaSpotify />
            </a>
          </Text>
          <Text size="large">
            <a href="https://www.instagram.com/fullbloods.mp3/">
              <FaInstagram />
            </a>
          </Text>
          <Text size="large">
            <a href="https://www.facebook.com/fullbloods/">
              <FaFacebook />
            </a>
          </Text>
          <Text size="large">
            <a href="https://www.twitter.com/fullbloods/">
              <FaTwitter />
            </a>
          </Text>
        </Box>
      </nav>
    </Box>
  )
}
