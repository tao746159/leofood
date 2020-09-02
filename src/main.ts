import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/index.scss'
import './icon'
import VueScroller from 'vue-scroller'
import Message from '@/utils/leoUI/message'
Vue.use(VueScroller)
Vue.use(Message)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
