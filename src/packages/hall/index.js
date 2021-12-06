import Hall from './index.vue';
import './index.scss';

Hall.install = function(Vue) {
  Vue.component('nutcat-hall', Hall);
};

export default Hall;