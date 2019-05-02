import React, { useEffect, useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { Heading, Box } from 'grommet'
import theme from '../lib/theme'

import ListItemShow from './ListItemShow'

const CALENDAR_ADDRESS =
  'https://p02-calendars.icloud.com/published/2/8V7E7VK060RtRuaBXnR0LlW4p3TVvaGyE-g0e4apbG2dgLhQ5j4drfledgZdKCXS_FgXHmYxjJ_bqAw3hMWctZMJszPeYpgOgMwd9462Wsw'

const Shows = () => {
  const [data, setData] = useState({ events: [], fetching: true })
  useEffect(() => {
    async function fetchData() {
      const req = await fetch('/.netlify/functions/shows')
      const json = await req.json()
      setData({ events: json, fetching: false })
    }
    fetchData()
  }, [])

  return (
    <>
      <Heading>Shows</Heading>
      {data.fetching ? (
        <Box animation="pulse">
          <FaEllipsisH color={theme.global.colors.brand} />
        </Box>
      ) : (
        <>
          {data.events.length ? (
            data.events.map(x => <ListItemShow {...x} key={x.created} />)
          ) : (
            <p>No shows currently on the books</p>
          )}
        </>
      )}
    </>
  )
}

export default Shows
