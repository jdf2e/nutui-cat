import Tag from './index.vue';
import './index.scss';

Tag.install = function(Vue) {
  Vue.component('nutcat-tag', Tag);
};

export default Tag;