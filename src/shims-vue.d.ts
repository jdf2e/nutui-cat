declare module 'swiper/js/swiper.min.js';
declare module 'vue-danmaku';
// declare module 'vue-aplayer'
// declare module '*.vue' {
//   import Vue from 'vue'
//   export default Vue
// }

declare module '*.vue' {
  // import type { DefineComponent } from 'vue'
  const component: {}, {}, any
  export default component
}