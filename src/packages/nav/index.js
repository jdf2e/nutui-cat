import Nav from './index.vue';
import './index.scss';

Nav.install = function(Vue) {
  Vue.component('nutcat-nav', Nav);
};

export default Nav;