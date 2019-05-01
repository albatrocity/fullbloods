import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from '../lib/theme'

const StyledLink = styled(Link)`
  color: ${theme.global.colors.brand};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

export default StyledLink
