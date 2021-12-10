import NutCountdown from './index.vue';
import './index.scss';

NutCountdown.install = function(Vue) {
  Vue.component('NutCountdown', NutCountdown);
};

export default NutCountdown;