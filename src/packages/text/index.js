import NutText from './index.vue';
// import './index.scss';

NutText.install = function(Vue) {
  Vue.component('NutText', NutText);
};

export default NutText;