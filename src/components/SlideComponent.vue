<template>
  <div class="slide">
    <img :src="`/src/assets/slides/${img}`" />
    <div class="slide__content">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['img', 'title', 'text'])
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
  }
  &__content {
    position: absolute;
    z-index: 100;
    color: var(--white);
    left: calc(50% - 300px);
    top: calc(50% - 100px);
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 72px;
  }
  p {
    font-weight: bold;
  }
}
.carousel__pagination {
  gap: 6px;
  background-color: rgba(0, 0, 0, 0.4);
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
