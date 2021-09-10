import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from './plugins'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(plugins)
app.mount('#app')
