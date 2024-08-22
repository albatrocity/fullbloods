import { css } from '@styled-system/css'
import { createElement } from 'react'

type HeadingProps = {
  level: number
  children: React.ReactNode
}

export function Heading({ level = 1, children }: HeadingProps) {
  return createElement(
    'h' + level,
    {
      className: css({
        textStyle: `h${level}`,
      }),
    },
    children
  )
}
