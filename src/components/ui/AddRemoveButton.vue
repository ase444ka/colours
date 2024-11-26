<script setup>
const props = defineProps(['remove'])

</script>

<template>
  <button class="add-remove-button">
    <svg>
      <use v-if="props.remove" href="@/assets/sprites.svg#minus"></use>
      <use v-else href="@/assets/sprites.svg#plus"></use>
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
