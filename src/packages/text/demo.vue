<template>
  <div class="demo">
    <h2>基础用法</h2>
    <p class="type">单行</p>
    <div class="demo-text-row">
      <NutText row="1">商品名称商品名称商品名称商品名称商品名称商品名称</NutText>
    </div>
    <p class="type">多行</p>
    <div class="demo-text-row2">
      <NutText row="2">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</NutText>
    </div>
    <p class="type">带icon</p>
    <div class="demo-text-row2">
      <NutText row="2">
        <NutTag type="618">618</NutTag>
        商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称
      </NutText>
    </div>
    <h2>特殊类型</h2>
    <p class="type">京贴优惠券头部</p>
    <div class="demo-text-row2">
      <NutText row="1" type="jtCoupon">
        头号京贴·跨店满减·可叠加
      </NutText>
    </div>
    <p class="type">PLUS优惠券头部</p>
    <div class="demo-text-row2">
      <NutText row="1" type="plusCoupon">
        <NutTag type="plus-couponHd"></NutTag>
        开通/续费PLUS得
      </NutText>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('text');
export default createDemo({
});
</script>

<style lang="scss" scoped>
#app {
  .demo {
  }
}

</style>
