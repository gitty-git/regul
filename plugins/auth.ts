import { defineNuxtPlugin } from '#app'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore()

  const token = useCookie('token').value
  if (token) {
    authStore.initializeAuth(token)
  }
})