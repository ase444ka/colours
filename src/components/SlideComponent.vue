<template>
  <div class="slide">
    <img :src="`src/assets/slides/${img}`" />
    <div class="slide__content" :class="colorClass">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps(['img', 'title', 'text', 'color'])
const colorClass = computed(() =>
  props.color === 'black' ? 'slide__content_black' : 'slide__content_white',
)
</script>
<style lang="scss">
.slide {
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 560px;
  img {
    width: 100%;
    object-fit: contain;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &__content {
    position: absolute;
    z-index: 100;
    left: calc(50% - 300px);
    top: calc(50% - 100px);
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &_white {
      color: #ffffff;
    }
    &_black {
      color: var(--black);
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
  h2 {
    font-size: 72px;
  }
  p {
    font-weight: 500;
    font-size: 2.8vh;
    letter-spacing: 0.5px;
  }
}
.carousel__pagination {
  gap: 6px;
  background-color: var(--grey3);
  border-radius: 18px;
  padding: 15px !important;
}
.carousel__pagination-button {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--white);
  cursor: pointer;
  &--active {
    opacity: 0.4;
  }
}
.carousel__pagination-button::after {
  display: none;
  content: '';
}
.carousel__icon {
  color: var(--white);
  width: 80px;
  height: 80px;
}
</style>
