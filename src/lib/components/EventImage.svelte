<script lang="ts">
  import type { CalendarEvent } from '$lib/types'

  const {
    event,
    srcSet,
  }: {
    event: CalendarEvent
    srcSet?: string
  } = $props()
</script>

<figure>
  <img
    class="img"
    alt={`${event.summary}. ${event.formatted_start}`}
    referrerPolicy="no-referrer"
    srcset={srcSet}
    sizes="(max-width: 600px) 100vw, 500px"
  />
</figure>

<style>
  figure {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
    margin: 0;

    img {
      width: 100%;
      max-width: 100%;
    }
  }
</style>
