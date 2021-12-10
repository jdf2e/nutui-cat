import NutProgress from './index.vue';
import './index.scss';

NutProgress.install = function(Vue) {
  Vue.component('NutProgress', NutProgress);
};

export default NutProgress;