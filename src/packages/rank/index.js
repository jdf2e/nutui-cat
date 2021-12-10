import NutRank from './index.vue';
import './index.scss';

NutRank.install = function(Vue) {
  Vue.component('NutRank', NutRank);
};

export default NutRank;