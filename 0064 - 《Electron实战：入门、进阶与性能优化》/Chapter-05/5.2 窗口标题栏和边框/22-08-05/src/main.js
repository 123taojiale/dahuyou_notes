import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/iconfont/iconfont.css"
import "./styles/global.less"

createApp(App).use(router).mount('#app')
