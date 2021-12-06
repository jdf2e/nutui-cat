import Row from './index.vue';
import './index.scss';

Row.install = function(Vue) {
  Vue.component('nutcat-row', Row);
};

export default Row;