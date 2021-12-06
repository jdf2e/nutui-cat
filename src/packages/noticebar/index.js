import Noticebar from './index.vue';
import './index.scss';

Noticebar.install = function(Vue) {
  Vue.component('nutcat-noticebar', Noticebar);
};

export default Noticebar;