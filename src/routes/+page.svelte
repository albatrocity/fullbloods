<script lang="ts">
	import { stack, box } from 'styled-system/patterns';
	import FeaturedCover from './FeaturedCover.svelte';
	import ListenLinks from '$lib/components/ListenLinks.svelte';
</script>

<svelte:head>
	<title>Fullbloods music | Kansas City</title>
	<meta name="description" content="Fullbloods is a studio project of songwriter and producer Ross Brown (Shy Boys, Koney, Snacky), based in Kansas City, KS" />
</svelte:head>

<div class={stack({ gap: 4 })}>
	<h1>New single, "Fish in a Bowl"</h1>
	<div class={stack({ gap: 4 })}>
		<FeaturedCover />
		<div class={box({ gap: 1 })}>
			<ListenLinks
				spotify="https://open.spotify.com/album/6UWfKDULMvePv0Opp6E3p5"
				apm="https://music.apple.com/us/album/fish-in-a-bowl-single/1783973915"
				bandcamp="https://highdiverecords.bandcamp.com/album/fullbloods-playing-it-safe"
				highdive="https://www.highdivekc.com/fullbloods-announce-official-release-date-new-album-playing-it-safe/"
				justify="center"
			/>
		</div>
	</div>

	<div class={stack({ gap: 4 })}>
		<p>
			Fullbloods is a studio project of Kansas City-based songwriter and producer Ross Brown (Shy Boys, Koney, Snacky). Live he is joined by his friends and the music is probably better that way. Thanks for listening!
		</p>
		<div class={box()}>
			<p>
				<a href="mailto:booking@fullbloods.com"> Booking: booking@fullbloods.com </a>
			</p>
		</div>
	</div>
</div>
