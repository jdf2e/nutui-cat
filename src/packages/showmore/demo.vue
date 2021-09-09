<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nutcat-showmore></nutcat-showmore>
    <h2>自定义背景颜色</h2>
    <nutcat-showmore background="#d87125"></nutcat-showmore>
    <h2>自定义选择icon以及颜色</h2>
    <nutcat-showmore iconName="coupon" iconColor="black"></nutcat-showmore>
    <h2>自定义文字</h2>
    <nutcat-showmore text="自定义文字" @moreClick="changeclick"></nutcat-showmore>
      <h2>添加点击事件</h2>
    <nutcat-showmore @moreClick="changeclick"></nutcat-showmore>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('showmore');
export default createDemo({
  props: {},
  data() {
    return {};
  },
  methods: {
    changeclick() {
      console.log(12);
    }
  }
});
</script>

<style lang="scss" scoped>
/deep/.nutcat-showmore-page {
  .showmore-text {
    color: white;
  }
  .nutcat-icon-arrow-down {
    height: 10px;
  }
  .nutcat-icon-coupon {
    height: 12px;
  }
}
</style>
