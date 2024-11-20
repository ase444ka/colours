<script setup>
import { useTemplateRef, onMounted } from 'vue'

const emit = defineEmits(['change'])

const dropdown = useTemplateRef('dropdown')

onMounted(() => {
  emit('change', sortParams[0].value)
  initDropdown(dropdown.value)
})

function initDropdown(dropdown) {
  const toggleVisibility = (dropdown) => {
    if (dropdown.classList.contains('dropdown_minimized')) {
      expand(dropdown)
    } else {
      minimize(dropdown)
      select(dropdown)
      refreshIndicators(dropdown)
    }
  }

  const select = (dropdown) => {
    setTimeout(() => {
      const checked = Array.prototype.find.call(
        dropdown.querySelectorAll('input'),
        (input) => input.checked,
      )
      if (!checked) {
        return
      }
      const option = checked.closest('.dropdown__option')
      setTimeout(() => {
        dropdown.prepend(option)
      }, 200)
    }, 0)
  }

  const minimize = (dropdown) => {
    dropdown.classList.add('dropdown_minimized')
  }

  const expand = (dropdown) => {
    dropdown.classList.remove('dropdown_minimized')
  }

  const refreshIndicators = (dropdown, input) => {
    dropdown.querySelectorAll('input').forEach((item) => {
      item.classList.remove('input_hover')
    })
    input && input.classList.add('input_hover')
  }

  dropdown.addEventListener('pointerup', (e) => {
    toggleVisibility(dropdown)
    e.stopPropagation()
  })

  dropdown.addEventListener(
    'keyup',
    (e) => {
      if (e.key === 'Tab') {
        expand(dropdown)
        const input = e.target
        refreshIndicators(dropdown, input)
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        expand(dropdown)
        const input = e.target
        refreshIndicators(dropdown, input)
      }
      if (e.keyCode === 13) {
        minimize(dropdown)
        select(dropdown)
        refreshIndicators(dropdown)
      }
    },
    true,
  )

  document.addEventListener('pointerup', (e) => {
    if (!e.target.classList.contains('.dropdown__label')) {
      minimize(dropdown)
      select(dropdown)
      refreshIndicators(dropdown)
    }
  })
}

const changeParam = (value) => {
  emit('change', value)
}

const sortParams = [
  {
    value: 'expensive',
    text: 'сначала дорогие',
  },
  {
    value: 'chip',
    text: 'сначала недорогие',
  },
  {
    value: 'popular',
    text: 'сначала популярные',
  },
  {
    value: 'new',
    text: 'сначала новые',
  },
]
</script>

<template>
  <div class="dropdown dropdown_minimized" ref="dropdown">
    <svg class="dropdown__arrow">
      <use href="@/assets/sprites.svg#arrow-down"></use>
    </svg>
    <div class="dropdown__option" v-for="param in sortParams">
      <input
        type="radio"
        name="params"
        :id="param.value"
        :value="param.value"
        @change="changeParam(param.value)"
      />
      <label :for="param.value">{{ param.text }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  background-color: white;
  border: none;
  width: 100%;
  overflow: hidden;
  padding: 7px 0px;
  position: relative;
  max-height: 300px;
  transition: max-height 0.4s;
  z-index: 100;
  &_minimized {
    max-height: 32px;
    .dropdown__arrow {
      transform: rotate(360deg);
      width: 15px;
      height: 15px;
    }

    .dropdown__option {
      padding: 0 24px !important;
    }
    label {
      padding: 0 24px !important;
    }
  }

  &__arrow {
    transform: rotate(180deg);
    transition: transform 0.4s;
    position: absolute;
    top: 14px;
    right: 12px;
    width: 16px;
    height: 16px;
    z-index: 100;
    cursor: pointer;
  }
  &__option {
    position: relative;
    padding: 17px 24px;
  }
  label {
    padding: 17px 24px;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    font-size: 15px;
    cursor: pointer;
  }

  input {
    width: 0.1px;
    opacity: 0;
    z-index: 10;
    &:first-of-type {
      visibility: visible;
    }
    &:focus {
      border: none;
      outline: none;
    }
    &:hover + label {
      background-color: var(--green);
    }
    &.input_hover + label {
      background-color: var(--green);
    }
  }
}
</style>
