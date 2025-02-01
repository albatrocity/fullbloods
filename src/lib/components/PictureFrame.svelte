<script lang="ts">
	import { css } from 'styled-system/css';

	const { children } = $props();
</script>

<div
	class={css({
		borderWidth: '4px',
		borderColor: 'text'
	})}
>
	{@render children()}
</div>
