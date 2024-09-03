import { defineTextStyles } from '@pandacss/dev'
import { globalCss } from './globalCss'

export const textStyles = defineTextStyles({
  info: {
    description: 'Small meta text',
    value: {
      color: 'text.muted',
      fontFamily: 'monsterrat',
      fontWeight: '300',
      fontSize: '0.833rem',
      lineHeight: '1',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None',
    },
  },
  h5: {
    description: 'Small heading',
    value: globalCss.h5,
  },
})
