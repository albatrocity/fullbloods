import type { CalendarEvent } from './types'
import { format } from 'date-fns'
import { TZDate } from '@date-fns/tz'

/** Venue/calendar source timezone when ICS omits TZID. */
export const TIMEZONE = 'America/Chicago'

export type IcalDate = Date & { tz?: string; dateOnly?: boolean }

/**
 * The `ical` package parses DTSTART wall-clock fields with `new Date(y,m,d,h,…)`
 * in the runtime timezone and ignores TZID. Rebuild the instant in the source TZ.
 */
export function normalizeIcalDate(date: IcalDate): Date {
  const sourceTz = date.tz ?? TIMEZONE

  if (date.dateOnly) {
    return new Date(
      new TZDate(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        0,
        0,
        0,
        sourceTz
      )
    )
  }

  if (date.tz) {
    return new Date(
      new TZDate(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        sourceTz
      )
    )
  }

  // Floating DTSTART: treat wall clock as venue local time.
  return new Date(
    new TZDate(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      TIMEZONE
    )
  )
}

/** Format a UTC instant in the viewer's local timezone. */
export function formatEventDate(date: Date, pattern: string) {
  return format(date, pattern)
}

/** Format a UTC instant in a specific IANA timezone. */
export function formatEventDateInTimezone(
  date: Date,
  timeZone: string,
  pattern: string
) {
  return format(new TZDate(date, timeZone), pattern)
}

export function makeEventSlug(event: CalendarEvent) {
  const datePrefix = formatEventDateInTimezone(
    event.start,
    TIMEZONE,
    'yyyy-M-d'
  )
  const slug = event.summary
    ? event.summary.replace(/[^a-z0-9]+/gi, '-').toLowerCase()
    : event.uid
  return `${datePrefix}-${slug}`
}
