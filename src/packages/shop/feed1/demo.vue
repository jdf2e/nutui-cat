<template>
  <div class="demo">
    <h2>类型：feed-1</h2>
    <p class="type">适用场景：一行二个店铺布局，上下结构，适用于 feed 流场景。</p>
      <NutRow scrollX type="flex" gutter="3">
        <NutCol :span="12" v-for="(item, index) in data" :key="index">
        <NutShop
          :data="[item, params]" 
          tag="arrow-go"
          col="2" 
          type="feed-1" 
        >
          <NutTag slot="tag" class="sub-tag" type="red-light"
          >满199减100</NutTag>
        </NutShop>
      </NutCol>
    </NutRow>
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
          name: 'XXX自营旗舰店',
          desc: '利益点/运营语',
          price: '199',
          logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/173910/14/18452/4865/60e3c11dEe24a049b/60e1e1ed280b56ac.png',
          pictureUrl: '//m.360buyimg.com/babel/s354x354_jfs/t1/169633/21/20537/104213/60821d78E618f6f68/3446b6abe26a05ce.jpg!q50.jpg'
        }, {
          name: '旗舰店',
          desc: '利益点/运营语',
          price: '199',
          logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/173910/14/18452/4865/60e3c11dEe24a049b/60e1e1ed280b56ac.png',
          pictureUrl: '//m.360buyimg.com/babel/s354x354_jfs/t1/169633/21/20537/104213/60821d78E618f6f68/3446b6abe26a05ce.jpg!q50.jpg'
        }
      ],
      params: {
        cLogo: ['logoUrl'],
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
</style>
