// import { version } from '@/package.json';
import Button from './button/index.vue';
import Arcrolling from './arcrolling/index.vue';
import Backtop from './backtop/index.vue';
import Barrage from './barrage/index.vue';
import Bottom from './bottom/index.vue';
import Cart from './cart/index.vue';
import Col from './col/index.vue';
import Countdown from './countdown/index.vue';
import Coupon from './coupon/index.vue';
import Followswipe from './followswipe/index.vue';
import Gooditem from './gooditem/index.vue';
import Hall from './hall/index.vue';
import Hallcapsule from './hallcapsule/index.vue';
import Icon from './icon/index.vue';
import Image from './image/index.vue';
import Idlegoods from './idlegoods/index.vue';
import Jtcoupon from './jtcoupon/index.vue';
import Layout from './layout/index.vue';
import Live from './live/index.vue';
import Loading from './loading/index.js';
import Lovebeans from './lovebeans/index.vue';
import Nav from './nav/index.vue';
import Navleft from './navleft/index.vue';
import Price from './price/index.vue';
import Product from './product/index.vue';
import Productadvance from './productadvance/index.vue';
import Productlimit from './productlimit/index.vue';
import Progress from './progress/index.vue';
import Rank from './rank/index.vue';
import Row from './row/index.vue';
import Sharecoupon from './sharecoupon/index.vue';
import Shop from './shop/index.vue';
import Showmore from './showmore/index.vue';
import Starbrand from './starbrand/index.vue';
import Noticebar from './noticebar/index.vue';
import Tab from './tab/index.vue';
import Tag from './tag/index.vue';
import Tasklist from './tasklist/index.vue';
import Text from './text/index.vue';
import Video from './video/index.vue';

// 所有组件列表
const packages = [Button, Arcrolling, Backtop, Barrage, Bottom, Cart, Col, Countdown, Coupon, 
    Followswipe, Gooditem, Hall, Hallcapsule, Icon, Image, Idlegoods, Jtcoupon, Layout, Live, Loading, Lovebeans, 
    Nav, Navleft, Price, Product, Productadvance, Productlimit, Progress, Rank, Row, Sharecoupon, Shop, Showmore, 
    Starbrand, Noticebar, Tab, Tag, Tasklist, Text, Video]

const components = {};

// 定义install方法，接收Vue作为参数
// const install = function(Vue) {
//   // 遍历注册所有组件
//   components.map(component => Vue.use(component))
// }

const install = function(Vue) {
  packages.forEach((item) => {
    // if (item.install) {
    //   Vue.use(item);
    // }
    // else if (item.name) {
    //   Vue.component(item.name, item);
    // }
    Vue.component(item.name, item);
  });
}
// 检测到Vue才执行，毕竟我们是基于Vue的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {Button, Arcrolling, Backtop, Barrage, Bottom, Cart, Col, Countdown, Coupon, 
  Followswipe, Gooditem, Hall, Hallcapsule, Icon, Image, Idlegoods, Jtcoupon, Layout, Live, Loading, Lovebeans, 
  Nav, Navleft, Price, Product, Productadvance, Productlimit, Progress, Rank, Row, Sharecoupon, Shop, Showmore, 
  Starbrand, Noticebar, Tab, Tag, Tasklist, Text, Video};
export default {
  // version,
  install,
  // 所有组件，必须具有install，才能使用Vue.use()
  // ...components
}