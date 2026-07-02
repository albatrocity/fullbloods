import type { CalendarEvent } from './types'
import { format } from 'date-fns'
import { TZDate } from '@date-fns/tz'

export const TIMEZONE = 'America/Chicago'

export function formatEventDate(date: Date, pattern: string) {
  return format(new TZDate(date, TIMEZONE), pattern)
}

export function makeEventSlug(event: CalendarEvent) {
  const datePrefix = formatEventDate(event.start, 'yyyy-M-d')
  const slug = event.summary
    ? event.summary.replace(/[^a-z0-9]+/gi, '-').toLowerCase()
    : event.uid
  return `${datePrefix}-${slug}`
}
