<script setup>
import { useProductStore } from '@/store'
import AddRemoveButton from '@/components/ui/AddRemoveButton.vue'

const productStore = useProductStore()
const props = defineProps(['product'])
</script>

<template>
  <div class="cart__item" :class="product.isRemoved ? 'cart__item_removed' : ''">
    <div class="cart__item__img">
      <img :src="product.img" :alt="product.title" />
    </div>
    <div class="cart__item__description">
      <div class="cart__item__title">{{ product.title }}</div>
      <div class="cart__item__price">{{ product.orderedCount * product.price }} ₽</div>
    </div>
    <AddRemoveButton
      @click="productStore.addToCart(product.id)"
      :disabled="product.isRemoved"
      class="cart__item__remove-restore"
    />
    <div class="cart__item__count">{{ product.orderedCount }}</div>
    <AddRemoveButton
      :remove="true"
      @click="productStore.removeFromCart(product.id)"
      :disabled="product.isRemoved"
      class="cart__item__remove-restore"
    />
    <button
      class="cart__item__remove-restore-item"
      @click="
        product.isRemoved
          ? productStore.restoreToCart(product.id)
          : productStore.removeItemFromCart(product.id)
      "
    >
      <svg>
        <use
          :href="
            product.isRemoved ? '/src/assets/sprites.svg#restore' : '/src/assets/sprites.svg#cross'
          "
        ></use>
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.cart__item {
  display: grid;
  grid-template-columns: max-content 220px repeat(4, max-content);
  align-items: center;
  border-top: 1px solid var(--grey1);
  gap: 20px;
  padding: 25px 0;
  &__img {
    width: 96px;
    height: 96px;
  }
  &__description {
    @media screen and (max-width: 700px) {
      grid-column: span 3;
    }
  }
  &__title {
    font-weight: 300;
  }
  &__price {
    font-weight: 600;
  }

  &__count {
    display: grid;
    place-items: center;
  }
  &__remove-restore {
    background-color: var(--grey2) !important;
    @media screen and (max-width: 420px) {
      width: 50px;
    }
  }
  button svg {
    height: 24px;
    width: 24px;
  }
  &_removed :not(:last-child) {
    opacity: 0.4;
  }

  @media screen and (max-width: 700px) {
    gap: 5px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
  }
}
</style>
