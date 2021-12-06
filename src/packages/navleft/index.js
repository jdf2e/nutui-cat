import Navleft from './index.vue';
import './index.scss';

Navleft.install = function(Vue) {
  Vue.component('nutcat-navleft', Navleft);
};

export default Navleft;