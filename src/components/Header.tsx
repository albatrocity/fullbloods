import { Grid } from '@styled-system/jsx'
import { css } from '@styled-system/css'
import { hstack } from '@styled-system/patterns'
import {
  FaInstagram,
  FaTwitter,
  FaBandcamp,
  FaFacebook,
  FaSpotify,
} from 'react-icons/fa'
import { Logo, Container } from '@components'
import { Link } from 'gatsby'
import { renderStripes, svgToBackgroundImage } from 'src/utils/stripes'

const linkStyle = css({
  color: 'primary',
  fontFamily: 'nichrome',
  fontSize: 'x-large',
  textDecoration: 'none',
})

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
          <div>
            <Link to="/" className={css({ width: '100%' })}>
              <Logo />
            </Link>
          </div>
        </div>
        <Grid columns={2} gridTemplateColumns={'5.5% auto'} gridGap="4">
          <div
            style={{
              backgroundImage: svgToBackgroundImage(renderStripes('top')),
            }}
            className={css({
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
            })}
          ></div>
          <nav
            className={`${hstack({ gap: '8', justifyContent: 'flex-end' })} ${css({ paddingBottom: '4' })}`}
          >
            <Link className={linkStyle} to="/music">
              Music
            </Link>
            <Link className={linkStyle} to="/shows">
              Shows
            </Link>
            <a className={linkStyle} href="https://fullbloods.bandcamp.com">
              <FaBandcamp />
            </a>
            <a
              className={linkStyle}
              href="https://open.spotify.com/artist/5cyE8hPu5ZeisPUPmOl9Aw"
            >
              <FaSpotify />
            </a>
            <a
              className={linkStyle}
              href="https://www.instagram.com/fullbloods.mp3/"
            >
              <FaInstagram />
            </a>
          </nav>
        </Grid>
      </Container>
    </div>
  )
}
