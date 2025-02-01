import { defineTextStyles } from '@pandacss/dev';
import { globalCss } from './globalCss';

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
			textTransform: 'None'
		}
	},
	h1: {
		description: 'Heading 1',
		value: globalCss.h1
	},
	h2: {
		description: 'Heading 2',
		value: globalCss.h2
	},
	h3: {
		description: 'Heading 3',
		value: globalCss.h4
	},
	h4: {
		description: 'Heading 4',
		value: globalCss.h4
	},
	h5: {
		description: 'Small heading',
		value: globalCss.h5
	}
});
