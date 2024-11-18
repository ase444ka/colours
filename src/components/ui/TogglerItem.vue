<script setup>
import { defineProps, ref, onMounted } from 'vue'
const props = defineProps(['label', 'value'])
const checked = defineModel()
// onMounted(() => (checkedRef.value = props.checked.value))
</script>

<template>
  <label :for="value" class="toggler">
    <input
      type="checkbox"
      
      title="toggler"
      class="toggler__input"
      v-model="checked"
      :id="props.value"
    />
    <div class="toggler__state">
      <div class="toggler__control">
        <div class="toggler__icon"></div>
      </div>
      <div class="toggler__label">{{ label }}</div>
    </div>
  </label>
</template>

<style lang="scss" scoped>
.toggler {
  display: inline-block;
  position: relative;
  * {
    transition: all 0.5s;
  }
}

.toggler__input {
  position: absolute;
  outline: none;
  border: none;
  clip: rect(0, 0, 0, 0);
  opacity: 0;
}

.toggler__state {
  cursor: pointer;
  display: flex;
  align-items: center;
  background: var(--grey-2);
  gap: 12px;
}

.toggler__control {
  box-sizing: border-box;
  width: 36px;
  height: 22px;
  background: var(--grey2);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 6px;
}

.toggler__icon {
  background-color: var(--black);
  width: 8px;
  height: 8px;

  border-radius: 50%;
}

.toggler__label {
  font-family: 'Inter';
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  user-select: none;
}

.toggler__input:checked + .toggler__state .toggler__control {
  justify-content: flex-end;
  background-color: var(--green);
}

.toggler__input:disabled + .toggler__state {
  cursor: auto;
}

.toggler__input:disabled + .toggler__state .toggler__control {
  border-color: var(--grey-2);
  background-color: var(--grey-2);
}

.toggler__input:disabled + .toggler__state .toggler__label {
  color: var(--grey-2);
}

.toggler__input:disabled + .toggler__state .toggler__icon {
  background-color: var(--white);
}
</style>
