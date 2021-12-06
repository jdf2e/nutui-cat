import Bottom from './index.vue';
import './index.scss';

Bottom.install = function(Vue) {
  Vue.component('nutcat-bottom', Bottom);
};

export default Bottom;