import Productadvance from './index.vue';
import './index.scss';

Productadvance.install = function(Vue) {
  Vue.component('nutcat-productadvance', Productadvance);
};

export default Productadvance;