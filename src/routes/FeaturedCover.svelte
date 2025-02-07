<script lang="ts">
	import PictureFrame from '$lib/components/PictureFrame.svelte';
	import { css } from 'styled-system/css';
	import { stack } from 'styled-system/patterns';
</script>

<figure class={stack({ gap: '2' })}>
	<a
		target="_blank"
		href="https://distrokid.com/hyperfollow/fullbloods/fish-in-a-bowl"
		aria-label="Listen to Fullbloods' new single, 'Fish In a Bowl'"
	>
		<PictureFrame>
			<enhanced:img
				src="$lib/assets/releases/fish-in-a-bowl.jpg"
				alt="A man dressed as an umpire standing on a tree stump between two dead arborvitae trees, one of which he is watering with a garden hose. This photo was taken by David Robert Elliott."
			/>
		</PictureFrame>
	</a>
	<figcaption class={css({ textStyle: 'info' })}>
		Photo by{' '}
		<a href="http://davidrobertelliott.com">David Robert Elliott</a>
	</figcaption>
</figure>
