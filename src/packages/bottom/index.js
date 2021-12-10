import NutBottom from './index.vue';
import './index.scss';

NutBottom.install = function(Vue) {
  Vue.component('NutBottom', NutBottom);
};

export default NutBottom;