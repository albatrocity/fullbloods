import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from '../lib/theme'

const StyledLink = styled(Link)`
  color: ${p =>
    p.theme === 'light'
      ? theme.global.colors.white
      : theme.global.colors.brand};
  text-decoration: none;
  font-weight: bold;
  ${p =>
    p.theme === 'light' &&
    `
    font-weight: 100;
  `}

  &:hover {
    text-decoration: underline;
  }
`

export default StyledLink
