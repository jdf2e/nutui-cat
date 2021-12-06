import Idlegoods from './index.vue';
import './index.scss';

Idlegoods.install = function(Vue) {
  Vue.component('nutcat-idlegoods', Idlegoods);
};

export default Idlegoods;