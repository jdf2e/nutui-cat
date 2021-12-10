import NutShop from './index.vue';
import './index.scss';

NutShop.install = function(Vue) {
  Vue.component('NutShop', NutShop);
};

export default NutShop;