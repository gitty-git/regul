<script setup lang="ts">
const currYear = new Date().getFullYear()
</script>

<template>
  <footer class="pb-10 pt-6 w-full border-t border-gray-300 bg-gray-100 px-8 flex flex-col lg:flex-row gap-5">
    <p>© Annonce {{ currYear }}</p>
    <NuxtLink class="text-gray-500" to="#">Документы</NuxtLink>
    <NuxtLink class="text-gray-500" to="/about">О компании</NuxtLink>
  </footer>
</template>