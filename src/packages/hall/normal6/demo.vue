<template>
  <div class="demo">
    <h2>类型：normal-6</h2>
    <p class="type">适用场景：一行多个会场布局，氛围图和内容区域上下布局。支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-hall">
      <NutRow type="flex" gutter="3">
        <nutcat-col :span="8" v-for="(item, index) in data" :key="index">
          <NutHall
            :data="[item, params]"
            imgWidth="117"
            imgHeight="105"
            src="https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png"
            name="会场名称"
            desc="满199减100"
            col="3"
            type="normal-6"
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
          name: '京东金融',
          desc: '年化收益5.79%',
          pictureUrl:
            'https://img11.360buyimg.com/imagetools/jfs/t1/175919/15/18891/90769/60e7c21dEc599b5f9/ba959baad7533732.png'
        },
        {
          name: '京东金融',
          desc: '年化收益5.79%',
          pictureUrl:
            'https://img11.360buyimg.com/imagetools/jfs/t1/175919/15/18891/90769/60e7c21dEc599b5f9/ba959baad7533732.png'
        },
        {
          name: '京东金融',
          desc: '年化收益5.79%',
          pictureUrl:
            'https://img11.360buyimg.com/imagetools/jfs/t1/175919/15/18891/90769/60e7c21dEc599b5f9/ba959baad7533732.png'
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
