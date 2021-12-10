import NutCol from './index.vue';
import './index.scss';

NutCol.install = function(Vue) {
  Vue.component('NutCol', NutCol);
};

export default NutCol;