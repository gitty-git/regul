import type { Rating } from '~/types'

export default defineEventHandler(() => {
  const rating: Rating = {
    score: 4.7,
    voteCount: 19
  }
  return rating
})