import Productlimit from './index.vue';
import './index.scss';

Productlimit.install = function(Vue) {
  Vue.component('nutcat-Productlimit', Productlimit);
};

export default Productlimit;