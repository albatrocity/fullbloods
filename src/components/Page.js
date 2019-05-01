import React from 'react'
import styled from 'styled-components'
import { Box } from 'grommet'

const PageBox = styled(Box)`
  background-color: #edebe4;
`

const Page = ({ children }) => (
  <PageBox pad={{ vertical: 'small' }}>{children}</PageBox>
)

export default Page
