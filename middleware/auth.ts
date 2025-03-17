import { defineNuxtRouteMiddleware, useCookie, navigateTo } from '#imports'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()
  const token = useCookie('token')

  if (token.value && !authStore.token) {
    authStore.initializeAuth(token.value)
  }

  if (to.path !== '/login' && !authStore.user) {
    authStore.setRedirectPath(to.path)
    return navigateTo('/login', { redirectCode: 302 })
  }
})