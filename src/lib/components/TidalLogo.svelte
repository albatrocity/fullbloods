<script lang="ts">
	import { token } from 'styled-system/tokens';
	import type { ColorToken } from 'styled-system/tokens';
	type IconProps = { color?: ColorToken };

	const { color }: IconProps = $props();
</script>

<svg version="1.1" id="Warstwa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 viewBox="0 0 176 177" enable-background="new 0 0 176 177" xml:space="preserve">
<g>
	<g>
		<path fill={color ? token(`colors.${color}`) : 'currentColor'} d="M-0.489,59.215L28.787,88.42l29.276-29.205L28.787,30.011L-0.489,59.215z M58.224,59.215L87.5,88.42l29.276-29.205
			L87.5,30.011L58.224,59.215z M146.213,30.011l-29.276,29.205l29.276,29.205l29.276-29.205L146.213,30.011z M58.224,117.784
			L87.5,146.989l29.276-29.205L87.5,88.58L58.224,117.784z"/>
	</g>
</g>
</svg>