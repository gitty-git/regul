<script setup lang="ts">
import type { Product } from '~/types'

definePageMeta({
  middleware: ['auth']
})

const authStore = useAuthStore()

const { data: products } = await useFetch<Product[]>('/api/products', {
  headers: { Authorization: `Bearer ${authStore.token}` }
})

const cats = [
  { name: 'Категория 1', id: 0 },
  { name: 'Категория 2', id: 1 },
]

const allProductsOption = { id: -1, name: 'Все товары и услуги' }

const options = [
  { id: 0, name: 'Гробы', count: 3, categoryID: 0 },
  { id: 1, name: 'Урны', count: 3, categoryID: 0 },
  { id: 2, name: 'Тапки', count: 3, categoryID: 1 },
  { id: 3, name: 'Покрывало', count: 3, categoryID: 1 }
]

const selectedID = ref(-1)

const selectedOption = computed(() => options[selectedID.value] ?? allProductsOption)

const { isDesktop } = useDevice()

const select = (id: number, func: () => void): void => {
  selectedID.value = id
  if (isDesktop) {
    func()
  }
}
</script>

<template>
  <div class="flex items-center flex-col">
    <div class="px-4 w-full sm:w-fit">
      <UiSelector :selected="selectedOption.name" title="Товары и услуги">
        <template #default="{ closeOptions }">
          <div
            class="px-4 py-4 text-[15px] cursor-pointer hover:bg-[#EDEDED] flex items-center w-full justify-between"
            tabindex="0" @click.stop="select(allProductsOption.id, closeOptions)"
          >
            {{ allProductsOption.name }}
            <img v-if="allProductsOption.id === selectedOption.id" src="/icons/checkmark.svg" alt="">
          </div>
          <div v-for="cat in cats" :key="cat.id" class="mb-2">
            <div class="w-full px-3 py-2.5 text-gray-500 text-[13px] mt-2.5"
            >
              {{ cat.name }}
            </div>
            <div v-for="(option, key) in options" :key="option.id">
              <div
                  v-if="option.categoryID === cat.id"
                  class="px-3 py-2.5 text-[15px] cursor-pointer hover:bg-[#EDEDED] flex items-center w-full justify-between"
                  @click.stop="select(key, closeOptions)"
              >
                <div>{{ option.name }} <span class="text-gray-500">{{ option.count }}</span></div>
                <img v-if="option.id === selectedOption.id" src="/icons/checkmark.svg" alt="">
              </div>
            </div>
          </div>
        </template>
      </UiSelector>
    </div>
    <div class="space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 mt-6 px-2 lg:px-8">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>