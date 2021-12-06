import Backtop from './index.vue';
import './index.scss';

Backtop.install = function(Vue) {
  Vue.component('nutcat-backtop', Backtop);
};

export default Backtop;