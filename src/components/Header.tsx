import { Box, Stack, Container, HStack, Grid } from '@styled-system/jsx'
import { css } from '@styled-system/css'
import { hstack } from '@styled-system/patterns'
import {
  FaInstagram,
  FaTwitter,
  FaBandcamp,
  FaFacebook,
  FaSpotify,
} from 'react-icons/fa'
import { Logo } from './Logo'
import { Link } from 'gatsby'
import { renderStripes, svgToBackgroundImage } from 'src/utils/stripes'

export function Header({ siteTitle }: { siteTitle: string }) {
  return (
    <div>
      <Container>
        <div
          className={css({
            zIndex: 10,
            width: '100%',
            paddingTop: '1rem',
          })}
        >
          <div className={css({ maxWidth: '400px' })}>
            <Link to="/" className={css({ width: '100%' })}>
              <Logo />
            </Link>
          </div>
        </div>
        <Grid columns={2} gridTemplateColumns={'5vw auto'} gridGap="4">
          <div
            style={{
              backgroundImage: svgToBackgroundImage(renderStripes('top')),
            }}
            className={css({
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
            })}
          ></div>
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
        </Grid>
      </Container>
    </div>
  )
}
