import type { PropsWithChildren } from 'react'
import { Box, Container, Grid } from '@styled-system/jsx'
import { css } from '@styled-system/css'
import { Header } from './Header'
import { renderStripes, svgToBackgroundImage } from 'src/utils/stripes'

export function Layout({ children }: PropsWithChildren) {
  return (
    <Box>
      <Header siteTitle="Fullbloods" />
      <Container>
        <Grid columns={2} gridTemplateColumns={'5vw auto'} gridGap="4">
          <div
            style={{
              backgroundImage: svgToBackgroundImage(renderStripes('middle')),
            }}
            className={css({
              height: '100%',
              backgroundRepeat: 'repeat-y',
              backgroundSize: '100%',
            })}
          ></div>
          <main>{children}</main>
        </Grid>
        <footer>
          <div
            style={{
              backgroundImage: svgToBackgroundImage(renderStripes('bottom')),
            }}
            className={css({
              height: '350px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
              backgroundSize: '87%',
            })}
          ></div>
        </footer>
      </Container>
    </Box>
  )
}
