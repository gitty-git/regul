<script setup lang="ts">
import { useRoute } from 'vue-router'

interface NavLink {
  path: string
  name: string
  count: number
}

const route = useRoute()
const currPath = computed(() => route.path)

const links: NavLink[] = [
  { path: '/products', name: 'Товары и услуги', count: 25 },
  { path: '/agents', name: 'Агенты', count: 25 },
  { path: '/about', name: 'О компании' },
]
</script>

<template>
  <nav class="flex space-x-2 pb-3 overflow-x-auto whitespace-nowrap lg:justify-center">
    <NuxtLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="bg-[#E8E8E8] rounded-xl px-3 py-2 text-[15px] border"
        :class="link.path === currPath ? 'border-gray-800' : 'border-[#E8E8E8]'"
    >
      {{ link.name }} <span class="text-gray-500">{{ link.count }}</span>
    </NuxtLink>
  </nav>
</template>