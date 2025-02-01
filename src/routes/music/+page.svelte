<script lang="ts">
	import { grid, gridItem, stack } from 'styled-system/patterns';
	import Release from './Release.svelte';
	const { data } = $props();
</script>

<svelte:head>
	<title>Music | Fullbloods</title>
	<meta name="description" content="Musical releases by Fullbloods" />
</svelte:head>

<div class={stack({ gap: 4 })}>
	<h1>Music</h1>

	<div
		class={grid({
			columns: [1, 2, 3]
		})}
	>
		{#each data.releases as release (release.slug)}
			<div class={gridItem()}>
				<Release {...release} />
			</div>
		{/each}
	</div>
</div>
