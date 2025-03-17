import type { Company } from '~/types'

export default defineEventHandler(() => {
  const company: Company = {
    name: 'Наследие',
    logo: '/images/company-logo.png',
  }
  return company
})