import Gooditem from './index.vue';
import './index.scss';

Gooditem.install = function(Vue) {
  Vue.component('nutcat-gooditem', Gooditem);
};

export default Gooditem;