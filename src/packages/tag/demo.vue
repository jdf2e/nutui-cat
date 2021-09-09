<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <span slot="title">基础样式</span>
      <span slot="desc">
        <nutcat-tag type="red">标签</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">red-line</span>
      <span slot="desc">
        <nutcat-tag type="red-line">标签</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">red-gradient</span>
      <span slot="desc">
        <nutcat-tag type="red-gradient">正在秒杀</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">red-light</span>
      <span slot="desc">
        <nutcat-tag type="red-light">其他利益点</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">red-pink</span>
      <span slot="desc">
        <nutcat-tag type="red-pink">其他利益点</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">red-light</span>
      <span slot="desc">
        <nutcat-tag type="red-light">
          <span slot="preSlot">满减</span>
          其他利益点
        </nutcat-tag>
      </span>
    </nut-cell>
    <h2>样式风格</h2>
    <nut-cell>
      <span slot="title">空心样式</span>
      <span slot="desc">
        <nutcat-tag radius borderColor="#E8220E" color="#E8220E">满199减100</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">圆角样式</span>
      <span slot="desc">
        <nutcat-tag radius bgColor="#E8220E">商品名称</nutcat-tag>
      </span>
    </nut-cell>
    <h2>自定义颜色</h2>
    <nut-cell>
      <span slot="title">背景颜色</span>
      <span slot="desc">
        <nutcat-tag radius bgColor="rgb(114, 50, 221)">商品名称</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">文字颜色</span>
      <span slot="desc">
        <nutcat-tag radius bgColor="rgb(255, 225, 225)" color="rgb(173, 0, 0)">商品名称</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">边框颜色</span>
      <span slot="desc">
        <nutcat-tag radius borderColor="rgb(114, 50, 221)" color="rgb(114, 50, 221)">商品名称</nutcat-tag>
      </span>
    </nut-cell>
    <h2>类型</h2>
    <nut-cell>
      <span slot="title">plus 专享</span>
      <span slot="desc">
        <nutcat-tag type="plus"></nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">plus优惠券标签</span>
      <span slot="desc">
        <nutcat-tag type="plus-coupon"></nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">plus优惠券头部标签</span>
      <span slot="desc">
        <nutcat-tag type="plus-couponHd"></nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">plus 价格</span>
      <span slot="desc">
        <nutcat-tag type="plus-price"></nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">新人价</span>
      <span slot="desc">
        <nutcat-tag type="new-price"></nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">学生价</span>
      <span slot="desc">
        <nutcat-tag type="student-price"></nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">618</span>
      <span slot="desc">
        <nutcat-tag type="618">618</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">品质认证</span>
      <span slot="desc">
        <nutcat-tag type="pin"></nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">视频时间</span>
      <span slot="desc">
        <nutcat-tag type="video-time">00:00</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">直播中</span>
      <span slot="desc">
        <nutcat-tag type="live-on">直播中</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">预告</span>
      <span slot="desc">
        <nutcat-tag type="live-pre">预告</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">回放</span>
      <span slot="desc">
        <nutcat-tag type="live-back">回放</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">火爆-红红火火</span>
      <span slot="desc">
        <nutcat-tag type="fire-1">某某商品top款</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">火爆-粉粉的</span>
      <span slot="desc">
        <nutcat-tag type="fire-2">某某商品top款</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">rank-1</span>
      <span slot="desc" style="display: flex;">
        <nutcat-tag type="rank-1" class="top1">1</nutcat-tag>
        <nutcat-tag type="rank-1" class="top2">2</nutcat-tag>
        <nutcat-tag type="rank-1" class="top3">3</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">rank-2</span>
      <span slot="desc" style="display: flex;">
        <nutcat-tag type="rank-2" class="top1">1</nutcat-tag>
        <nutcat-tag type="rank-2" class="top2">2</nutcat-tag>
        <nutcat-tag type="rank-2" class="top3">3</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">GO</span>
      <span slot="desc" style="display: flex;">
        <nutcat-tag type="go">GO</nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">rank-hot</span>
      <span slot="desc" style="display: flex;">
        <nutcat-tag type="rank-hot"></nutcat-tag>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">lbs</span>
      <span slot="desc" style="display: flex;">
        <nutcat-tag type="lbs">1.4km</nutcat-tag>
      </span>
    </nut-cell>
    <!-- <nut-cell>
      <span slot="title">enter</span>
      <span slot="desc" style="display: flex;">
        <nutcat-tag radius="30px" color="#fff" bgColor="rgb(0, 0, 0)" afterIcon="arrow-full">进入</nutcat-tag>
      </span>
    </nut-cell> -->
    <!-- <nut-cell>
      <span slot="title">排行</span>
      <span slot="desc" style="display: flex;">
        <nutcat-tag type="rank-2" class="top1"></nutcat-tag>
        <nutcat-tag type="rank-2" class="top2"></nutcat-tag>
        <nutcat-tag type="rank-2" class="top3"></nutcat-tag>
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
