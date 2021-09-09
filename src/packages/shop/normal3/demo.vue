<template>
  <div class="demo">
    <h2>类型：normal-3</h2>
    <p class="type">适用场景：一行二个店铺布局，左右结构，左边图片，右边文字区域。</p>
    <div class="demo-shop">
      <nutcat-row type="flex" gutter="1">
        <nutcat-col :span="12" v-for="(item, index) in data" :key="index">
          <nutcat-shop
            :data="[item, params]" 
            col="2" 
            type="normal-3" 
          >
          </nutcat-shop>
        </nutcat-col>
      </nutcat-row>
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
          name: '资生堂进口专卖',
          desc: '单品69元起',
          logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/177426/30/12870/5564/60e3b907Efe15e7c1/b3c982266b83c546.png'
        }, {
          name: '资生堂进口专卖',
          desc: '单品69元起',
          logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/177426/30/12870/5564/60e3b907Efe15e7c1/b3c982266b83c546.png'
        }
      ],
      params: {
        cLogo: ['logoUrl']
      }
    };
  },
  mounted() {
    console.log('demo1', this.data)
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
