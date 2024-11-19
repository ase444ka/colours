<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import { RouterView } from 'vue-router'
import CartComponent from '@/components/CartComponent.vue'
import { ref } from 'vue'

const cartIsShowing = ref(false)
const showCart = () => {
  cartIsShowing.value = true
}
const hideCart = () => {
  cartIsShowing.value = false
}
</script>

<template>
  <Transition>
    <CartComponent :isShowing="cartIsShowing" @hide="hideCart" v-show="cartIsShowing" />
  </Transition>
  <HeaderComponent />
  <button @click="showCart">показать корзину</button>

  <RouterView />
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.9s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
