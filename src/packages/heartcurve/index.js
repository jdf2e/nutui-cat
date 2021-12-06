import Heartcurve from './index.vue';
import './index.scss';

Heartcurve.install = function(Vue) {
  Vue.component('nutcat-heartcurve', Heartcurve);
};

export default Heartcurve;