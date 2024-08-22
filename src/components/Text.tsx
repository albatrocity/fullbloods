import { createElement, PropsWithChildren } from 'react'
import { css } from '@styled-system/css'
import { SystemProperties } from '@styled-system/types'

type TextProps = PropsWithChildren & {
  size?: 'small' | 'medium' | 'large'
  component?: 'p' | 'span'
  textStyle?: SystemProperties['textStyle']
}

export function Text({ children, component, textStyle = 'body' }: TextProps) {
  return createElement(
    component || 'p',
    {
      className: css({
        textStyle,
      }),
    },
    children
  )
}
