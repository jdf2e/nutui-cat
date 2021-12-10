import NutText from './index.vue';
import './index.scss';

console.log('NutText11111',NutText)

NutText.install = function(Vue) {
  Vue.component('NutText', NutText);
};

export default NutText;