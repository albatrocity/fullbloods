import { isBefore, isAfter } from 'date-fns'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
  const isListeningPartyDay = isBefore(new Date(), '5/14/2025')
  const isListeningPartyActive =
    isBefore(new Date(), new Date('5/15/2025')) &&
    isAfter(new Date(), new Date('5/14/2025 19:30:00 CST'))

  return {
    isListeningPartyDay,
    isListeningPartyActive,
  }
}
