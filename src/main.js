import './assets/main.css'

import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'
import { svgSpritePlugin, SvgSprite } from 'vue-svg-sprite'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

const url = 'sprites.svg'

app.use(createPinia())
app.use(router)
app.use(svgSpritePlugin, { url })
app.component('SvgSprite', SvgSprite)

app.mount('#app')
