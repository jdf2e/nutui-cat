import NutButton from './index.vue';
// import './index.scss';

NutButton.install = function(Vue) {
  Vue.component('NutButton', NutButton);
};

export default NutButton;