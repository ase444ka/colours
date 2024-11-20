<script setup>
import AddRemoveButton from '@/components/ui/AddRemoveButton.vue'
import { useProductStore } from '@/store'
const productStore = useProductStore()
const emit = defineEmits(['hide'])
const props = defineProps(['isShowing'])
import { ref, watch } from 'vue'

const hide = () => {
  emit('hide')
}

const showClass = ref('')

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
          <svg>
            <use href="@/assets/sprites.svg#cross"></use>
          </svg>
        </button>
      </div>

      <div class="cart__header p-10">
        <div class="cart__total">4 товара</div>
        <button class="cart__clear">очистить список</button>
      </div>
      <div class="cart__items">
        <div class="cart__item">
          <div class="cart__item__img">
            <img src="@/assets/photos/1.png" alt="фото краски" />
          </div>
          <div class="cart__item__description">
            <div class="cart__item__title">Краска Wallquest, Brownsone MS90102</div>
            <div class="cart__item__price">9600 ₽</div>
          </div>
          <AddRemoveButton />
          <div class="cart__item__count">5</div>
          <AddRemoveButton :remove="true" />
          <button class="cart__item__button_remove">
            <svg>
              <use href="@/assets/sprites.svg#cross"></use>
            </svg>
          </button>
        </div>
        <div class="cart__item cart__item_removed">
          <div class="cart__item__img">
            <img src="@/assets/photos/1.png" alt="фото краски" />
          </div>
          <div class="cart__item__description">
            <div class="cart__item__title">Краска Wallquest, Brownsone MS90102</div>
            <div class="cart__item__price">9600 ₽</div>
          </div>
          <AddRemoveButton />
          <div class="cart__item__count">5</div>
          <AddRemoveButton :remove="true" />
          <button class="cart__item__button_remove">
            <svg>
              <use href="@/assets/sprites.svg#restore"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="cart__footer">
        <div class="cart__total">
          <div>Итого</div>
          <div class="cart__total-price">14 400₽</div>
        </div>
        <button class="cart__order-button">оформить заказ</button>
      </div>
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
  background: rgba(80%, 80%, 80%, 80%);
  align-items: center;
  max-height: 100vh;
  overflow-y: auto;
  z-index: 1000;
  &__window {
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    min-height: 100vh;
    margin: 0;
    background: var(--white);
    opacity: 1;
    flex-basis: 600px;
    padding: 40px;
    z-index: 10000;
    transform: translateX(600px);
    transition: transform 1s;
    &-show {
      transform: translateX(0);
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
  }
  .p-10 {
    padding: 10px 0;
  }
  &__close {
    background-repeat: no-repeat;
    padding: 15px;
    border: 1px solid rgba(0, 0, 0, 0.3);
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
    color: rgba(0, 0, 0, 0.4);
  }
  &__item {
    display: grid;
    grid-template-columns: max-content 220px repeat(4, max-content);
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    gap: 20px;
    padding: 25px 0;
    &__img {
      width: 96px;
      height: 96px;
    }
    &__title {
      font-weight: 300;
    }
    &__price {
      font-weight: 600;
    }
    button svg {
      height: 24px;
      width: 24px;
    }
    &_removed :not(:last-child) {
      opacity: 0.4;
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
  }
  &__total-price {
    font-weight: 500;
    font-size: 30px;
    line-height: 1;
  }
  &__order-button {
    font-weight: 500;
    background-color: var(--green);
    width: 240px;
    height: 56px;
    border-radius: 4px;
    text-transform: uppercase;
  }
}
</style>
