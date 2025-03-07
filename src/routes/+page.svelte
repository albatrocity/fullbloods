<script lang="ts">
  import { stack, box } from 'styled-system/patterns'
  import FeaturedCover from './FeaturedCover.svelte'
  import ListenLinks from '$lib/components/ListenLinks.svelte'
  import PictureFrame from '$lib/components/PictureFrame.svelte'
</script>

<svelte:head>
  <title>Fullbloods music | Kansas City</title>
  <meta
    name="description"
    content="Fullbloods is a studio project of songwriter and producer Ross Brown (Shy Boys, Koney, Snacky), based in Kansas City, KS"
  />
</svelte:head>

{#snippet schedule()}
<ul>
  <li><strong>7:00</strong> Album on vinyl: (~39mins)</li>
  <li><strong>7:40</strong> Album digital with commentary: (~39mins)</li>
  <li><strong>8:30</strong> Rejects and demos, party</li>
</ul>
{/snippet}

<div class={stack({ gap: 4 })}>
  <h1>"Playing it Safe" now available</h1>
  <div class={stack({ gap: 4 })}>
    <a href="/music/playing-it-safe"
      ><PictureFrame>
        <enhanced:img
          src="$lib/assets/releases/playing-it-safe.jpg"
          alt="An umpire with mask in hand signals a 'safe' call over an empty home plate. There is no one else on the field. Photo by David Robert Elliott, layout and graphics by Ross Brown."
        />
      </PictureFrame></a
    >
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
