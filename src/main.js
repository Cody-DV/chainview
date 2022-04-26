import { createApp } from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'
import { createVuetify } from 'vuetify'
import { loadFonts } from './plugins/webfontloader'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

loadFonts()

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  components,
  directives,
})

createApp(App)
  .use(vuetify)
  .mount('#app')
