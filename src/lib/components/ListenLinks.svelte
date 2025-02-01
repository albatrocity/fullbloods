<script lang="ts">
	import FaBandcamp from 'virtual:icons/fa6-brands/bandcamp';
	import FaSpotify from 'virtual:icons/fa6-brands/spotify';
	import FaApple from 'virtual:icons/fa6-brands/apple';

	import { box, hstack } from 'styled-system/patterns';
	import { css } from 'styled-system/css';
	import type { ColorToken } from 'styled-system/tokens';
	import type { HstackProperties } from 'styled-system/patterns';

	import HighDiveLogo from './HighDiveLogo.svelte';

	type ListenLinksProps = {
		highdive?: string;
		spotify?: string;
		apm?: string;
		bandcamp?: string;
		justify?: 'start' | 'center' | 'end';
		size?: number;
	} & HstackProperties;

	const color: ColorToken = 'icon';

	const { highdive, spotify, apm, bandcamp, size = 1.4, ...rest }: ListenLinksProps = $props();
</script>

<div class={hstack(rest)}>
	{#if highdive}
		<div class={box({ width: `${size}em` })}>
			<a href={highdive}>
				<HighDiveLogo {color} />
			</a>
		</div>
	{/if}
	{#if spotify}
		<a href={spotify}>
			<FaSpotify size={`${size}em`} class={css({ color })} />
		</a>
	{/if}
	{#if apm}
		<a href={apm}>
			<FaApple size={`${size}em`} class={css({ color })} />
		</a>
	{/if}
	{#if bandcamp}
		<a href={bandcamp}>
			<FaBandcamp size={`${size}em`} class={css({ color })} />
		</a>
	{/if}
</div>
