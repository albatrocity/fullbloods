import React, { useEffect, useState } from 'react'

const CALENDAR_ADDRESS =
  'https://p02-calendars.icloud.com/published/2/8V7E7VK060RtRuaBXnR0LlW4p3TVvaGyE-g0e4apbG2dgLhQ5j4drfledgZdKCXS_FgXHmYxjJ_bqAw3hMWctZMJszPeYpgOgMwd9462Wsw'

const Shows = () => {
  const [events, setEvents] = useState({ events: [] })

  useEffect(() => {
    const events = []
    async function fetchData() {
      const req = await fetch('/.netlify/functions/shows')
      const json = await req.json()
      console.log('SHOS JSON', json)
      useState(json)
    }
    fetchData()
  }, [])

  return <>{String(events.length)}</>
}

export default Shows
