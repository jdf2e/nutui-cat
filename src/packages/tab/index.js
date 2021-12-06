import Tab from './index.vue';
import './index.scss';

Tab.install = function(Vue) {
  Vue.component('nutcat-tab', Tab);
};

export default Tab;