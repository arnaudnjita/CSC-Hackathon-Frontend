import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Routes from '../src/routes/routes'

loadFonts()

const app = createApp(App)
  app.use(vuetify)
  app.use(Routes)
  .mount('#app')


