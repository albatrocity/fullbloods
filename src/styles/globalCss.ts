import { defineGlobalStyles } from '@pandacss/dev'
import { TextStyle } from '@styled-system/types/composition'

const headingStyles: TextStyle = {
  fontFamily: 'nichrome',
  fontWeight: 900,
  lineHeight: '1.1',
  letterSpacing: '0',
  textDecoration: 'None',
  textTransform: 'None',
  display: 'block',
}

export const globalCss = defineGlobalStyles({
  'html, body': {
    background: 'background',
    color: 'text',
    fontFamily: 'monsterrat',
    fontWeight: 500,
  },
  h1: {
    ...headingStyles,
    fontSize: '2.986rem',
  },
  h2: {
    ...headingStyles,
    fontSize: '2.488rem',
  },
  h3: {
    ...headingStyles,
    fontSize: '2.074rem',
  },
  h4: {
    ...headingStyles,
    fontSize: '1.728rem',
  },
  h5: {
    ...headingStyles,
    fontSize: '1.44rem',
  },
  p: {
    fontFamily: 'monsterrat',
    fontWeight: '500',
    fontSize: '1rem',
    lineHeight: '1.3',
    letterSpacing: '0',
    textDecoration: 'None',
    textTransform: 'None',
    marginBlockEnd: '1rem',
    maxWidth: '40rem',
  },
  a: {
    color: 'primary',
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
  },
})
