import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import { pinia } from './store'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)

new Vue({
  pinia,
  render: h => h(App)
}).$mount('#app')
