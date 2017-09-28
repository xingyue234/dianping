// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
//import 'muse-ui/dist/theme-carbon.css'; // 使用 carbon 主题
import App from './App';
import router from './router';
import store from './store';
import VueAxios from 'vue-axios';
import axios from 'axios';


Vue.use(MuseUI);
Vue.use(VueAxios,axios); //axios是配置


Vue.config.productionTip = false;

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
//console.log(app);