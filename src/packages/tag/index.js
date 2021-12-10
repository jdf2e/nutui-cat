import Tag from './index.vue';
import './index.scss';

Tag.install = function(Vue) {
  Vue.component('NutTag', Tag);
};

export default Tag;