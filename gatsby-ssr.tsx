import * as React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/MDNichrome-Ultra.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="nichromeFont"
    />,
  ])
}
