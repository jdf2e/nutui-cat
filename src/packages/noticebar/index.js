import NutNoticebar from './index.vue';
import './index.scss';

NutNoticebar.install = function(Vue) {
  Vue.component('NutNoticebar', NutNoticebar);
};

export default NutNoticebar;