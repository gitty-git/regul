<script setup lang="ts">
import type { Company, Rating } from "~/types";

const { data: rating } = await useFetch<Rating>('/api/rating')
const { data: company } = await useFetch<Company>('/api/company')
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <AppHeader/>
    <CompanyInfo v-if="company" :company="company" :rating="rating" />
    <main class="mx-auto flex-grow">
      <slot/>
    </main>
    <AppFooter/>
  </div>
</template>