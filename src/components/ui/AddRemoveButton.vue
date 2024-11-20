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
    background-color: inherit;
  }

  &-activated {
    background-color: var(--green);
  }
}
</style>
