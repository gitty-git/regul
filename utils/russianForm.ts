export default function getRussianForm (number: number, forms: [string, string, string]): string {
  const lastDigit = number % 10
  const lastTwoDigits = number % 100

  // Handle special cases for 11-14
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return forms[2] // Plural form (e.g., "дней", "месяцев", "лет")
  }

  // Handle 1, 21, 31, etc.
  if (lastDigit === 1) {
    return forms[0] // Singular nominative (e.g., "день", "месяц", "год")
  }

  // Handle 2-4, 22-24, 32-34, etc.
  if (lastDigit >= 2 && lastDigit <= 4) {
    return forms[1] // Singular genitive (e.g., "дня", "месяца", "года")
  }

  // Handle 0, 5-9, 10, 15-20, 25-29, etc.
  return forms[2] // Plural genitive (e.g., "дней", "месяцев", "лет")
}