<script setup>
import { ref } from 'vue'
import TogglerItem from '@/components/ui/TogglerItem.vue'
import SliderComponent from '@/components/SliderComponent.vue'
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
function upd(v) {
  console.log('upd ', v)
}
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
          <div class="catalog__title">товары</div>
          <div class="catalog__products">список товаров</div>
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
}
</style>
