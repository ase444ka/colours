<script setup>
import CartComponent from '@/components/CartComponent.vue'
import IconLogo from '@/components/icons/IconLogo.vue'
import { useProductStore } from '@/store'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const cartIsShowing = ref(false)
const showCart = () => {
  cartIsShowing.value = true
}
const hideCart = () => {
  cartIsShowing.value = false
}

const productStore = useProductStore()
</script>

<template>
  <Teleport to="body">
    <Transition>
      <CartComponent :isShowing="cartIsShowing" @hide="hideCart" v-show="cartIsShowing" />
    </Transition>
  </Teleport>
  <header>
    <div class="container">
      <div class="header-wrapper">
        <button class="burger">
          <svg>
            <use href="@/assets/sprites.svg#burger"></use>
          </svg>
        </button>
        <div class="logo">
          <IconLogo />
        </div>
        <nav class="main-nav">
          <ul class="main-nav__ul">
            <li><RouterLink to="/">продукты</RouterLink></li>
            <li><RouterLink to="/">цвета</RouterLink></li>
            <li><RouterLink to="/">вдохновение</RouterLink></li>
            <li><RouterLink to="/">советы</RouterLink></li>
            <li><RouterLink to="/">найти магазин</RouterLink></li>
          </ul>
        </nav>
        <address class="phone">
          <a class="phone__link" href="tel:+74952217769">+7 (495) 221-77-69</a>
          <div class="phone__text">Заказать звонок</div>
        </address>
        <nav class="second-nav">
          <ul>
            <li>
              <RouterLink to="/">
                <svg>
                  <use href="@/assets/sprites.svg#magnify"></use>
                </svg>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/">
                <svg>
                  <use href="@/assets/sprites.svg#user"></use>
                </svg>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/">
                <svg>
                  <use href="@/assets/sprites.svg#heart"></use>
                </svg>
              </RouterLink>
            </li>
            <li>
              <button class="cart-link" @click="showCart">{{ productStore.orderedCount }}</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  width: 131px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
}
.burger {
  display: none;
  svg {
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 1100px) {
    display: grid;
    place-items: center;
  }
}
header {
  .header-wrapper {
    padding: 40px 0;
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    nav ul {
      display: grid;
      grid-auto-flow: column;
      justify-content: start;
      gap: 24px;
      li {
        text-transform: uppercase;
        font-size: 14px;
      }
    }
  }
}

.main-nav {
  margin-left: 180px;
  @media screen and (max-width: 1300px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 1250px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 1100px) {
    .main-nav__ul {
      grid-auto-flow: column;
    }
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-200px);
    width: 200px;
    flex-direction: column;
  }

  li {
    display: flex;
  }
}

.second-nav {
  justify-self: end;
  @media screen and (max-width: 900px) {
    display: none;
  }
  li {
    width: 22px;
    height: 22px;
  }
  .cart-link {
    border-radius: 50%;
    background-color: var(--green);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 12px;
  }
}

svg {
  width: 100%;
  height: 100%;
}
.phone {
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  margin-right: 100px;
  &__text {
    opacity: 0.3;
    font-size: 14px;
    line-height: 100%;
  }
  @media screen and (max-width: 1200px) {
    margin: auto;
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
