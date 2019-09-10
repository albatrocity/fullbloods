import React from 'react'
import styled from 'styled-components'

import Layout from './Layout'

const Page = ({ children }) => (
  <Layout pad={{ vertical: 'small' }}>{children}</Layout>
)

export default Page
