import Progress from './index.vue';
import './index.scss';

Progress.install = function(Vue) {
  Vue.component('nutcat-progress', Progress);
};

export default Progress;