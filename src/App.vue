<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderComponent />

  <RouterView />

  <footer></footer>
</template>

<style>
footer {
  height: 100px;
  background-color: var(--black);
}
</style>
