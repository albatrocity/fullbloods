import { defineConfig } from '@pandacss/dev';
import { textStyles } from './src/lib/styles/textStyles';
import { colors } from './src/lib/styles/colors';
import { globalCss } from './src/lib/styles/globalCss';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,ts,svelte}'],

	// Files to exclude
	exclude: [],

	globalFontface: {
		Nichrome: {
			src: 'url(/fonts/MDNichrome-Ultra.otf) format("opentype")',
			fontWeight: 900,
			fontStyle: 'normal',
			fontDisplay: 'swap'
		}
	},

	globalVars: {
		'--font-nichrome': 'Nichrome, Helvetica'
	},

	globalCss,

	// Useful for theme customization
	theme: {
		extend: {
			textStyles,
			tokens: {
				fonts: {
					nichrome: { value: 'var(--font-nichrome), sans-serif' },
					monsterrat: { value: 'Montserrat Variable, sans-serif' }
				},
				colors
			}
		}
	},

	// The output directory for your css system
	outdir: 'styled-system'
});
