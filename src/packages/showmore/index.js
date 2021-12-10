import NutShowmore from './index.vue';
import './index.scss';

NutShowmore.install = function(Vue) {
  Vue.component('NutShowmore', NutShowmore);
};

export default NutShowmore;