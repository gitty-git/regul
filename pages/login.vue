<script setup lang="ts">
import type { LoginCredentials } from '~/types/auth'

const authStore = useAuthStore()
const router = useRouter()

definePageMeta({
  layout: 'auth'
})

const credentials = reactive<LoginCredentials>({
  login: 'admin',
  password: 'secret'
})

const error = ref('')

const login = async () => {
  const success = await authStore.login(credentials)
  if (success) {
    const redirectPath = authStore.redirectPath || '/'
    authStore.setRedirectPath(null)
    await router.push(redirectPath)
  }
  else {
    error.value = 'Неверные логин/пароль'
  }
}

const logout = async () => {
  await authStore.logout()
}
</script>

<template>
  <div>
    <div v-if="!authStore.isLoggedIn" class="max-w-md w-full mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Войти</h1>
      <form class="space-y-4" @submit.prevent="login">
        <div>
          <label for="login" class="block text-sm font-medium text-gray-700">Логин</label>
          <input
              id="login"
              v-model="credentials.login"
              placeholder="Enter your login"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              @input="error = ''"
          >
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Пароль</label>
          <input
              id="password"
              v-model="credentials.password"
              type="password"
              placeholder="Enter your password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              @input="error = ''"
          >
        </div>
        <p v-if="error.length > 0" class="text-sm text-red-500">{{ error }}</p>
        <button
            type="submit"
            class="w-full bg-[#337566] text-white py-2 px-4 rounded-md cursor-pointer"
        >
          Войти
        </button>
      </form>
    </div>
    <div v-else class="max-w-md w-full mx-auto bg-white shadow-lg rounded-lg p-6">
      <div v-if="authStore.user" class="py-3">Логин: {{ authStore.user.login }}</div>
      <button
          type="submit"
          class="w-full bg-[#337566] text-white py-2 px-4 rounded-md cursor-pointer"
          @click="logout"
      >
        Выйти
      </button>
    </div>
  </div>
</template>