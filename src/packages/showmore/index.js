import Showmore from './index.vue';
import './index.scss';

Showmore.install = function(Vue) {
  Vue.component('nutcat-showmore', Showmore);
};

export default Showmore;