<script setup lang="ts">
import type { Rating, Company } from '~/types'
import getRussianForm from "~/utils/russianForm";

const props = defineProps<{
  company: Company
  rating?: Rating | null
}>()

const votesCountWord = computed(() => getRussianForm(props.rating?.voteCount ?? 0, ['отзыв', 'отзыва', 'отзывов']))
</script>

<template>
  <div class="border-b border-gray-300 w-full xl:pb-8">
    <div
        v-if="$device.isDesktop"
        class="w-full flex flex-col items-center justify-center
        text-[15px] text-[#0F0F0F]"
    >
      <img
          :src="company.logo"
          :alt="`${company.name} Logo`"
          class="w-[120px] h-[120px] rounded-2xl object-cover"
      >
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-2xl font-semibold mt-6">{{ company.name }}</h2>
        <div class="flex items-center gap-1.5 mt-3">
          <img src="/icons/approved.svg" alt="">
          <p class="text-gray-600 text-sm">Документы проверены</p>
          <div class="h-[4px] w-[4px] bg-black rounded-full"/>
          <img src="/icons/star.svg" alt="">
          <p v-if="rating && rating?.score > 0" class="text-gray-600 text-sm">
            {{ rating?.score }}
          </p>
          <div class="h-[4px] w-[4px] bg-black rounded-full"/>
          <p v-if="rating && rating?.voteCount > 0" class="text-gray-600 text-sm">
            {{ rating?.voteCount }} {{ votesCountWord }}
          </p>
        </div>
      </div>
      <button class="bg-[#337566] text-white px-5 py-4 rounded-xl mt-6">
        Показать номер телефона
      </button>
    </div>
    <AppNavigation class="mt-8 px-4"/>
  </div>
</template>