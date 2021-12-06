import Tasklist from './index.vue';
import './index.scss';

Tasklist.install = function(Vue) {
  Vue.component('nutcat-tasklist', Tasklist);
};

export default Tasklist;