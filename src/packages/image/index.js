import Image from './index.vue';
// import './index.scss';

Image.install = function(Vue) {
  Vue.component('NutImage', Image);
};

export default Image;