<script lang="ts">
	import type { Show } from '$lib/types';
	import { stack } from 'styled-system/patterns';
	import ListItemShow from './ListItemShow.svelte';

	const { data } = $props();
</script>

<h1>Shows</h1>
<div class={stack({ gap: 4 })}>
	{#each data.events as show (show.uid)}
		<ListItemShow {...show} />
	{/each}
</div>
