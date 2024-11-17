import './assets/main.css'

import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'
import VueCarousel from '@chenfengyuan/vue-carousel'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component(VueCarousel.name, VueCarousel)

app.mount('#app')
