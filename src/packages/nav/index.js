import NutNav from './index.vue';
import './index.scss';

NutNav.install = function(Vue) {
  Vue.component('NutNav', NutNav);
};

export default NutNav;