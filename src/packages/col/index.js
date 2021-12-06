import Col from './index.vue';
import './index.scss';

Col.install = function(Vue) {
  Vue.component('nutcat-col', Col);
};

export default Col;