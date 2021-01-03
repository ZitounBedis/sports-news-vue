import Vue from 'vue'
import App from './App.vue'

//importing bootstrap elements
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//importing vue-router
import VueRouter from 'vue-router'

//imports for router
import Landingpage from './components/landingpage-and-other/Landingpage'
import Signin from './components/signin-up/Signin'
import Signup from './components/signin-up/Signup'
import Mainfeed from './components/landingpage-and-other/Mainfeed'

Vue.config.productionTip = false

//calling bootstrap elements
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
//calling VueRouter
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', component: Landingpage },
    {path: '/signup', component: Signup },
    {path: '/signin', component: Signin },
    {path: '/mainfeed', component: Mainfeed },
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
