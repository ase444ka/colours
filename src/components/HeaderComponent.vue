<script setup>
import IconLogo from '@/components/icons/IconLogo.vue'
import { useProductStore } from '@/store'
import { RouterLink } from 'vue-router'

const productStore = useProductStore()
</script>

<template>
  <header>
    <div class="container">
      <div class="header-wrapper">
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
              <RouterLink to="/" class="cart-link">{{ productStore.orderedCount }}</RouterLink>
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
}
header {
  .header-wrapper {
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
  li {
    display: flex;
  }
}

.second-nav {
  justify-self: end;
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
}
</style>
