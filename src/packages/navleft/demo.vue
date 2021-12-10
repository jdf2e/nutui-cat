<template>
  <div class="demo">
    <h2>基础用法</h2>
    <NutNav
      type="left"
      :options="stickyOptions"
      @click="clickHandler"
      @changed="onchange"
      @expand="expand"
      @sendReq="sendReq"
    />
    <div class="floor-box">
      <div class="nav-floor">今日优惠</div>
      <div class="nav-floor">热门活动</div>
      <div class="nav-floor">拼购</div>
      <div class="nav-floor">大牌服饰</div>
      <div class="nav-floor">猜你想看</div>
      <div class="nav-floor">6F</div>
      <div class="nav-floor">7F</div>
      <div class="nav-floor">8F</div>
    </div>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('navleft');
export default createDemo({
  data() {
    return {
      // data: ['今日优惠','猜你想看','热门活动','拼购','热门活动'],
      stickyOptions: {
        navs: [
          '今日优惠',
          '热门活动',
          '拼购',
          '大牌服饰',
          '猜你想看',
          '6F',
          '7F'
        ],
        sectionSelector: 'nav-floor',
        stickyTop: 57,
        showLbs: true,
        navWidth: '51px',
        navHeight: 'auto',
        navItemHeight: '58px',
        bgColor: '#E8220E', // 导航栏背景色
        color: '#fff', // 导航栏字体颜色
        activeColor: '#262626', // 导航栏选中字体颜色
        activeBgColor: '#FDEDEC' // 导航栏选中背景颜色
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initData();
    });
  },
  methods: {
    initData() {
      // this.stickyOptions.navs = this.data;
      // this.stickyOptions.stickyTop = this.xHeight - 1
      // console.log('this.xHeight', this.xHeight)
      console.log('this.stickyOptions', this.stickyOptions);
    },
    onchange(index) {
      // console.log('当前index1', index);
    },
    sendReq(index) {},
    expand(state) {},
    clickHandler(index) {
      // console.log('当前index2', index);
    }
  }
});
</script>

<style lang="scss" scoped>
#app {
  .demo {
    padding: 0;
    // padding-right: 9px;
    overflow-x: visible;
    overflow-y: visible;
  }
}
.nav-floor {
  height: 350px;
  margin-bottom: 20px;
  line-height: 350px;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  &:nth-child(4n + 1) {
    color: #ff004a;
    background-color: #fecedc;
  }
  &:nth-child(4n + 2) {
    color: #b86e00;
    background-color: #fcd59b;
  }
  &:nth-child(4n + 3) {
    color: #2710ff;
    background-color: #bcc0f9;
  }
  &:nth-child(4n + 4) {
    color: #82581b;
    background-color: #ffc695;
  }
}
</style>
