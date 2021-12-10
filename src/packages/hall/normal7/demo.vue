<template>
  <div class="demo">
    <h2>类型：normal-7</h2>
    <p class="type">适用场景：一行多个会场布局，上面是文字下面是图片。支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-hall">
      <NutRow type="flex" gutter="3">
        <nutcat-col :span="8" v-for="(item, index) in data" :key="index">
          <NutHall
            :data="[item, params]"
            imgWidth="57"
            imgHeight="57"
            bgColor="#820C00"
            col="3"
            type="normal-7"
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
          name: '送年礼',
          desc: '利益点利益点',
          pictureUrl:
            'https://img14.360buyimg.com/imagetools/jfs/t1/176226/22/18823/6108/60e7e90bEf67e7fe8/742b068cd54aaf66.png'
        },
        {
          name: '送年礼',
          desc: '利益点利益点',
          pictureUrl:
            'https://img14.360buyimg.com/imagetools/jfs/t1/176226/22/18823/6108/60e7e90bEf67e7fe8/742b068cd54aaf66.png'
        },
        {
          name: '送年礼',
          desc: '利益点利益点',
          pictureUrl:
            'https://img14.360buyimg.com/imagetools/jfs/t1/176226/22/18823/6108/60e7e90bEf67e7fe8/742b068cd54aaf66.png'
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
