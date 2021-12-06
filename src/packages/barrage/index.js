import Barrage from './index.vue';
import './index.scss';

Barrage.install = function(Vue) {
  Vue.component('nutcat-barrage', Barrage);
};

export default Barrage;