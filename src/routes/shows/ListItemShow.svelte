<script lang="ts">
	import { css } from 'styled-system/css';
	import type { Show } from '$lib/types';

	const { summary, description, url, formatted_start }: Show = $props();
</script>

<div class="list_item-show">
	<span class={css({ textStyle: 'h5' })}>
		{#if url?.val}
			<a href={url.val} target="_blank">
				{formatted_start} @ {summary}
			</a>
		{:else}
			<span>
				{formatted_start} @ {summary}
			</span>
		{/if}
	</span>
	<p>{description}</p>
</div>
