import { useEffect, useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { Box } from '@styled-system/jsx'

import { ListItemShow } from './ListItemShow'

const CALENDAR_ADDRESS =
  'https://p02-calendars.icloud.com/published/2/8V7E7VK060RtRuaBXnR0LlW4p3TVvaGyE-g0e4apbG2dgLhQ5j4drfledgZdKCXS_FgXHmYxjJ_bqAw3hMWctZMJszPeYpgOgMwd9462Wsw'

export function Shows() {
  const [data, setData] = useState({ events: [], fetching: true })
  // useEffect(() => {
  //   async function fetchData() {
  //     const req = await fetch('/.netlify/functions/shows')
  //     const json = await req.json()
  //     console.log('json', json)
  //     setData({ events: json, fetching: false })
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      <h1>Shows</h1>
      {data.fetching ? (
        <Box>loading</Box>
      ) : (
        <>
          {data.events.length ? (
            data.events.map((x) => <ListItemShow {...x} key={x.created} />)
          ) : (
            <p>No shows currently on the books</p>
          )}
        </>
      )}
    </>
  )
}
