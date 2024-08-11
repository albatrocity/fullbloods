import type { PropsWithChildren } from 'react'
import { Box } from '@styled-system/jsx'
import { Header } from './Header'

export function Layout({ children }: PropsWithChildren) {
  return (
    <Box>
      <Header siteTitle="Fullbloods" />
      {children}
    </Box>
  )
}
