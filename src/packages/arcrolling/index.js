import Arcrolling from './index.vue';
import './index.scss';

Arcrolling.install = function(Vue) {
  Vue.component('nutcat-arcrolling', Arcrolling);
};

export default Arcrolling;