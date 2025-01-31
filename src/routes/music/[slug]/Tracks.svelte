<script lang="ts">
	import type { Track as ITrack } from '$lib/types';
	import { grid, gridItem } from 'styled-system/patterns';
	import type { Component } from 'svelte';
	import Track from './Track.svelte';

	type TracksProps = {
		tracks: { metadata: ITrack; content: Component }[];
	};

	const { tracks }: TracksProps = $props();
</script>

<div class={grid({ columns: [1, 2], gap: 8 })}>
	{#each tracks as track (track)}
		<div class={gridItem()}>
			<Track {...track} />
		</div>
	{/each}
</div>
