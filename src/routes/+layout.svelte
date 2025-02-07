<script lang="ts">
	import '../app.css';
	import { box, container, grid } from 'styled-system/patterns';
	import { css } from 'styled-system/css';
	import { renderStripes, svgToBackgroundImage } from '$lib/stripes';
	import Header from './Header.svelte';

	const { children } = $props();
</script>

<div class={box({ minWidth: 0, maxWidth: '4xl', marginX: 'auto' })}>
	<Header siteTitle="Fullbloods" />
	<div class={container({ maxWidth: '4xl' })}>
		<div class={grid({ columns: 2, gridTemplateColumns: '5.5% auto', gap: 4 })}>
			<div
				class={css({
					height: '100%',
					backgroundRepeat: 'repeat-y',
					backgroundSize: '100%'
				})}
				style={`background-image: ${svgToBackgroundImage(renderStripes('middle'))}`}
			></div>
			<main
				class={css({
					paddingY: 4
				})}
			>
				{@render children()}
			</main>
		</div>
		<footer>
			<div
				class={css({
					height: '21vw',
					maxHeight: '200px',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'left top',
					backgroundSize: '87%'
				})}
				style={`background-image: ${svgToBackgroundImage(renderStripes('bottom'))}`}
			></div>
		</footer>
	</div>
</div>
