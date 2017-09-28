// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from './store';
import VueCookie from 'vue-cookie';


/**
 * 注入icons
 */
import Icon from './components/Icon'; //引入icon组件
import './icons/index.js';   //引入icon内容文件
Vue.component('icon',Icon);   //注册icon


Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.use(Mint);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
