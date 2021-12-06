import Live from './index.vue';

Live.install = function(Vue) {
  Vue.component('nutcat-live', Live);
};

export default Live;