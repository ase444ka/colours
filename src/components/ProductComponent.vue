<script setup>
import {defineProps} from 'vue'

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
                  <svg>
                    <use href="@/assets/sprites.svg#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
</template>

<style lang="scss" scoped>

</style>
