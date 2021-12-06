import Shop from './index.vue';
import './index.scss';

Shop.install = function(Vue) {
  Vue.component('nutcat-shop', Shop);
};

export default Shop;