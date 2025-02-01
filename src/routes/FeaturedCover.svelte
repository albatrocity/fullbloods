<script lang="ts">
	import PictureFrame from '$lib/components/PictureFrame.svelte';
	import { css } from 'styled-system/css';
	import { stack } from 'styled-system/patterns';
</script>

<figure class={stack({ gap: '2' })}>
	<a
		target="_blank"
		href="https://distrokid.com/hyperfollow/fullbloods/white-house-dot-com-blue-websites"
		aria-label="Listen to Fullbloods' new single, 'White House Dot Com (Blue Websites)'"
	>
		<PictureFrame>
			<enhanced:img
				src="$lib/assets/releases/white-house-dot-com.jpg"
				alt="A man dressed as an umpire uses tongs to retrieve a single hot dog from a propane grill. One might think he intends to place it on the lone slice of white bread on a paper plate nearby. This photo was taken by David Robert Elliott."
			/>
		</PictureFrame>
	</a>
	<figcaption class={css({ textStyle: 'info' })}>
		Photo by{' '}
		<a href="http://davidrobertelliott.com">David Robert Elliott</a>
	</figcaption>
</figure>
