import Hall from './index.vue';
// import './index.scss';

Hall.install = function(Vue) {
  Vue.component('NutHall', Hall);
};

export default Hall;