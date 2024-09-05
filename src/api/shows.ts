import ical from 'ical'
import { isAfter, isSameDay, isBefore, format } from 'date-fns'

import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import ky from 'ky'

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  let events = []
  if (!process.env.CAL_URI) {
    return res.status(500).send({ message: 'No calendar URI provided' })
  }

  try {
    const icsData = await ky
      .get<ical.FullCalendar>(process.env.CAL_URI as string)
      .text()

    const data = ical.parseICS(icsData)

    for (var k in data) {
      if (data.hasOwnProperty(k)) {
        var ev = data[k]
        if (ev.type == 'VEVENT') {
          if (
            isAfter(ev.start, new Date()) ||
            isSameDay(ev.start, new Date())
          ) {
            ev.formatted_start = format(ev.start, 'M/d h:mm a')
            events.push(ev)
          }
        }
      }
    }
    const sorted = events.sort(function (a, b) {
      return isBefore(a.start, b.start) ? -1 : 1
    })

    return res.status(200).send(sorted)
  } catch (e) {
    console.error(e)
    res.status(500).send({ message: 'Error parsing calendar data' })
  }
}
