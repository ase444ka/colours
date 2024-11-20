<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import SlideComponent from '@/components/SlideComponent.vue'
import { ref } from 'vue'

const slides = ref([
  {
    img: '1.png',
    title: 'Краски',
    text: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!',
    color: 'white'
  },
  {
    img: '2.png',
    title: 'Лаки',
    text: 'Идеально подходят для шкафов и столов. Найди свой идеальный лак!',
    color: 'black'
  },
])

const config = ref({
  wrapAround: true,
  // autoplay: 4000,
  pauseAutoplayOnHover: true,
  transition: 800,
})
</script>

<template>
  <div class="slider">
    <Carousel v-bind="config">
      <Slide v-for="slide in slides" :key="slide">
        <SlideComponent v-bind="slide" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  width: 100%;
}
</style>
