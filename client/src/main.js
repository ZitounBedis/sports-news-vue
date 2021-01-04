import Vue from 'vue'
import App from './App.vue'

//importing bootstrap elements
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//importing vue-router
import router from './router/routes'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

//calling bootstrap elements
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
//calling VueRouter
Vue.use(VueRouter);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
