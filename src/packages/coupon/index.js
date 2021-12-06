import Coupon from './index.vue';
import './index.scss';

Coupon.install = function(Vue) {
  Vue.component('nutcat-coupon', Coupon);
};

export default Coupon;