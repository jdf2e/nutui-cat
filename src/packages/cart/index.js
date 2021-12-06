import Cart from './index.vue';
import './index.scss';

Cart.install = function(Vue) {
  Vue.component('nutcat-cart', Cart);
};

export default Cart;