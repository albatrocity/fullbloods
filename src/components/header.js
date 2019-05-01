import StyledLink from './StyledLink'
import PropTypes from 'prop-types'
import React from 'react'
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
    <StyledLink direction="down" to="/">
      <Logo />
    </StyledLink>
    <nav>
      <Box direction={layout === 'mobile' ? 'row' : 'column'} gap="small">
        <StyledLink to="/music">Music</StyledLink>
        <StyledLink to="/shows">Shows</StyledLink>
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
