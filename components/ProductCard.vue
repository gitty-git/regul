<script setup lang="ts">
import type { Product } from '~/types'

const props = defineProps<{
  product: Product
}>()

const relativeTime = computed(() => formatRelativeTime(props.product.date))
</script>

<template>
  <div class="bg-white rounded-lg overflow-hidden relative text-[#0F0F0F] p-2">
    <div class="mt-2 ml-2 absolute z-10 gap-x-1 flex justify-between text-[#F5F5F5] text-[13px] rounded">
      <div
          v-if="product.viewCount > 0"
          class="py-1 px-2 flex items-center gap-1.5 bg-[#1B1D2299] bg-opacity-[60%] rounded-xl"
      >
        <img src="/icons/eye.svg" alt="">
        <span>{{ product.viewCount }}</span>
      </div>
      <div class="py-1 px-2 flex items-center gap-1.5 bg-gray bg-[#1B1D2299] bg-opacity-[60%] rounded-xl">
        <img src="/icons/calendar.svg" alt="">
        <span>{{ relativeTime }}</span>
      </div>
    </div>
    <div v-if="$device.isMobile" class="mt-2 mr-2 top-2 right-2 absolute z-10 gap-x-1 text-[13px] rounded">
      <div
          v-if="product.viewCount > 0"
          class="py-1 px-2 flex h-8 items-center gap-1.5 bg-[#F5F5F5] border border-[#DBDBDB] rounded-xl"
      >
        Действия
      </div>
    </div>
    <img
        :src="product.imageUrl"
        alt="Product Image"
        class="w-full object-cover rounded-2xl"
    >
    <div class="mt-4 px-2 pb-2">
      <p>{{ product.price.toLocaleString() }} ₽</p>
      <p class="mt-1">{{ product.name }}</p>
      <div class="mt-4">
        <div v-if="product.hidden" class="text-[15px] text-[#BD3223] px-3 py-2 flex w-full justify-center">
          Объявление скрыто
        </div>
        <div v-else-if="!product.promoted" class="flex space-x-2 w-full justify-between items-center">
          <p class="text-[#6B6B6B] text-[13px]">
            Увеличьте количество просмотров
          </p>
          <button class="bg-[#337566] text-white px-3 py-2 rounded-xl text-sm">
            Продвигать
          </button>
        </div>
        <div v-else class="text-[15px] text-[#337566] px-3 py-2 flex w-full justify-center">
          Объявление продвигается
        </div>
      </div>
    </div>
  </div>
</template>