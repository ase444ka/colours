<script setup>
import SliderComponent from '@/components/SliderComponent.vue'
</script>

<template>
  <main>
    <SliderComponent />
    <div class="container">
      <div class="content">
        <div class="content__filters">фильтры</div>
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
  display: grid;
  grid-template-columns: 150px 1fr;
}
</style>
