import Followswipe from './index.vue';
import './index.scss';

Followswipe.install = function(Vue) {
  Vue.component('nutcat-followswipe', Followswipe);
};

export default Followswipe;