import NutVideo from './index.vue';
import './index.scss';

NutVideo.install = function(Vue) {
  Vue.component('NutVideo', NutVideo);
};

export default NutVideo;