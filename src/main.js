import Vue from 'vue'
import App from './App.vue'
import MyCompoents from '@/components/index'

Vue.use(MyCompoents)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
