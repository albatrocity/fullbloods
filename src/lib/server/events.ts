import ical from 'ical'
import { TZDate } from '@date-fns/tz'
import { isAfter, isSameDay, isBefore, format } from 'date-fns'

import { PUBLIC_CAL_URI } from '$env/static/public'
import type { CalendarEvent, CalendarAttachment } from '$lib/types'
import { TIMEZONE } from '$lib/events'

type Props = {
  fetch: typeof fetch
}

export async function getCalendarEvents({ fetch }: Props) {
  const events: CalendarEvent[] = []
  if (!PUBLIC_CAL_URI) {
    return events
  }

  const icsRes = await fetch(PUBLIC_CAL_URI, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0',
      Origin: 'localhost',
    },
  })
  const icsData = await icsRes.text()

  const data: ical.FullCalendar = ical.parseICS(icsData)

  function transformImageUrl(url: string) {
    if (!url) {
      return undefined
    }

    const match = url.match(/open\?id=([^&]+)/)
    if (match) {
      return match[1]
    }
    return undefined
  }

  function generateFileUrl(fileId?: string) {
    if (fileId) {
      return `https://drive.google.com/thumbnail?id=${fileId}`
    }
    return undefined
  }

  const today = new TZDate(new Date(), TIMEZONE)

  for (const k in data) {
    if (data[k]) {
      const ev = data[k]
      if (ev.type == 'VEVENT' && ev.start) {
        if (isAfter(ev.start, today) || isSameDay(ev.start, today)) {
          const attachments: CalendarAttachment[] = (
            Array.isArray(ev.attach) ? ev.attach : [ev.attach]
          )
            .filter((x) => !!x)
            .map((a) => {
              const fileUrl = generateFileUrl(transformImageUrl(a.val))

              const srcSet = fileUrl
                ? `${fileUrl}&sz=w500 500w, ${fileUrl}&sz=w1000 1000w, ${fileUrl}&sz=w1500 1500w`
                : undefined

              return {
                params: a.params,
                url: fileUrl,
                srcSet,
              }
            })
          ev.formatted_start = format(ev.start, 'MMMM d, yyyy @ h:mma')

          events.push({
            summary: ev.summary,
            description: ev.description,
            location: ev.location,
            start: ev.start,
            formatted_start: ev.formatted_start,
            end: ev.end,
            url: {
              val: ev.url,
            },
            uid: ev.uid!,
            attachments,
          })
        }
      }
    }
  }
  const sorted = events
    .filter((ev) => !!ev)
    .sort(function (a, b) {
      if (a.start && b.start)
        return isBefore(
          new TZDate(a.start, TIMEZONE),
          new TZDate(b.start, TIMEZONE)
        )
          ? -1
          : 1
      return 0
    })

  return sorted
}
