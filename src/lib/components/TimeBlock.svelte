<script lang="ts">
  import { browser } from '$app/environment'
  import type { ClassValue } from 'svelte/elements'
  import {
    formatEventDate,
    formatEventDateInTimezone,
    TIMEZONE,
  } from '$lib/events'

  const { eventDate, styleClass }: { eventDate: Date; styleClass: ClassValue } =
    $props()

  function display(date: Date, pattern: string) {
    return browser
      ? formatEventDate(date, pattern)
      : formatEventDateInTimezone(date, TIMEZONE, pattern)
  }

  const month = display(eventDate, 'MMM')
  const date = display(eventDate, 'd')
  const time = display(eventDate, 'h:mma')
</script>

<time
  class={styleClass}
  datetime={eventDate.toISOString()}
  suppressHydrationWarning
>
  <span class="month">{month}</span>
  <span class="date">{date}</span>
  <span class="time">{time}</span>
</time>
