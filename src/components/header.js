import StyledLink from './StyledLink'
import PropTypes from 'prop-types'
import React from 'react'
import { Box, Text, Anchor } from 'grommet'
import {
  FaInstagram,
  FaTwitter,
  FaBandcamp,
  FaFacebook,
  FaSpotify,
} from 'react-icons/fa'
import Logo from './Logo'

import styled from 'styled-components'

const SizedLink = styled(StyledLink)`
  @media (max-width: 768px) {
    width: 200px;
  }
`

const StyledBox = styled(Box)`
  max-width: 400px;
  @media (max-width: 768px) {
    min-height: 110px;
  }
`

const Header = ({ siteTitle, layout }) => (
  <StyledBox
    flex="grow"
    fill
    margin={{ horizontal: 'auto', vertical: 'small' }}
    pad="medium"
    align="center"
    alignContent="center"
  >
    <SizedLink to="/">
      <Logo />
    </SizedLink>
    <nav>
      <Box
        direction={layout === 'mobile' ? 'row' : 'column'}
        gap="small"
        align="center"
      >
        <Text size="large">
          <StyledLink to="/music">Music</StyledLink>
        </Text>
        <Text size="large">
          <StyledLink to="/shows">Shows</StyledLink>
        </Text>
        <Text size="large">
          <Anchor weight="100" href="https://fullbloods.bandcamp.com">
            <FaBandcamp />
          </Anchor>
        </Text>
        <Text size="large">
          <Anchor
            weight="100"
            href="https://open.spotify.com/artist/5cyE8hPu5ZeisPUPmOl9Aw"
          >
            <FaSpotify />
          </Anchor>
        </Text>
        <Text size="large">
          <Anchor weight="100" href="https://www.instagram.com/fullbloods.mp3/">
            <FaInstagram />
          </Anchor>
        </Text>
        <Text size="large">
          <Anchor weight="100" href="https://www.facebook.com/fullbloods/">
            <FaFacebook />
          </Anchor>
        </Text>
        <Text size="large">
          <Anchor weight="100" href="https://www.twitter.com/fullbloods/">
            <FaTwitter />
          </Anchor>
        </Text>
      </Box>
    </nav>
  </StyledBox>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
