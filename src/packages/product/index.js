import Product from './index.vue';
import './index.scss';

Product.install = function(Vue) {
  Vue.component('nutcat-product', Product);
};

export default Product;