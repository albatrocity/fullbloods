<script lang="ts">
  import type { ClassValue } from 'svelte/elements'
  import { formatEventDate } from '$lib/events'

  const { eventDate, styleClass }: { eventDate: Date; styleClass: ClassValue } =
    $props()

  const month = formatEventDate(eventDate, 'MMM')
  const date = formatEventDate(eventDate, 'd')
  const time = formatEventDate(eventDate, 'h:mma')
</script>

<time class={styleClass}>
  <span class="month">{month}</span>
  <span class="date">{date}</span>
  <span class="time">{time}</span>
</time>
