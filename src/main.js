// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Vue.config.productionTip = false
// import the new composition api in order to make it work in Vue@2.x
import VueComp from '@vue/composition-api'
Vue.config.productionTip = false
// use the vue-composition-api plugin
Vue.use(VueComp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
