import { isBefore } from 'date-fns'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
  const isListeningPartyDay = isBefore(new Date(), '5/15/2025')
  const isListeningPartyActive = true

  return {
    isListeningPartyDay,
    isListeningPartyActive,
  }
}
