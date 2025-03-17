<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <header class="w-full bg-[#FFF7EB] min-[960px]:px-10 px-2">
    <div class="mx-auto flex justify-between items-center min-[960px]:h-16 h-14">
      <img class="min-[960px]:hidden" src="/icons/burger.svg" alt="">
      <div class="flex gap-8">
        <NuxtLink to="/" class="text-[28px] font-[Noto_Serif] font-semibold">Annoncé</NuxtLink>
        <div class="flex gap-1 py-3 font px-4 rounded-full bg-gray-200 max-[960px]:hidden">
          <img src="/icons/mark.svg" alt="">
          <span class="text-[15px]">Все категории</span>
        </div>
      </div>
      <div class="flex space-x-9 items-center max-[960px]:hidden">
        <div class="flex gap-1 items-center ">
          <img src="/icons/categories.svg" alt="">
          <span class="text-[15px] text-[#0F0F0F]">Ростов-на-Дону</span>
        </div>
        <div class="h-[32px] border-l border-[#CCCCCC]"/>
        <span class="text-[15px] text-[#337566]">Разместить объявление</span>
        <NuxtLink to="/login" class="flex items-center h-12 font px-1 rounded-full bg-gray-200">
          <img src="/icons/burger.svg" alt="">
          <img class="w-10 h-10" src="/images/user1.png" alt="user1">
        </NuxtLink>
      </div>
      <div class="px-2 relative min-[960px]:hidden">
        <div
            class="absolute right-0 -top-2 bg-[#337566] rounded-full border border-[#FFFFFF]
            min-w-[17px] h-[17px] text-white flex items-center justify-center text-[11px] font-medium leading-[20px]"
        >
          1
        </div>
        <img src="/icons/basket.svg" alt="">
      </div>
    </div>
  </header>
</template>