import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Box } from 'grommet'
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
    <Logo />
    <nav>
      <Box direction={layout === 'mobile' ? 'row' : 'column'} gap="small">
        <a>Music</a> <a>Shows</a>
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
