import Button from './index.vue';
import './index.scss';

Button.install = function(Vue) {
  Vue.component('nutcat-button', Button);
};

export default Button;