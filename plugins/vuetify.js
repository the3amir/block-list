import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      themes: {
        dark: {
          // colors
        }
      }
    }
  })
  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}