<template>
  <div class="demo">
    <h2>类型：normal-4</h2>
    <p class="type">适用场景：一行二个会场布局，图片和内容区域左右布局。右边内容区域3行以上。</p>
    <div class="demo-hall">
      <nutcat-row type="flex" gutter="1">
        <nutcat-col :span="12" v-for="(item, index) in data1" :key="index">
          <nutcat-hall
            :data="[item, params]"
            descRow="2"
            col="2"
            type="normal-4"
          >
          </nutcat-hall>
        </nutcat-col>
      </nutcat-row>
    </div>
    <div class="demo-hall">
      <nutcat-row type="flex" gutter="3">
        <nutcat-col :span="12" v-for="(item, index) in data2" :key="index">
          <nutcat-hall
            :data="[item, params]"
            tag="arrow-go"
            nameColor="#fff"
            descColor="#fff"
            bgColor="#820C00"
            col="2"
            type="normal-4"
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
// import data from '../data.js';
export default createDemo({
  data() {
    return {
      data1: [
        {
          name: '品牌闪购',
          desc: '超值单品9.9元全场秒杀',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/179744/8/13403/25121/60e6e815E0ff48c81/eed1256ccd1fdf73.png'
        },
        {
          name: '品牌闪购',
          desc: '超值单品9.9元全场秒杀',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/179744/8/13403/25121/60e6e815E0ff48c81/eed1256ccd1fdf73.png'
        }
      ],
      data2: [
        {
          name: '红包雨互动',
          desc: '满199减100',
          pictureUrl:
            'https://img12.360buyimg.com/imagetools/jfs/t1/184366/12/13604/18481/60e6e839E0d7a3bfd/e242fa7889e7d39a.png'
        },
        {
          name: '红包雨互动',
          desc: '满199减100',
          pictureUrl:
            'https://img12.360buyimg.com/imagetools/jfs/t1/184366/12/13604/18481/60e6e839E0d7a3bfd/e242fa7889e7d39a.png'
        }
      ],
      params: {
        cImage: ['pictureUrl']
      },
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
