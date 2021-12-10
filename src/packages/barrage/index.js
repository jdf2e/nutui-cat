import NutBarrage from './index.vue';
import './index.scss';

NutBarrage.install = function(Vue) {
  Vue.component('NutBarrage', NutBarrage);
};

export default NutBarrage;