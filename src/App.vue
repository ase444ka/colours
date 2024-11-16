<script setup>
import IconLogo from './components/icons/IconLogo.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo">
      <IconLogo />
    </div>
    <nav>
      <ul>
        <li><RouterLink to="/">продукты</RouterLink></li>
        <li><RouterLink to="/">цвета</RouterLink></li>
        <li><RouterLink to="/">вдохновение</RouterLink></li>
        <li><RouterLink to="/">советы</RouterLink></li>
        <li><RouterLink to="/">найти магазин</RouterLink></li>
      </ul>
    </nav>
    <address class="phone">
      <a class="phone__link" href="tel:+74952217769">+7 (495) 221-77-69</a>
      <div class="phone__text">заказать звонок</div>
    </address>
    <nav>
      <ul>
        <li><RouterLink to="/">лупа</RouterLink></li>
        <li><RouterLink to="/">человек</RouterLink></li>
        <li><RouterLink to="/">сердечко</RouterLink></li>
        <li><RouterLink to="/">кружочек</RouterLink></li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
}
</style>
