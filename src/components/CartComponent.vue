<script setup>
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
        showClass.value = 'modal__window-show'
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
  <div class="modal">
    <div class="modal__window" :class="showClass">
      <div class="modal__header">
        <h3 class="modal__title">Корзина</h3>
        <button class="modal__close" @click="hide">
          <svg>
            <use href="@/assets/sprites.svg#cross"></use>
          </svg>
        </button>
      </div>

      <div class="modal__content"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
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
  &__title {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 30px;
  }
}

.modal__window {
  margin: 0;
  background: var(--white);
  opacity: 1;
  flex-basis: 600px;
  height: 100vh;
  padding: 40px;
  z-index: 10000;
  transform: translateX(600px);
  transition: transform 1s;
  &-show {
    transform: translateX(0);
  }
}
.modal__header {
  display: flex;
  justify-content: space-between;
}
.modal__close {
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

.modal__content {
  margin-top: 14px;
}
</style>
