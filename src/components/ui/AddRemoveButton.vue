<script setup>
import { computed } from 'vue'
const props = defineProps(['remove'])
const svgHref = computed(() =>
  props.remove ? 'src/assets/sprites.svg#minus' : 'src/assets/sprites.svg#plus',
)
</script>

<template>
  <button class="add-remove-button">
    <svg>
      <use :href="svgHref"></use>
    </svg>
  </button>
</template>

<style lang="scss" scoped>
.add-remove-button {
  width: 80px;
  height: 32px;
  background-color: var(--grey2);
  border-radius: 8px;
  display: grid;
  place-items: center;
  svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    transform: translate3d(1px, 1px, 1px);
  }
  &:hover {
    transform: translate3d(1px, 1px, 1px);
    -webkit-box-shadow: 2px 2px 20px -7px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 2px 2px 20px -7px rgba(34, 60, 80, 0.2);
    box-shadow: 2px 2px 20px -7px rgba(34, 60, 80, 0.2);
  }
  &-activated {
    background-color: var(--green);
  }
}
</style>
