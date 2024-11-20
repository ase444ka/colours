<script setup>
import ProductComponent from '@/components/ProductComponent.vue'
import { onMounted, ref, computed } from 'vue'
import TogglerItem from '@/components/ui/TogglerItem.vue'
import SliderComponent from '@/components/SliderComponent.vue'

import { useProductStore } from '@/store'

const productStore = useProductStore()
async function getProducts() {
  try {
    await productStore.getProducts()
    console.log(productStore.products.value)
  } catch (e) {
    alert('не удалось получить продукты, ошибка ', e.message)
  }
}

onMounted(getProducts)
const filters = ref([
  {
    label: 'новинки',
    value: 'new',
    checked: false,
  },
  {
    label: 'есть в наличии',
    value: 'available',
    checked: false,
  },
  {
    label: 'контрактные',
    value: 'contract',
    checked: false,
  },
  {
    label: 'эксклюзивные',
    value: 'exclusive',
    checked: false,
  },
  {
    label: 'распродажа',
    value: 'sale',
    checked: false,
  },
])

const appliedFilters = computed(() => {
  return filters.value.filter((item) => item.checked).map((item) => item.value)
})

const filteredProducts = computed(() => {
  if (appliedFilters.value.length) {
    return productStore.products.filter((p) => appliedFilters.value.every((item) => p[item]))
  }
  return productStore.products
})
</script>

<template>
  <main>
    <SliderComponent />
    <div class="container">
      <div class="content">
        <div class="content__filters">
          <TogglerItem v-for="f in filters" :key="f.label" v-model="f.checked" :label="f.label" />
        </div>
        <div class="content__catalog">
          <div class="content__title"></div>
          <p v-if="!filteredProducts.length">Товаров по вашему запросу не найдено.</p>
          <div class="content__products" v-else>
            <ProductComponent v-for="product in filteredProducts" :product="product" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.content {
  margin-top: 70px;
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 110px;

  &__filters {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 24px;
  }
}
</style>
