<script lang="ts">
  import { stack } from 'styled-system/patterns'
  import ListEvent from '$lib/components/ListEvent.svelte'

  const { data } = $props()
</script>

<svelte:head>
  <title>Live Shows | Fullbloods</title>
</svelte:head>

<h1>Shows</h1>
<div class={stack({ gap: 4 })}>
  {#each data.events as event (event.uid)}
    <ListEvent {event} />
  {/each}
</div>
