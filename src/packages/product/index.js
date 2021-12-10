import NutProduct from './index.vue';
import './index.scss';

NutProduct.install = function(Vue) {
  Vue.component('NutProduct', NutProduct);
};

export default NutProduct;