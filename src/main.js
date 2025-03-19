import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VFileUpload } from 'vuetify/labs/VFileUpload'

const vuetify = createVuetify({
    components,
    directives
})

createApp(App).use(vuetify).mount('#app')