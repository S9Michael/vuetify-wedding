import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css';


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
