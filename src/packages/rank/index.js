import Rank from './index.vue';
import './index.scss';

Rank.install = function(Vue) {
  Vue.component('nutcat-rank', Rank);
};

export default Rank;