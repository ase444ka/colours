<script setup>
import DropdownComponent from '@/components/ui/DropdownComponent.vue'
import ProductComponent from '@/components/ProductComponent.vue'
import { onMounted, ref, computed } from 'vue'
import TogglerItem from '@/components/ui/TogglerItem.vue'
import SliderComponent from '@/components/SliderComponent.vue'

import { useProductStore } from '@/store'
import { productCountDeclencion } from '@/utils'

const productStore = useProductStore()
async function getProducts() {
  try {
    await productStore.getProducts()
    console.log(productStore.products.value)
  } catch (e) {
    alert(`не удалось получить продукты, ошибка ${e.message}`)
  }
}

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape' && showMobileFilters.value) {
    showMobileFilters.value = false
  }
})

const showMobileFilters = ref(false)

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

const showMobileClass = computed(() => (showMobileFilters.value ? 'content__filters_showing' : ''))

const checkAndHide = (e) => {
  if (e.movementY > 5) {
    showMobileFilters.value = false
  }
}

const sortProducts = (param) => {
  switch (param) {
    case 'chip':
      productStore.upSort()
      return
    case 'expensive':
      productStore.downSort()
      return
    default:
      productStore.shuffle()
      return
  }
}
</script>

<template>
  <main>
    <SliderComponent />
    <div class="container">
      <div class="content">
        <Teleport to="body" v-if="showMobileFilters">
          <div class="content__filters__backdrop"></div>
        </Teleport>
        <div class="content__filters" :class="showMobileClass" @pointermove="checkAndHide">
          <button
            class="content__filters__button"
            @click="() => (showMobileFilters = false)"
          ></button>
          <TogglerItem v-for="f in filters" :key="f.label" v-model="f.checked" :label="f.label" />
        </div>
        <div class="content__catalog">
          <div class="content__title">
            <div class="content__total">
              {{ productCountDeclencion(filteredProducts.length) }}
            </div>
            <button class="content__filters-toggler" @click="() => (showMobileFilters = true)">
              фильтры
            </button>
            <div class="content__menu">
              <DropdownComponent @change="(e) => sortProducts(e)" />
            </div>
          </div>
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
  @media screen and (max-width: 900px) {
    grid-template-columns: inherit;
  }
  &__title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    height: 50px;
    font-weight: 500;
    * {
      font-size: 12px !important;
    }
    @media screen and (max-width: 900px) {
      position: sticky;
      top: 75px;
      left: 0;
      right: 0;
      background-color: white;
      padding-bottom: 20px;
    }
    }

  &__total {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  &__filters-toggler {
    display: none;
    @media screen and (max-width: 900px) {
      display: flex;
      padding-top: 3px;
    }
    text-transform: uppercase;
  }

  &__filters {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 900px) {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 12px 24px;
      z-index: 1000;
      background-color: white;
      transform-origin: bottom;
      min-height: 0.5vh;
      border-radius: 24px 24px 0 0;
      transform: translateY(900px);
      transition: transform 0.5s;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transform-origin: bottom;
      &_showing {
        transform: translateY(0);
      }
    }
    &__backdrop {
      position: fixed;
      background: rgba(0, 0, 0, 80%);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 500;
    }
    &__button {
      display: none;
      @media screen and (max-width: 900px) {
        display: block;
        width: 28px;
        height: 4px;
        border: 4px solid var(--black);
        opacity: 60%;
        margin-bottom: 34px;
        align-self: center;
      }
    }
  }
  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 24px;
  }

  &__menu {
    position: relative;
    width: 206px;
  }
}
</style>
