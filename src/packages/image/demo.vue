<template>
  <div class="demo">
    <h2>基础用法</h2>
    <!-- <p class="type">一行一-一行利益点</p> -->
    <div class="demo-image-row">
      <nutcat-image src="//img10.360buyimg.com/imagetools/jfs/t1/180975/16/12965/81810/60e3c271E6846510d/b957175211011d62.png"></nutcat-image>
    </div>
    <h2>开启裁剪功能</h2>
    <div class="demo-image-row">
      <nutcat-image
        src="//img14.360buyimg.com/imagetools/jfs/t1/136318/2/17914/253972/5fbcb355E73dd171e/7afebc86dec494e4.png"
        width="180"
        height="180"
        cut
      ></nutcat-image>
    </div>
    <h2>开启懒加载</h2>
    <div class="demo-image-row">
      <nutcat-image
        src="//img14.360buyimg.com/imagetools/jfs/t1/136318/2/17914/253972/5fbcb355E73dd171e/7afebc86dec494e4.png"
        radius="16"
        lazy
      ></nutcat-image>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('image');
export default createDemo({
  data() {
    return {
    };
  }
});
</script>

<style lang="scss" scoped>
#app {
  .demo {
  }
}
.demo-image-row {
  .nutcat-image {
    width: 200px;
  }
}
</style>
