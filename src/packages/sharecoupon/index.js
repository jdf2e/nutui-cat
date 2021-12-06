import Sharecoupon from './index.vue';
import './index.scss';

Sharecoupon.install = function(Vue) {
  Vue.component('nutcat-sharecoupon', Sharecoupon);
};

export default Sharecoupon;