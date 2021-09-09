<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <span slot="title">基础样式</span>
      <span slot="desc">
        <nutcat-button type="red-line">标签</nutcat-button>
      </span>
    </nut-cell>
    <h2>样式风格</h2>
    <nut-cell>
      <span slot="title">空心样式</span>
      <span slot="desc">
        <nutcat-button radius borderColor="#E8220E" color="#E8220E">满199减100</nutcat-button>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">圆角样式</span>
      <span slot="desc">
        <nutcat-button radius bgColor="#E8220E">商品名称</nutcat-button>
      </span>
    </nut-cell>
    <!-- <nut-cell>
      <span slot="title">自定义图标</span>
      <span slot="desc">
        <nutcat-button radius bgColor="#E8220E" beforeIcon="arrow-normal">商品名称</nutcat-button>
      </span>
    </nut-cell> -->
    <nut-cell>
      <span slot="title">自定义图标</span>
      <span slot="desc">
        <nutcat-button radius bgColor="#E8220E" afterIcon="arrow-normal">商品名称</nutcat-button>
      </span>
    </nut-cell>
    <h2>自定义颜色</h2>
    <nut-cell>
      <span slot="title">背景颜色</span>
      <span slot="desc">
        <nutcat-button radius bgColor="rgb(114, 50, 221)">商品名称</nutcat-button>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">文字颜色</span>
      <span slot="desc">
        <nutcat-button radius bgColor="rgb(255, 225, 225)" color="rgb(173, 0, 0)">商品名称</nutcat-button>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">空心颜色</span>
      <span slot="desc">
        <nutcat-button radius borderColor="rgb(114, 50, 221)" color="rgb(114, 50, 221)">商品名称</nutcat-button>
      </span>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('button');
export default createDemo({
});
</script>

<style lang="scss" scoped>
#app {
  .demo {
  }
}
.demo-button-row {
}
.nutcat-button-rank-1 {
  margin-left: 10px;
}
.nutcat-button-rank-2 {
  margin-left: 10px;
}
</style>
