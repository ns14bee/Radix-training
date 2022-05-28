import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {pinia} from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus).use(pinia).mount('#app')
