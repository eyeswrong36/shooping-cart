import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue'; 
import { routes } from './router/router';
import { store } from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/',
  routes,
  mode: 'history'
})


let vue_instance = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');