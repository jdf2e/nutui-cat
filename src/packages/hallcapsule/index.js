import Hallcapsule from './index.vue';
import './index.scss';

Hallcapsule.install = function(Vue) {
  Vue.component('nutcat-Hallcapsule', Hallcapsule);
};

export default Hallcapsule;