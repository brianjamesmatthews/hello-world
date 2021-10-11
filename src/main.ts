import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  pinia,
  render: h => h(App)
}).$mount('#app')
