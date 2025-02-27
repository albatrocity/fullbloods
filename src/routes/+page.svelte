<script lang="ts">
	import { stack, box } from 'styled-system/patterns';
	import FeaturedCover from './FeaturedCover.svelte';
	import ListenLinks from '$lib/components/ListenLinks.svelte';

  const { data } = $props()


</script>

<svelte:head>
	<title>Fullbloods music | Kansas City</title>
	<meta name="description" content="Fullbloods is a studio project of songwriter and producer Ross Brown (Shy Boys, Koney, Snacky), based in Kansas City, KS" />
</svelte:head>

{#snippet schedule()}
<ul>
  <li><strong>7:00</strong> Album on vinyl: (~39mins)</li>
  <li><strong>7:40</strong> Album digital with commentary: (~39mins)</li>
  <li><strong>8:30</strong> Rejects and demos, party</li>
</ul>
{/snippet}

<div class={stack({ gap: 4 })}>
  {#if data.isListeningPartyDay}
    <h1>"Playing It Safe" listening party</h1>
    
    {#if data.isListeningPartyActive}
      <p>Hop on an audio-only stream of the new album with some commentary!</p>
      {@render schedule()}
      <h4><a href="https://www.listeningroom.club/rooms/0468e62e42062530c8062a3e8f8c54cf/" target="_blank">Join the Listening party</a></h4>
    {:else}
      <p>I'm hosting an audio broadcast of the album a week early on <strong>Thursday, February 27th at 7pm CST</strong>! <strong>Check back here for a link closer to time.</strong></p>
      <p>You'll be able to hop on a <a target="_blank" href="https://github.com/albatrocity/radio-room">web application</a> that I wrote and heckle me in the chat.</p>
      {@render schedule()}
      <p>---<strong>Check this space closer to the time for a link</strong>---</p>
    {/if}
  {:else}
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
  {/if}
  
  <hr />

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
