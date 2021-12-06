import Video from './index.vue';
import './index.scss';

Video.install = function(Vue) {
  Vue.component('nutcat-video', Video);
};

export default Video;