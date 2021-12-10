import NutTasklist from './index.vue';
import './index.scss';

NutTasklist.install = function(Vue) {
  Vue.component('NutTasklist', NutTasklist);
};

export default NutTasklist;