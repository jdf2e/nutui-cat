<template>
  <div class="demo">
    <h2>类型：normal-8</h2>
    <p class="type">适用场景：一行多个会场布局，上面是文字下面是图片。文字内容区域增加了 `bgTopColor`、`bgTopUrl` 设置背景颜色和图片，支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-hall">
      <nutcat-row type="flex" gutter="1">
        <nutcat-col :span="6" v-for="(item, index) in data" :key="index">
          <nutcat-hall
            :data="[item, params]"
            imgWidth="65"
            imgHeight="65"
            tag="arrow-go"
            bgTopColor="#820C00"
            col="4"
            type="normal-8"
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
      data: [
        {
          name: '送年礼',
          desc: '满199减100',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/183420/22/13214/10541/60e8138cEb3e894b1/04c71eceafa9608d.png'
        },
        {
          name: '送年礼',
          desc: '满199减100',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/183420/22/13214/10541/60e8138cEb3e894b1/04c71eceafa9608d.png'
        },
        {
          name: '送年礼',
          desc: '满199减100',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/183420/22/13214/10541/60e8138cEb3e894b1/04c71eceafa9608d.png'
        },
        {
          name: '送年礼',
          desc: '满199减100',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/183420/22/13214/10541/60e8138cEb3e894b1/04c71eceafa9608d.png'
        }
      ],
      params: {
        cImage: ['pictureUrl']
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
