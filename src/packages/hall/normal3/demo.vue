<template>
  <div class="demo">
    <h2>类型：normal-3</h2>
    <p class="type">适用场景：一行二个会场布局，图片和内容区域左右布局。标题和利益点均为一行。</p>
    <div class="demo-hall">
      <NutRow type="flex" gutter="2">
        <nutcat-col :span="12" v-for="(item, index) in data" :key="index">
          <NutHall
            :data="[item, params]"
            imgWidth="44"
            imgHeight="44"
            col="2"
            type="normal-3"
          >
          </NutHall>
        </nutcat-col>
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
          name: '笔记本电脑',
          desc: '满199减100',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/178323/16/13057/8574/60e65d04E65aa5608/76469bb0efd62b95.png'
        },
        {
          name: '笔记本电脑',
          desc: '满199减100',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/178323/16/13057/8574/60e65d04E65aa5608/76469bb0efd62b95.png'
        }
      ],
      params: {
        cName: ['name'],
        cImage: ['pictureUrl'],
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
