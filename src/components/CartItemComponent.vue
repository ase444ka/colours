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

<style lang="scss" scoped></style>
