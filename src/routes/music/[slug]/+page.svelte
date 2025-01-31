<script lang="ts">
	import { format } from 'date-fns';
	import { css } from 'styled-system/css';
	import { stack } from 'styled-system/patterns';

	import Tracks from './Tracks.svelte';
	import ListenLinks from '$lib/components/ListenLinks.svelte';
	import PictureFrame from '$lib/components/PictureFrame.svelte';
	import { fade } from 'svelte/transition';

	const { data } = $props();
	const { metadata, tracks, imageData } = data;
	const { title } = data.metadata;
</script>

<div class={stack({ gap: 8 })}>
	<div>
		<h1>{title}</h1>
		<p
			class={css({
				textStyle: 'info'
			})}
		>
			{format(new Date(metadata.release_date), 'MMMM d, yyyy')}
		</p>
	</div>

	{#if imageData}
		<PictureFrame
			><enhanced:img src={imageData.default} alt={`Cover art for ${title}`} /></PictureFrame
		>
	{/if}

	<ListenLinks
		spotify={metadata.spotify}
		apm={metadata.apm}
		bandcamp={metadata.bandcamp}
		highdive={metadata.highdive}
		justify="center"
	/>

	{#if metadata.soundcloud_embed}
		<div>
			<iframe width="100%" height="450" src={metadata.soundcloud_embed} title="Soundcloud embed"
			></iframe>
		</div>
	{/if}

	<div class={stack({ gap: 4 })}>
		<h2>Lyrics/Players</h2>
		<Tracks {tracks} />
	</div>

	<div class={stack({ gap: 4 })}>
		<h2>Credits/Notes</h2>
		<data.content />
	</div>
</div>
