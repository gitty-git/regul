<script setup lang="ts">
defineProps<{
  selected: string
  title: string
}>()

const optionsShown = ref(false)

const closeOptions = () => {
  optionsShown.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (selectorRef.value && !selectorRef.value.contains(event.target as Node)) {
    optionsShown.value = false
  }
}

const selectorRef = ref<HTMLElement | null>(null)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="selectorRef" class="relative w-full flex justify-center">
    <div
        class=" text-[#0F0F0F] bg-[#EDEDED] w-full sm:w-[438px] flex justify-between items-center
          p-4 text-[15px] mt-6 rounded-xl cursor-pointer" @click="optionsShown = !optionsShown"
    >
      {{ selected }}
      <svg class="duration-200" :class="{ 'rotate-180' : optionsShown }" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.944716 2.565L4.82972 6.45C5.41472 7.035 6.35972 7.035 6.94472 6.45L10.8297 2.565C11.7747 1.62 11.0997 0 9.76472 0H1.99472C0.659716 0 -0.000284195 1.62 0.944716 2.565Z" fill="#6B6B6B"/>
      </svg>
    </div>
    <transition
      enter-active-class="duration-100 opacity-0"
      leave-active-class="duration-100 ease-in"
      enter-to-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="$device.isDesktop && optionsShown"
        class="z-20 bg-white rounded-xl absolute w-full mt-2 shadow-lg top-20 overflow-x-hidden"
      >
        <slot :close-options="closeOptions"/>
      </div>
      <div
          v-else-if="optionsShown"
          class="fixed w-dvw h-dvh bg-white z-20 top-0 left-0 flex flex-col justify-between"
      >
        <div>
          <div class="py-4 px-4 relative flex items-center justify-center font-[15px]">
            <div class="absolute left-4 top-4" @click="closeOptions">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3641 18.364C17.9736 18.7545 17.3404 18.7545 16.9499 18.364L12.0001 13.4142L7.05037 18.364C6.65984 18.7545 6.02668 18.7545 5.63616 18.364C5.24563 17.9734 5.24563 17.3403 5.63616 16.9497L10.5859 12L5.63616 7.05025C5.24563 6.65972 5.24563 6.02656 5.63616 5.63603C6.02668 5.24551 6.65984 5.24551 7.05037 5.63603L12.0001 10.5858L16.9499 5.63603C17.3404 5.24551 17.9736 5.24551 18.3641 5.63603C18.7546 6.02656 18.7546 6.65972 18.3641 7.05025L13.4143 12L18.3641 16.9497C18.7546 17.3403 18.7546 17.9734 18.3641 18.364Z" fill="#0F0F0F"/>
              </svg>
            </div>
            {{ title }}
          </div>
          <slot :close-options="closeOptions"/>
        </div>
        <div class="px-4 pb-10">
          <button class="bg-[#337566] text-white px-5 py-4 rounded-xl mt-6 w-full" @click="closeOptions">
            Применить
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>