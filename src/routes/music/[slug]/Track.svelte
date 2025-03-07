<script lang="ts">
	import type { Track } from '$lib/types';
	import { css } from 'styled-system/css';
	import { stack } from 'styled-system/patterns';
	import type { Component } from 'svelte';

	type TrackProps = {
		metadata: Track;
		content: Component;
	};

	const props = $props();
	const { metadata }: TrackProps = props;
	const { title, credits, track } = metadata;
</script>

<div class={stack({ gap: 4 })}>
	<h3>
		<span
			class={css({
				color: 'text.muted'
			})}
		>
			{track}
		</span>{' '}
		{title}
	</h3>

	<props.content />

	{#each credits as credit (`role-${title}-${credit.name}`)}
		<span
			class={css({
				textStyle: 'info'
			})}
		>
			{credit.name} - {credit.role}
			<br />
		</span>
	{/each}
</div>
