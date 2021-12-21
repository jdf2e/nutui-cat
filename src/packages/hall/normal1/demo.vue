<template>
  <div class="demo">
    <h2>类型：normal-1</h2>
    <p class="type">适用场景：一行一个会场布局，由文字+进入标签+图片组成。文字超一行出现省略号。</p>
    <div class="demo-hall">
      <NutRow>
        <NutCol :span="24" v-for="(item, index) in data" :key="index">
          <NutHall
            :data="[item, params]"
            tag="arrow-go"
            imgWidth="90"
            imgHeight="44"
            bgColor="#820C00"
            col="1"
            type="normal-1"
          >
          </NutHall>
        </NutCol>
      </NutRow>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('hall');
// import data from '../data.js';
export default createDemo({
  data() {
    return {
      data: [
        {
          name: 'PLUS入口运营文案',
          pictureUrl:
            'https://img11.360buyimg.com/imagetools/jfs/t1/176928/22/13163/23498/60e65cffE9eda1beb/5267b71a88705447.png'
        }
      ],
      params: {
        cName: ['name'],
        cImage: ['"https://img11.360buyimg.com/imagetools/jfs/t1/176928/22/13163/23498/60e65cffE9eda1beb/5267b71a88705447.png"'],
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
