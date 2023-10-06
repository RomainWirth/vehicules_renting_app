import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'


import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.use(Quasar, {
    plugins: {},
})

app.mount('#app')
