import NutLovebeans from './index.vue';
import './index.scss';

NutLovebeans.install = function(Vue) {
  Vue.component('NutLovebeanss', NutLovebeans);
};

export default NutLovebeans;