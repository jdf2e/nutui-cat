// import { version } from '@/package.json';
import Button from './button/index.js';
import Arcrolling from './arcrolling/index.js';
import Backtop from './backtop/index.js';
import Barrage from './barrage/index.js';
import Bottom from './bottom/index.js';
import Cart from './cart/index.js';
import Col from './col/index.js';
import Countdown from './countdown/index.js';
import Coupon from './coupon/index.js';
import Followswipe from './followswipe/index.js';
import Gooditem from './gooditem/index.js';
import Hall from './hall/index.js';
// import Hallcapsule from './hallcapsule/index.js';
import Icon from './icon/index.js';
import Image from './image/index.js';
import Idlegoods from './idlegoods/index.js';
import Jtcoupon from './jtcoupon/index.js';
import Layout from './layout/index.js';
import Live from './live/index.js';
// import Loading from './loading/index.js';
import Lovebeans from './lovebeans/index.js';
import Nav from './nav/index.js';
import Navleft from './navleft/index.js';
import Price from './price/index.js';
import Product from './product/index.js';
import Productadvance from './productadvance/index.js';
import Productlimit from './productlimit/index.js';
import Progress from './progress/index.js';
import Rank from './rank/index.js';
import Row from './row/index.js';
import Sharecoupon from './sharecoupon/index.js';
import Shop from './shop/index.vue';
import Showmore from './showmore/index.vue';
import Starbrand from './starbrand/index.vue';
import Noticebar from './noticebar/index.vue';
import Tab from './tab/index.vue';
import Tag from './tag/index.vue';
import Tasklist from './tasklist/index.vue';
import Text from './text/index.js';
import Video from './video/index.vue';

// 所有组件列表
const components = [Button, Arcrolling, Backtop, Barrage, Bottom, Cart, Col, Countdown, Coupon, 
    Followswipe, Gooditem, Hall, Icon, Image, Idlegoods, Jtcoupon, Layout, Live, Lovebeans, 
    Nav, Navleft, Price, Product, Productadvance, Productlimit, Progress, Rank, Row, Sharecoupon, Shop, Showmore, 
    Starbrand, Noticebar, Tab, Tag, Tasklist, Text, Video];

    // const components = [Button, Arcrolling, Backtop, Barrage, Bottom, Cart, Col, Countdown, Coupon, Nav, Navleft];

// console.log({ components });

// 定义install方法，接收Vue作为参数
const install = function(Vue) {
  if (install.installed) return;
  // console.log("installed ----- all");
  // 遍历注册全局组件
  components.map((component) => {
    // console.log("icomponent.name", component.name);
    Vue.component(component.name, component);
  });
}
// 检测到Vue才执行，毕竟我们是基于Vue的
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// export {
//   install, // 导出的对象必须具备一个 install 方法
//   Button, Arcrolling, Backtop, Barrage, Bottom, Cart, Col, Countdown, Coupon, 
//   Followswipe, Gooditem, Hall, Hallcapsule, Icon, Image, Idlegoods, Jtcoupon, Layout, Live, Loading, Lovebeans, 
//   Nav, Navleft, Price, Product, Productadvance, Productlimit, Progress, Rank, Row, Sharecoupon, Shop, Showmore, 
//   Starbrand, Noticebar, Tab, Tag, Tasklist, Text, Video};

export {
  install, // 导出的对象必须具备一个 install 方法
  Button, Arcrolling, Backtop, Barrage, Bottom, Cart, Col, Countdown, Coupon, 
  Followswipe, Gooditem, Hall, Icon, Image, Idlegoods, Jtcoupon, Layout, Live, Lovebeans, 
  Nav, Navleft, Price, Product, Productadvance, Productlimit, Progress, Rank, Row, Sharecoupon, Shop, Showmore, 
  Starbrand, Noticebar, Tab, Tag, Tasklist, Text, Video
};

export default {
  install,
  Button, Arcrolling, Backtop, Barrage, Bottom, Cart, Col, Countdown, Coupon,
  Followswipe, Gooditem, Hall, Icon, Image, Idlegoods, Jtcoupon, Layout, Live, Lovebeans, 
  Nav, Navleft, Price, Product, Productadvance, Productlimit, Progress, Rank, Row, Sharecoupon, Shop, Showmore, 
  Starbrand, Noticebar, Tab, Tag, Tasklist, Text, Video
  // 所有组件，必须具有install，才能使用Vue.use()
  // ...components
}