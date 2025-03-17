import getRussianForm from '~/utils/russianForm'

export function formatRelativeTime(isoDate: string): string {
  const date = new Date(isoDate)
  if (isNaN(date.getTime())) {
    return 'Дата неизвестна'
  }

  const now = new Date()

  // Calculate the difference in milliseconds
  const diffInMs = now.getTime() - date.getTime()

  // Convert to days
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  // Handle "today"
  if (diffInDays === 0) {
    return 'Сегодня'
  }

  // Handle "yesterday"
  if (diffInDays === 1) {
    return 'Вчера'
  }

  // Handle days (2-6 days ago)
  if (diffInDays >= 2 && diffInDays <= 6) {
    const dayForm = getRussianForm(diffInDays, ['день', 'дня', 'дней'])
    return `${diffInDays} ${dayForm}`
  }

  // Handle one week ago
  if (diffInDays === 7) {
    return 'неделю'
  }

  // Handle weeks (2-4 weeks ago)
  const diffInWeeks = Math.floor(diffInDays / 7)
  if (diffInWeeks >= 2 && diffInWeeks <= 4) {
    return `${diffInWeeks} недели`
  }

  // Handle months
  const diffInMonths = Math.floor(diffInDays / 30)
  if (diffInMonths >= 1 && diffInMonths <= 11) {
    const monthForm = getRussianForm(diffInMonths, ['месяц', 'месяца', 'месяцев'])
    return `${diffInMonths} ${monthForm}`
  }

  // Handle years
  const diffInYears = Math.floor(diffInDays / 365)
  if (diffInYears >= 1) {
    const yearForm = getRussianForm(diffInYears, ['год', 'года', 'лет'])
    return `${diffInYears} ${yearForm}`
  }

  // Fallback for more than 6 days but less than a month
  const dayForm = getRussianForm(diffInDays, ['день', 'дня', 'дней'])
  return `${diffInDays} ${dayForm}`
}