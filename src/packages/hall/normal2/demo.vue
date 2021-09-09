<template>
  <div class="demo">
    <h2>类型：normal-2</h2>
    <p class="type">适用场景：一行一个会场布局，由文字+进入标签+图片组成。文字超一行出现省略号。</p>
    <div class="demo-hall">
      <nutcat-row>
        <nutcat-col :span="24" v-for="(item, index) in data" :key="index">
          <nutcat-hall
            :data="[item, params]"
            tag="arrow-full"
            imgWidth="90"
            imgHeight="44"
            bgColor="#820C00"
            col="1"
            type="normal-2"
          >
          </nutcat-hall>
        </nutcat-col>
      </nutcat-row>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('hall');
export default createDemo({
  data() {
    return {
      data: [
        {
          name: '京东美妆',
          desc: '全场满999减200',
          pictureUrl:
            'https://img11.360buyimg.com/imagetools/jfs/t1/176928/22/13163/23498/60e65cffE9eda1beb/5267b71a88705447.png'
        }
      ],
      params: {
        cImage: ['"https://img11.360buyimg.com/imagetools/jfs/t1/176928/22/13163/23498/60e65cffE9eda1beb/5267b71a88705447.png"']
      }
    };
  },
  mounted() {
  }
});
</script>

<style lang="scss" scoped>
#app {
  .demo {
    padding-left: 9px;
    padding-right: 9px;
  }
  .demo-hall {
    margin-bottom: 5px;
  }
}
</style>
