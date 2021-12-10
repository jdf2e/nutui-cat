<template>
  <div class="demo" id="page1">
    <h2>基础用法</h2>
    <div class="floor-box">
      <div class="nav-floor">今日优惠</div>
      <div class="nav-floor">热门活动</div>
      <div class="nav-floor">拼购</div>
      <div class="nav-floor">大牌服饰</div>
      <div class="nav-floor">猜你想看</div>
      <div class="nav-floor">6F</div>
      <div class="nav-floor">7F</div>
      <div class="nav-floor">8F</div>
      <div class="nav-floor">9F</div>
      <div class="nav-floor">10F</div>
    </div>
    <NutBacktop @click="handleClick" el-id="page1">
      <nut-icon size="19px" class="nut-backtop-main" name="top"></nut-icon>
    </NutBacktop>
  </div>
</template>
  
<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('backtop');
export default createDemo({
  props: {},
  data() {
    return {
      scrollEl: window,
    };
  },
  methods: {
    handleClick() {
      console.log("触发回到顶部按钮")
    }
  }
});
</script>

<style lang="scss" scoped>
#app .demo {
  // overflow-x: visible;
  // overflow-y: visible;
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
  