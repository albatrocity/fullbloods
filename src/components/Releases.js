import React from 'react'
import Release from './Release'

import { Box } from 'grommet'

const releases = [
  {
    title: 'Soft and Virtual Touch',
    image: 'svt',
    info: '/soft-and-virtual-touch',
    buy: '',
    date: '8/1/19',
    spotify: '',
    apm: '',
    youtube: null,
    bandcamp: null,
  },
  {
    title: 'Mild West',
    image: 'mild_west',
    info: '/mild-west',
    buy: 'http://www.highdivekc.com/albums/mild-west-by-fullbloods/',
    date: '3/1/16',
    spotify:
      'https://open.spotify.com/album/6DFuYDgGPtosCXaRwcwJFc?si=ll_lBk18RVyAhpnalhzybg',
    apm: 'https://itunes.apple.com/us/album/mild-west/1072624551',
    youtube: null,
    bandcamp: 'http://fullbloods.bandcamp.com/album/mild-west',
  },
]

const Releases = () => (
  <Box direction="row-responsive" gap="small" justify="between">
    {releases.map(x => (
      <Release key={x.title} {...x} />
    ))}
  </Box>
)

export default Releases
