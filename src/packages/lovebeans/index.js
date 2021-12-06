import Lovebeans from './index.vue';
import './index.scss';

Lovebeans.install = function(Vue) {
  Vue.component('nutcat-lovebeans', Lovebeans);
};

export default Lovebeans;