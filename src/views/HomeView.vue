<script setup>
import ProductComponent from '@/components/ProductComponent.vue'
import { onMounted, ref } from 'vue'
import TogglerItem from '@/components/ui/TogglerItem.vue'
import SliderComponent from '@/components/SliderComponent.vue'
import api from '@/api'

const products = ref([])
async function getProducts() {
  try {
    products.value = await api.getProducts()
    console.log(products.value)
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
          <div class="content__products">
            <ProductComponent v-for="product in products" :product="product" />
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
.product {
  cursor: default;
  border-bottom: 1px solid var(--grey2);
  & > div {
    margin-bottom: 20px;
  }
  &__title {
    font-weight: 300;
  }
  &__details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__price {
    font-weight: bold;
  }
  &__button {
    width: 80px;
    height: 32px;
    background-color: var(--grey2);
    border-radius: 8px;
    display: grid;
    place-items: center;
    svg {
      width: 16px;
      height: 16px;
    }
    &:hover {
      background-color: var(--green);
    }
  }
}
</style>
