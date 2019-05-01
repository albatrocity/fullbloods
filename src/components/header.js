import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Box, Anchor } from 'grommet'
import Logo from './Logo'

const Header = ({ siteTitle, layout }) => (
  <Box
    flex="grow"
    fill
    style={{ maxWidth: '400px' }}
    margin={{ horizontal: 'auto', vertical: 'small' }}
    align="center"
    alignContent="center"
  >
    <Link swipe direction="down" to="/">
      <Logo />
    </Link>
    <nav>
      <Box direction={layout === 'mobile' ? 'row' : 'column'} gap="small">
        <Link as={Anchor} to="/music">
          Music
        </Link>
        <Link to="/shows">Shows</Link>
      </Box>
    </nav>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
