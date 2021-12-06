import Price from './index.vue';
import './index.scss';

Price.install = function(Vue) {
  Vue.component('nutcat-price', Price);
};

export default Price;