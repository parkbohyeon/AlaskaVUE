import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index';
import { store } from './store/store';
import {LogUtil} from "./utils/logUtil";
import {CssAPI} from "./api/cssApi";
import {WebcAPI} from "./api/webcApi";


Vue.config.productionTip = false;
window.axios = require('axios');
window.App = {};
window.App.api = {};
window.App.api.css = new CssAPI();
window.App.api.webc = new WebcAPI();
window.logUtil = new LogUtil(true, 3, "SAMPLE");

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');



