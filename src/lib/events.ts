import type { CalendarEvent } from './types'
import { format } from 'date-fns'
import { TZDate } from '@date-fns/tz'

export const TIMEZONE = 'America/Chicago'

export function makeEventSlug(event: CalendarEvent) {
  const datePrefix = format(
    new TZDate(new Date(event.start), TIMEZONE),
    'yyyy-M-d'
  )
  const slug = event.summary
    ? event.summary.replace(/[^a-z0-9]+/gi, '-').toLowerCase()
    : event.uid
  return `${datePrefix}-${slug}`
}
