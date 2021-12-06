import Icon from './index.vue';
import './index.scss';

Icon.install = function(Vue) {
  Vue.component('nutcat-icon', Icon);
};

export default Icon;