/*
 * @Date: 2023-04-20 09:25:13
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(App)
app.mount('#app')
