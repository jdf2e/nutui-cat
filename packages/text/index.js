import Text from './index.vue';
import './index.scss';

Text.install = function(Vue) {
  Vue.component(Text.name, Text);
};

export default Text;