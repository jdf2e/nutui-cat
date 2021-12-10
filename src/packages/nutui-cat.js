// import { version } from '@/package.json';
import NutButton from './button/index.js';
import NutArcrolling from './arcrolling/index.js';
import NutBacktop from './backtop/index.js';
import NutBarrage from './barrage/index.js';
import NutBottom from './bottom/index.js';
import NutCart from './cart/index.js';
import NutCol from './col/index.js';
import NutCountdown from './countdown/index.js';
import NutCoupon from './coupon/index.js';
import NutFollowswipe from './followswipe/index.js';
import NutGooditem from './gooditem/index.js';
import NutHall from './hall/index.js';
import Hallcapsule from './hallcapsule/index.js';
import NutIcon from './icon/index.js';
import NutImage from './image/index.js';
import NutIdlegoods from './idlegoods/index.js';
import NutJtcoupon from './jtcoupon/index.js';
// import Layout from './layout/index.js';
import NutLive from './live/index.js';
// import Loading from './loading/index.js';
import NutLovebeans from './lovebeans/index.js';
import NutNav from './nav/index.js';
import NutNavleft from './navleft/index.js';
import NutNoticebar from './noticebar/index.vue';
import NutPrice from './price/index.js';
import NutProduct from './product/index.js';
import NutProductadvance from './productadvance/index.js';
import NutProductlimit from './productlimit/index.js';
import NutProgress from './progress/index.js';
import NutRank from './rank/index.js';
import NutRow from './row/index.js';
import NutSharecoupon from './sharecoupon/index.js';
import NutShop from './shop/index.vue';
import NutShowmore from './showmore/index.vue';
import NutStarbrand from './starbrand/index.vue';
import NutTab from './tab/index.vue';
import NutTag from './tag/index.vue';
import NutTasklist from './tasklist/index.vue';
import NutText from './text/index.js';
import NutVideo from './video/index.vue';

// 所有组件列表
const components = [NutButton, NutArcrolling, NutBacktop, NutBarrage, NutBottom, NutCart, NutCol, NutCountdown, NutCoupon, 
    NutFollowswipe, NutGooditem, NutHall, Hallcapsule, NutIcon, NutImage, NutIdlegoods, NutJtcoupon, NutLive, NutLovebeans, 
    NutNav, NutNavleft, NutNoticebar, NutPrice, NutProduct, NutProductadvance, NutProductlimit, NutProgress, NutRank, NutRow, NutSharecoupon, NutShop, NutShowmore, 
    NutStarbrand, NutTab, NutTag, NutTasklist, NutText, NutVideo];

    // const components = [NutButton, NutArcrolling, NutBacktop, NutBarrage, NutBottom, NutCart, NutCol, NutCountdown, NutCoupon, NutNav, NutNavleft];

// console.log({ components });

// 定义install方法，接收Vue作为参数
const install = function(Vue) {
  if (install.installed) return;
  // console.log("installed ----- all");
  // 遍历注册全局组件
  components.map((component) => {
    console.log("icomponent.name", component.name);
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
//   NutButton, NutArcrolling, NutBacktop, NutBarrage, NutBottom, NutCart, NutCol, NutCountdown, NutCoupon, 
//   NutFollowswipe, NutGooditem, NutHall, Hallcapsule, NutIcon, NutImage, NutIdlegoods, NutJtcoupon, Layout, NutLive, Loading, NutLovebeans, 
//   NutNav, NutNavleft, NutNoticebar, NutPrice, NutProduct, NutProductadvance, NutProductlimit, NutProgress, NutRank, NutRow, NutSharecoupon, NutShop, NutShowmore, 
//   NutStarbrand, NutTab, NutTag, NutTasklist, NutText, NutVideo};

export {
  install, // 导出的对象必须具备一个 install 方法
  NutButton, NutArcrolling, NutBacktop, NutBarrage, NutBottom, NutCart, NutCol, NutCountdown, NutCoupon, 
  NutFollowswipe, NutGooditem, NutHall, Hallcapsule, NutIcon, NutImage, NutIdlegoods, NutJtcoupon, NutLive, NutLovebeans, 
  NutNav, NutNavleft, NutNoticebar, NutPrice, NutProduct, NutProductadvance, NutProductlimit, NutProgress, NutRank, NutRow, NutSharecoupon, NutShop, NutShowmore, 
  NutStarbrand, NutTab, NutTag, NutTasklist, NutText, NutVideo
};

export default {
  install,
  NutButton, NutArcrolling, NutBacktop, NutBarrage, NutBottom, NutCart, NutCol, NutCountdown, NutCoupon,
  NutFollowswipe, NutGooditem, NutHall, Hallcapsule, NutIcon, NutImage, NutIdlegoods, NutJtcoupon, NutLive, NutLovebeans, 
  NutNav, NutNavleft, NutNoticebar, NutPrice, NutProduct, NutProductadvance, NutProductlimit, NutProgress, NutRank, NutRow, NutSharecoupon, NutShop, NutShowmore, 
  NutStarbrand, NutTab, NutTag, NutTasklist, NutText, NutVideo
  // 所有组件，必须具有install，才能使用Vue.use()
  // ...components
}