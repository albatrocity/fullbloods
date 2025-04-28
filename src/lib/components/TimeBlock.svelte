<script lang="ts">
  import { format } from 'date-fns'
  import type { ClassValue } from 'svelte/elements'

  const { eventDate, styleClass }: { eventDate: Date; styleClass: ClassValue } =
    $props()

  const month = format(new Date(eventDate), 'MMM')
  const date = format(new Date(eventDate), 'd')
  const time = format(new Date(eventDate), 'h:mma')
</script>

<time class={styleClass}>
  <span class="month">{month}</span>
  <span class="date">{date}</span>
  <span class="time">{time}</span>
</time>
