<script setup>
import CartItemComponent from './CartItemComponent.vue'
import { useProductStore } from '@/store'
const productStore = useProductStore()
const emit = defineEmits(['hide'])
const props = defineProps(['isShowing'])
import { ref, watch, computed, onBeforeUnmount } from 'vue'
import { productCountDeclencion } from '@/utils'

const hide = () => {
  emit('hide')
}

onBeforeUnmount(() => {})

const showClass = ref('')

const countString = computed(() => {
  return productCountDeclencion(productStore.orderedCount)
})

watch(
  () => props.isShowing,
  (value) => {
    if (value) {
      setTimeout(() => {
        showClass.value = 'cart__window-show'
      }, 100)
    } else {
      setTimeout(() => {
        showClass.value = ''
        productStore.clearRemoved()
      }, 100)
    }
  },
)
</script>

<template>
  <div class="cart">
    <div class="cart__window" :class="showClass">
      <div class="cart__header">
        <h3 class="cart__title">Корзина</h3>
        <button class="cart__close" @click="hide">
          <SvgSprite symbol="cross" />
        </button>
      </div>
      <Transition>
        <div class="cart__header p-10" v-if="productStore.orderedPrice">
          <div class="cart__total">{{ countString }}</div>
          <button class="cart__clear" @click="productStore.clearCart()">очистить список</button>
        </div>
      </Transition>
      <div class="cart__items" v-if="productStore.orderedProducts.length">
        <CartItemComponent :product="p" v-for="p in productStore.orderedProducts" />
      </div>
      <div v-else class="cart__empty-message">Корзина пуста</div>
      <Transition>
        <div class="cart__footer" v-if="productStore.orderedPrice">
          <div class="cart__total">
            <div>Итого</div>
            <div class="cart__total-price">{{ productStore.orderedPrice }}₽</div>
          </div>
          <button class="cart__order-button">оформить заказ</button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  display: flex;
  position: fixed;
  justify-content: flex-end;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 80%);
  align-items: center;
  max-height: 100vh;
  z-index: 1000;
  &__window {
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0;
    background: var(--white);
    opacity: 1;
    flex-basis: 700px;
    padding: 40px;
    z-index: 10000;
    transform: translateX(600px);
    transition: transform 1s;
    * {
      background-color: white;
    }

    &-show {
      transform: translateX(0);
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
  }
  .p-10 {
    padding: 10px 0;
  }
  &__close {
    background-repeat: no-repeat;
    padding: 15px;
    border: 1px solid var(--grey3);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    padding: 0;
    cursor: pointer;
    display: grid;
    place-items: center;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  &__title {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 30px;
  }
  &__content {
    margin-top: 14px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
  }
  &__clear {
    color: var(--grey3);
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }
  &__total-price {
    font-weight: 500;
    font-size: 30px;
    line-height: 1;
    @media screen and (max-width: 600px) {
      width: auto;
      padding-left: 5px;
      padding-right: 5px;
      font-size: 16px;
    }
  }
  &__order-button {
    font-weight: 500;
    background-color: var(--green);
    width: 240px;
    height: 56px;
    border-radius: 4px;
    text-transform: uppercase;
    @media screen and (max-width: 420px) {
      width: auto;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
  &__empty-message {
    text-align: center;
    font-size: 18px;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.9s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
