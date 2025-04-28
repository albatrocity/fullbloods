<script lang="ts">
  import type { CalendarEvent } from '$lib/types'
  import type { Snippet } from 'svelte'

  const { url, children }: { url?: CalendarEvent['url']; children: Snippet } =
    $props()
</script>

{#if url?.val?.val}
  <a href={url.val.val} target="_blank" rel="noopener noreferrer">
    {@render children()}
  </a>
{:else}
  {@render children()}
{/if}
