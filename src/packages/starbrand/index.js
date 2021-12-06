import Starbrand from './index.vue';
import './index.scss';

Starbrand.install = function(Vue) {
  Vue.component('nutcat-starbrand', Starbrand);
};

export default Starbrand;