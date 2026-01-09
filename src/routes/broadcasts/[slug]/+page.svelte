<script lang="ts">
	import { css } from 'styled-system/css';

	const { data } = $props();
</script>

<svelte:head>
	<title>Broadcast | Fullbloods</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<article
	class={css({
		'& p': {
			marginBottom: 4
		},
		'& a': {
			textDecoration: 'underline',
			_hover: {
				opacity: 0.8
			}
		},
		'& h2': {
			marginTop: 6,
			marginBottom: 2
		},
		'& h3': {
			marginTop: 4,
			marginBottom: 2
		},
		'& ul, & ol': {
			paddingLeft: 6,
			marginBottom: 4
		},
		'& li': {
			marginBottom: 1
		},
		'& blockquote': {
			borderLeftWidth: '4px',
			borderLeftColor: 'gray.300',
			paddingLeft: 4,
			fontStyle: 'italic',
			marginY: 4
		},
		'& table': {
			width: '100%',
			borderCollapse: 'collapse',
			marginY: 4,
			fontSize: 'sm',
			overflowX: 'auto',
			display: 'block'
		},
		'& thead': {
			borderBottomWidth: '2px',
			borderBottomColor: 'gray.300'
		},
		'& th': {
			textAlign: 'left',
			padding: 2,
			fontWeight: 'semibold',
			whiteSpace: 'nowrap'
		},
		'& td': {
			padding: 2,
			borderBottomWidth: '1px',
			borderBottomColor: 'gray.200'
		},
		'& tr:hover': {
			backgroundColor: 'gray.50'
		}
	})}
>
	<svelte:component this={data.content} />
</article>

