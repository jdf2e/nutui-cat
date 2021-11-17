<template>
  <div class="demo">
    <h2>基础用法</h2>
    <p class="type">单行</p>
    <div class="demo-text-row">
      <nutcat-text row="1">商品名称商品名称商品名称商品名称商品名称商品名称</nutcat-text>
    </div>
    <p class="type">多行</p>
    <div class="demo-text-row2">
      <nutcat-text row="2">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</nutcat-text>
    </div>
    <p class="type">带icon</p>
    <div class="demo-text-row2">
      <nutcat-text row="2">
        <nutcat-tag type="618">618</nutcat-tag>
        商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称
      </nutcat-text>
    </div>
    <h2>特殊类型</h2>
    <p class="type">京贴优惠券头部</p>
    <div class="demo-text-row2">
      <nutcat-text row="1" type="jtCoupon">
        头号京贴·跨店满减·可叠加
      </nutcat-text>
    </div>
    <p class="type">PLUS优惠券头部</p>
    <div class="demo-text-row2">
      <nutcat-text row="1" type="plusCoupon">
        <nutcat-tag type="plus-couponHd"></nutcat-tag>
        开通/续费PLUS得
      </nutcat-text>
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
