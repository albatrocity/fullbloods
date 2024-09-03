import { defineConfig } from '@pandacss/dev'
import { textStyles } from './src/styles/textStyles'
import { globalCss } from './src/styles/globalCss'
import { colors } from './src/styles/colors'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: 'react',

  // Where to look for your css declarations
  include: [
    './src/pages/*.{js,jsx,ts,tsx}',
    './src/components/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  globalFontface: {
    Nichrome: {
      src: 'url(/fonts/MDNichrome-Ultra.otf) format("opentype")',
      fontWeight: 900,
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
  },

  globalVars: {
    '--font-nichrome': 'Nichrome, Helvetica',
  },

  globalCss,

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        fonts: {
          nichrome: { value: 'var(--font-nichrome), sans-serif' },
          monsterrat: { value: 'Montserrat Variable, sans-serif' },
        },
        colors,
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
