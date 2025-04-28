import type { LayoutServerLoad } from './$types'

import { getCalendarEvents } from '$lib/server/events'

export const load: LayoutServerLoad = async ({ fetch }) => {
  const results = await getCalendarEvents({ fetch })

  return {
    events: results,
  }
}

export const prerender = true
