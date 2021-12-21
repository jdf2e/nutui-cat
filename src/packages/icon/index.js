import Icon from './index.vue';
// import './index.scss';

Icon.install = function(Vue) {
  Vue.component('NutIcon', Icon);
};

export default Icon;