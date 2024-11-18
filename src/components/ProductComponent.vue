<script setup>
import { defineProps } from 'vue'

defineProps(['product'])
</script>

<template>
  <div class="product">
    <div class="product__image">
      <img :src="product.img" />
    </div>
    <div class="product__title">
      {{ product.title }}
    </div>
    <div class="product__details">
      <div class="product__price">{{ product.price }} ₽</div>
      <button class="product__button">
        1
        <svg>
          <use href="@/assets/sprites.svg#plus"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    grid-template-columns: 1fr 1fr;
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
