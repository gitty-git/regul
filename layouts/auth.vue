<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col items-center">
    <AppHeader/>
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex-grow">
      <slot/>
    </main>
    <AppFooter/>
  </div>
</template>