import NutPrice from './index.vue';
import './index.scss';

NutPrice.install = function(Vue) {
  Vue.component('NutPrice', NutPrice);
};

export default NutPrice;