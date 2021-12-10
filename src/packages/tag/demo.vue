<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <span slot="title">基础样式</span>
      <span slot="desc">
        <NutTag type="red">标签</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">red-line</span>
      <span slot="desc">
        <NutTag type="red-line">标签</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">red-gradient</span>
      <span slot="desc">
        <NutTag type="red-gradient">正在秒杀</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">red-light</span>
      <span slot="desc">
        <NutTag type="red-light">其他利益点</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">red-pink</span>
      <span slot="desc">
        <NutTag type="red-pink">其他利益点</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">red-light</span>
      <span slot="desc">
        <NutTag type="red-light">
          <span slot="preSlot">满减</span>
          其他利益点
        </NutTag>
      </span>
    </nut-cell>
    <h2>样式风格</h2>
    <nut-cell>
      <span slot="title">空心样式</span>
      <span slot="desc">
        <NutTag radius borderColor="#E8220E" color="#E8220E">满199减100</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">圆角样式</span>
      <span slot="desc">
        <NutTag radius bgColor="#E8220E">商品名称</NutTag>
      </span>
    </nut-cell>
    <h2>自定义颜色</h2>
    <nut-cell>
      <span slot="title">背景颜色</span>
      <span slot="desc">
        <NutTag radius bgColor="rgb(114, 50, 221)">商品名称</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">文字颜色</span>
      <span slot="desc">
        <NutTag radius bgColor="rgb(255, 225, 225)" color="rgb(173, 0, 0)">商品名称</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">边框颜色</span>
      <span slot="desc">
        <NutTag radius borderColor="rgb(114, 50, 221)" color="rgb(114, 50, 221)">商品名称</NutTag>
      </span>
    </nut-cell>
    <h2>类型</h2>
    <nut-cell>
      <span slot="title">plus 专享</span>
      <span slot="desc">
        <NutTag type="plus"></NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">plus优惠券标签</span>
      <span slot="desc">
        <NutTag type="plus-coupon"></NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">plus优惠券头部标签</span>
      <span slot="desc">
        <NutTag type="plus-couponHd"></NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">plus 价格</span>
      <span slot="desc">
        <NutTag type="plus-price"></NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">新人价</span>
      <span slot="desc">
        <NutTag type="new-price"></NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">学生价</span>
      <span slot="desc">
        <NutTag type="student-price"></NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">618</span>
      <span slot="desc">
        <NutTag type="618">618</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">品质认证</span>
      <span slot="desc">
        <NutTag type="pin"></NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">视频时间</span>
      <span slot="desc">
        <NutTag type="video-time">00:00</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">直播中</span>
      <span slot="desc">
        <NutTag type="live-on">直播中</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">预告</span>
      <span slot="desc">
        <NutTag type="live-pre">预告</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">回放</span>
      <span slot="desc">
        <NutTag type="live-back">回放</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">火爆-红红火火</span>
      <span slot="desc">
        <NutTag type="fire-1">某某商品top款</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">火爆-粉粉的</span>
      <span slot="desc">
        <NutTag type="fire-2">某某商品top款</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">rank-1</span>
      <span slot="desc" style="display: flex;">
        <NutTag type="rank-1" class="top1">1</NutTag>
        <NutTag type="rank-1" class="top2">2</NutTag>
        <NutTag type="rank-1" class="top3">3</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">rank-2</span>
      <span slot="desc" style="display: flex;">
        <NutTag type="rank-2" class="top1">1</NutTag>
        <NutTag type="rank-2" class="top2">2</NutTag>
        <NutTag type="rank-2" class="top3">3</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">GO</span>
      <span slot="desc" style="display: flex;">
        <NutTag type="go">GO</NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">rank-hot</span>
      <span slot="desc" style="display: flex;">
        <NutTag type="rank-hot"></NutTag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">lbs</span>
      <span slot="desc" style="display: flex;">
        <NutTag type="lbs">1.4km</NutTag>
      </span>
    </nut-cell>
    <!-- <nut-cell>
      <span slot="title">enter</span>
      <span slot="desc" style="display: flex;">
        <NutTag radius="30px" color="#fff" bgColor="rgb(0, 0, 0)" afterIcon="arrow-full">进入</NutTag>
      </span>
    </nut-cell> -->
    <!-- <nut-cell>
      <span slot="title">排行</span>
      <span slot="desc" style="display: flex;">
        <NutTag type="rank-2" class="top1"></NutTag>
        <NutTag type="rank-2" class="top2"></NutTag>
        <NutTag type="rank-2" class="top3"></NutTag>
      </span>
    </nut-cell> -->
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('tag');
export default createDemo({
});
</script>

<style lang="scss" scoped>
#app {
  .demo {
  }
}
.demo-tag-row {
}
.nutcat-tag-rank-1 {
  margin-left: 10px;
}
.nutcat-tag-rank-2 {
  margin-left: 10px;
}
</style>
