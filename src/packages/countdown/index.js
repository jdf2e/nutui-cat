import Countdown from './index.vue';
import './index.scss';

Countdown.install = function(Vue) {
  Vue.component('nutcat-Countdown', Countdown);
};

export default Countdown;