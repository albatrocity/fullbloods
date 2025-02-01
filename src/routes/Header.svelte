<script lang="ts">
	import { renderStripes, svgToBackgroundImage } from '$lib/stripes';
	import { css } from 'styled-system/css';
	import { container, grid, hstack } from 'styled-system/patterns';
	import FaBandcamp from 'virtual:icons/fa6-brands/bandcamp';
	import FaSpotify from 'virtual:icons/fa6-brands/spotify';
	import FaInstagram from 'virtual:icons/fa6-brands/instagram';

	import Logo from '$lib/components/Logo.svelte';

	const { siteTitle } = $props();

	const linkStyle = css({
		color: 'primary',
		fontFamily: 'nichrome',
		fontSize: 'x-large',
		textDecoration: 'none'
	});
	const backgroundImage = svgToBackgroundImage(renderStripes('top'));
</script>

<div>
	<div class={container({ maxWidth: '4xl' })}>
		<div
			class={css({
				zIndex: 10,
				width: '100%',
				paddingTop: '1rem'
			})}
		>
			<div>
				<a href="/" class={css({ width: '100%' })}>
					<Logo ariaLabel={siteTitle} />
				</a>
			</div>
		</div>
		<div class={grid({ columns: 2, gridTemplateColumns: '5.5% auto', gap: 4 })}>
			<div
				class={css({
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100%'
				})}
				style={`background-image: ${backgroundImage}`}
			></div>
			<nav
				class={`${hstack({ gap: '8', justifyContent: 'flex-end' })} ${css({ paddingBottom: '4' })}`}
			>
				<a href="/music" class={linkStyle}> Music </a>
				<a class={linkStyle} href="/shows"> Shows </a>
				<a target="_blank" class={linkStyle} href="https://fullbloods.bandcamp.com">
					<FaBandcamp />
				</a>
				<a
					target="_blank"
					class={linkStyle}
					href="https://open.spotify.com/artist/5cyE8hPu5ZeisPUPmOl9Aw"
				>
					<FaSpotify />
				</a>
				<a target="_blank" class={linkStyle} href="https://www.instagram.com/fullbloods.mp3/">
					<FaInstagram />
				</a>
			</nav>
		</div>
	</div>
</div>
