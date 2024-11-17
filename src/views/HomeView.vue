<script setup>
  import SlideOne from '@/components/slides/SlideOne.vue';
  import SlideTwo from '@/components/slides/SlideTwo.vue';
</script>

<template>
  <main>
    <div class="slider">
      <vue-carousel :data="[SlideOne, SlideTwo]"></vue-carousel>
    </div>
    <div class="filters">
      фильтры
    </div>
    <div class="catalog">
      <div class="catalog__title">товары</div>
      <div class="products">список товаров</div>
    </div>
  </main>
</template>
