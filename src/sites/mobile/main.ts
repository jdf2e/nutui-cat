import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyload from 'vue-lazyload';
import NutUI_CAT from '@/nutui-cat';
import '@/sites/assets/styles/reset.scss';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import date from '@/utils/date';
// import {connectData} from '@/utils/connect';
import '@/packages/utils/touchEmulator';

Vue.prototype.$get = date.get;
// Vue.prototype.$connect = connectData;

Vue.use(NutUI_CAT)
  .use(NutUI)
  .use(VueLazyload, {
    lazyComponent: true,
    preLoad: 1,
    attempt: 1,
    loading:
      '//img13.360buyimg.com/imagetools/jfs/t1/10984/3/8320/7862/5c34009cE52c55a13/4c2804c7a0b43a8c.png'
  });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
