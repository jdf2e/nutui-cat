import Image from './index.vue';
import './index.scss';

Image.install = function(Vue) {
  Vue.component('nutcat-image', Image);
};

export default Image;