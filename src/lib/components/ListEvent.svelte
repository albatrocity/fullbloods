<script lang="ts">
  import { css } from 'styled-system/css'
  import type { CalendarEvent } from '$lib/types'
  import EventImage from './EventImage.svelte'
  import LinkWrapper from './LinkWrapper.svelte'
  import TimeBlock from './TimeBlock.svelte'
  import { hstack, vstack } from 'styled-system/patterns'

  const { event }: { event: CalendarEvent } = $props()
</script>

<div class={hstack({ gap: 4, alignItems: 'flex-start' })}>
  <TimeBlock styleClass={css({ textStyle: 'h4' })} eventDate={event.start} />
  <div>
    <div class={vstack({ gap: 4 })}>
      {#each event.attachments as attachment}
        <LinkWrapper url={event.url}>
          <EventImage {event} srcSet={attachment.srcSet} />
        </LinkWrapper>
      {/each}
    </div>
    <div class="details">
      <LinkWrapper url={event.url}>
        <span class={css({ textStyle: 'h4' })}>{event.summary}</span>
      </LinkWrapper>

      <div>
        {@html event.description}
      </div>
    </div>
  </div>
</div>

<!-- <style>
  .event {
    border-left: 2px solid var(--color-primary);
    margin-bottom: var(--spacing-4);
    width: 100%;
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: var(--spacing-6);
    width: 100%;
    padding-bottom: var(--spacing-6);
  }

  .time-block {
    padding-left: var(--spacing-4);
  }

  .info {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-6);
  }

  .attachments {
    order: 2;
    flex-grow: 1;
    flex-shrink: 1;
    width: 40%;

    a {
      display: block;
    }
    .img {
      width: 100%;
      height: auto;
    }
  }

  .details {
    order: 3;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
    flex-grow: 1;
    flex-shrink: 1;
    width: 60%;
    word-break: break-word;
  }

  @media (max-width: 600px) {
    .event {
      grid-template-columns: 5rem 1fr;
      gap: var(--spacing-2);
      border-bottom: 1px solid rgba(157, 3, 6, 0.8);
      border-left: none;

      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }

      .attachments,
      .details {
        width: 100%;
      }
    }

    .info {
      flex-direction: column;
      gap: var(--spacing-4);
    }

    .time-block {
      padding-left: 0;
    }
  }
</style> -->
