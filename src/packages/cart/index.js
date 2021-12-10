import NutCart from './index.vue';
import './index.scss';

NutCart.install = function(Vue) {
  Vue.component('NutCart', NutCart);
};

export default NutCart;