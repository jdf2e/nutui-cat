import Layout from './index.vue';

Layout.install = function(Vue) {
  Vue.component('nutcat-layout', Layout);
};

export default Layout;