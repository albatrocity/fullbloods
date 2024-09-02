import { defineTextStyles } from '@pandacss/dev'
import { TextStyle } from '@styled-system/types/composition'

const headingStyles: TextStyle = {
  fontFamily: 'nichrome',
  fontWeight: 900,
  lineHeight: '1.1',
  letterSpacing: '0',
  textDecoration: 'None',
  textTransform: 'None',
}

export const textStyles = defineTextStyles({
  h1: {
    description: 'The h1 text style',
    value: {
      ...headingStyles,
      fontSize: '2.986rem',
    },
  },
  h2: {
    description: 'The h2 text style',
    value: {
      ...headingStyles,
      fontSize: '2.488rem',
    },
  },
  h3: {
    description: 'The h3 text style',
    value: {
      ...headingStyles,
      fontSize: '2.074rem',
    },
  },
  h4: {
    description: 'The h4 text style',
    value: {
      ...headingStyles,
      fontSize: '1.728rem',
    },
  },
  paragraph: {
    description: 'Body text',
    value: {
      fontFamily: 'monsterrat',
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1.3',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None',
      marginBlockEnd: '1rem',
    },
  },
  info: {
    description: 'Small meta text',
    value: {
      fontFamily: 'monsterrat',
      fontWeight: '300',
      fontSize: '0.833rem',
      lineHeight: '1',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None',
    },
  },
})
