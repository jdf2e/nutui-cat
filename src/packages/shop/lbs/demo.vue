<template>
  <div class="demo">
    <h2>类型：lbs</h2>
    <p class="type">适用场景：一行多个店铺布局，上下结构，适用于 lbs 场景。支持一行二个、一行三个、一行三个半、一行四个等。</p>
    <div class="demo-shop demo-s2">
      <NutRow scrollX type="flex" gutter="3">
        <NutCol :span="24" v-for="(item, index) in data" :key="index">
          <NutShop
            :data="[item, params]" 
            col="3" 
            type="lbs" 
          >
            <NutTag slot="tag" class="sub-tag" type="red-light"
            >满199减100</NutTag>
          </NutShop>
        </NutCol>
      </NutRow>
    </div>
  </div>
</template>

<script lang="ts">
// import { createComponent } from '@/utils/create';
// const { createDemo } = createComponent('shop');
// import data from '../data.js';
export default {
  data() {
    return {
      data: [
        {
          name: '奈雪的茶（宝安店）',
          distance: '2.3km',
          desc: '全场5折起',
          pictureUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/180880/27/12966/49968/60e5716aE5ea88e4a/d8dcf8a43eec9dbe.png'
        }, {
          name: '奈雪的茶（宝安店）',
          distance: '2.3km',
          pictureUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/180880/27/12966/49968/60e5716aE5ea88e4a/d8dcf8a43eec9dbe.png'
        }, {
          name: '奈雪的茶（宝安店）',
          distance: '2.3km',
          pictureUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/180880/27/12966/49968/60e5716aE5ea88e4a/d8dcf8a43eec9dbe.png'
        }
      ],
      params: {
        cDistance: ['distance'],
        cImage: ['pictureUrl']
      }
    };
  },
  mounted() {
    // console.log('demo1', this.data)
  }
};
</script>

<style lang="scss" scoped>
#app {
  .demo {
    padding-left: 9px;
    padding-right: 9px;
  }
  .demo-shop {
    margin-bottom: 5px;
  }
}
.demo-s2 {
  /deep/ .nutcat-col {
    width: 149px;
  }
}
</style>
