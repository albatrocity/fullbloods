<script lang="ts">
	import { format } from 'date-fns';
	import { css } from 'styled-system/css';
	import { box, stack } from 'styled-system/patterns';

	import ListenLinks from '$lib/components/ListenLinks.svelte';
	import PictureFrame from '$lib/components/PictureFrame.svelte';
	import type { Release } from '$lib/types';

	const { slug, title, release_date, spotify, apm, bandcamp, highdive, imageData, tidal, youtube }: Release =
		$props();
</script>

<div class={stack({ gap: 2 })}>
	{#if imageData}
		<a href={`/music/${slug}`} aria-label={`View ${title}`}>
			<PictureFrame>
				<enhanced:img src={imageData.default} alt={`Cover art for ${title}`} />
			</PictureFrame>
		</a>
	{/if}
	<div class={box()}>
		<span
			class={css({
				textStyle: 'h5'
			})}
		>
			<a href={`/music/${slug}`}>{title}</a>
		</span>
		<span class={css({ textStyle: 'info' })}>
			{format(new Date(release_date), 'MMMM d, yyyy')}
		</span>
		<ListenLinks {spotify} {apm} {bandcamp} {highdive} {tidal} {youtube} />
	</div>
</div>
