<script lang="ts">
  import { stack, box, hstack, vstack } from 'styled-system/patterns'
  import ListenLinks from '$lib/components/ListenLinks.svelte'
  import PictureFrame from '$lib/components/PictureFrame.svelte'
  import HighDiveLogo from '$lib/components/HighDiveLogo.svelte'
  import Tidal from '$lib/components/TidalLogo.svelte'
  import { css } from 'styled-system/css'
  import FaSpotify from 'virtual:icons/fa6-brands/spotify'
  import FaApple from 'virtual:icons/fa6-brands/apple'

  const { data } = $props()
</script>

<svelte:head>
  <title>Fullbloods music | Kansas City</title>
  <meta
    name="description"
    content="Fullbloods is a studio project of songwriter and producer Ross Brown (Shy Boys, Koney, Snacky), based in Kansas City, KS"
  />
</svelte:head>

<div class={stack({ gap: 10 })}>
  <div class={stack({ gap: 4 })}>
    <h1>New single (with two songs)</h1>
    <p>
      "Magic Machine" and "Who's Left" out now wherever you consume music
      digitally. Artwork by <a href="http://hrabb.it">Sam Hrabko</a>.
    </p>
    <div class={stack({ gap: 4, direction: ['column', 'row'] })}>
      <div class={stack({ gap: 4, flex: 1 })}>
        <a href="/music/magic-machine"
          ><PictureFrame>
            <enhanced:img
              src="$lib/assets/releases/magic-machine.png"
              alt="An illustration of three scientists trying to decipher the paper printout of a large machine, by Sam Hrabko."
            />
          </PictureFrame></a
        >
        <div class={box({ gap: 1 })}>
          <ListenLinks
            spotify="https://open.spotify.com/album/4xAkI14NopNTrCuOwnnYBy"
            apm="https://music.apple.com/us/album/magic-machine-single/1865788208"
            bandcamp="https://fullbloods.bandcamp.com/album/magic-machine"
            tidal="https://tidal.com/album/486280058/u"
            youtube="https://music.youtube.com/playlist?list=OLAK5uy_lvMLx3cYz2Jo23EjkCaIuoCTD7Ehfiwd4"
            justify="center"
          />
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div class={stack({ gap: 4 })}>
    <h1>"Playing it Safe" now available</h1>
    <div class={stack({ gap: 4, direction: ['column', 'row'] })}>
      <div class={css({ maxWidth: '20em', flex: 1, width: '100%' })}>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://highdiverecords.bandcamp.com/album/fullbloods-playing-it-safe"
              class={hstack()}
              ><div class={css({ width: '0.9rem' })}>
                <HighDiveLogo color="primary" />
              </div>
              Order Playing it Safe on vinyl</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://tidal.com/browse/album/399178990"
              class={hstack()}
              ><div class={css({ width: '0.9rem' })}><Tidal /></div>
              Listen on Tidal</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://music.apple.com/us/album/playing-it-safe/1779662655"
              class={hstack()}><FaApple /> Listen on Apple Music</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://open.spotify.com/album/7K44Df2mT2w7wsw3Zm7CAe?si=-H6gRtYaTtCga3XAdmBabQ"
              class={hstack()}><FaSpotify /> Listen on Spotify Music</a
            >
          </li>
        </ul>
        <p class={css({ margin: '1rem 0' })}>
          <a href="/music/playing-it-safe">Read the credits and lyrics</a>
        </p>
      </div>
      <div class={stack({ gap: 4, flex: 1 })}>
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
            tidal="https://tidal.com/browse/album/399178990"
            justify="center"
          />
        </div>
      </div>
    </div>
  </div>
  <hr />

  <div class={stack({ gap: 4 })}>
    <h1>"Fish in a Bowl" music video</h1>
    <div class="video-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/QuVLcuezRak?si=1OY1Z4got_2gJsIW"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>

    <p>
      Directed, Animated, and Edited by <a
        target="_blank"
        href="https://www.instagram.com/spy_world_forever/">Kyle Little</a
      >
    </p>

    <p>
      Camera and Lighting by <a target="_blank" href="https://alecnicholas.com"
        >Alec Nicholas</a
      >
      at
      <a target="_blank" href="https://www.instagram.com/stacieslighthouse/"
        >Stacies Lighthouse</a
      >.
    </p>
  </div>

  <hr />

  <div class={stack({ gap: 4 })}>
    <p>
      Fullbloods is a studio project of Kansas City-based songwriter and
      producer Ross Brown (Shy Boys, Koney, Snacky). Live he is joined by his
      friends and the music is probably better that way. Thanks for listening!
    </p>
    <div class={box()}>
      <p>
        <a href="mailto:booking@fullbloods.com">
          Booking: booking@fullbloods.com
        </a>
      </p>
    </div>
  </div>
</div>

<style>
  .video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
