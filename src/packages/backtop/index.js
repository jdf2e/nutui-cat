import NutBacktop from './index.vue';
import './index.scss';

NutBacktop.install = function(Vue) {
  Vue.component('NutBacktop', NutBacktop);
};

export default NutBacktop;