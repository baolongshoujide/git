import { createApp } from 'vue'
import App from './App.vue'
import './styles/style.less'
import { createPinia } from 'pinia'
import persist from'pinia-plugin-persistedstate'

const pinia = createPinia()
createApp(App).use(pinia.use(persist)).mount('#app')
