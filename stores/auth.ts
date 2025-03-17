import { defineStore } from 'pinia'
import type { User } from '~/types/auth'
import { jwtDecode } from 'jwt-decode'

interface AuthState {
  user: User | null
  token: string | null
  redirectPath: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    redirectPath: null
  }),

  getters: {
    isLoggedIn: (state) => !!state.user && !!state.token,
  },

  actions: {
    async login(credentials: { login: string; password: string }) {
      try {
        const response = await $fetch<{ success: boolean; token?: string }>('/api/login', {
          method: 'POST',
          body: credentials
        })

        if (response.success && response.token) {
          this.token = response.token
          this.user = { login: credentials.login }
          return true
        }
        return false
      } catch (err) {
        console.error('Login API error:', err)
        return false
      }
    },

    async logout() {
      try {
        const response = await $fetch<{ success: boolean }>('/api/logout', {
          method: 'POST'
        })
        if (response.success) {
          this.user = null
          this.token = null
          this.redirectPath = null
        }
      } catch (err) {
        console.error('Logout error:', err)
        this.user = null
        this.token = null
        this.redirectPath = null
      }
    },

    initializeAuth(token?: string) {
      if (token) {
        this.token = token
        try {
          const decoded = jwtDecode<{ login: string }>(token)
          this.user = { login: decoded.login }
        } catch (err) {
          console.error('Init auth error:', err)
          this.token = null
          this.user = null
        }
      }
    },

    setRedirectPath(path: string | null) {
      this.redirectPath = path
    }
  }
})