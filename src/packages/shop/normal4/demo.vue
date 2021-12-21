<template>
  <div class="demo">
    <h2>类型：normal-4</h2>
    <p class="type">适用场景：一行多个店铺布局，上下结构，支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-shop">
      <NutRow type="flex" gutter="2">
        <NutCol :span="8" v-for="(item, index) in data1" :key="index">
          <NutShop
            :data="[item, params1]" 
            col="3" 
            type="normal-4"
          >
          </NutShop>
        </NutCol>
      </NutRow>
    </div>
    <div class="demo-shop demo5">
      <NutRow type="flex" gutter="2">
        <NutCol :span="8" v-for="(item, index) in data2" :key="index">
          <NutShop
            :data="[item, params2]" 
            col="3" 
            type="normal-4" 
          >
          </NutShop>
        </NutCol>
      </NutRow>
    </div>
    <div class="demo-shop">
      <NutRow type="flex" gutter="1">
        <NutCol :span="6" v-for="(item, index) in data3" :key="index">
          <NutShop
            :data="[item, params1]" 
            col="4" 
            type="normal-4" 
          >
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
      data1: [
        {
          desc: '满千减百狂欢',
          logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/172656/3/18637/6643/60e3bb70E996a14ca/861ce485c3036928.png'
        }, {
          desc: '满千减百狂欢',
          logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/172656/3/18637/6643/60e3bb70E996a14ca/861ce485c3036928.png'
        }, {
          desc: '满千减百狂欢',
          logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/172656/3/18637/6643/60e3bb70E996a14ca/861ce485c3036928.png'
        }
      ],
      data2: [
        {
          name: '资生堂进口专卖',
          desc: '满千减百狂欢',
          logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/185638/30/12045/7305/60e3bd5dEa06a3bf5/fb073dc4992683bf.png'
        }, {
          name: '资生堂进口专卖',
          desc: '满千减百狂欢',
          logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/185638/30/12045/7305/60e3bd5dEa06a3bf5/fb073dc4992683bf.png'
        }, {
          name: '资生堂进口专卖',
          desc: '满千减百狂欢',
          logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/185638/30/12045/7305/60e3bd5dEa06a3bf5/fb073dc4992683bf.png'
        }
      ],
      data3: [
        {
          desc: '特卖4折起',
          logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/178973/20/12948/7386/60e44280Ed93956a7/ee6b8b3c36d4d903.png'
        }, {
          desc: '特卖4折起',
          logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/178973/20/12948/7386/60e44280Ed93956a7/ee6b8b3c36d4d903.png'
        }, {
          desc: '特卖4折起',
          logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/178973/20/12948/7386/60e44280Ed93956a7/ee6b8b3c36d4d903.png'
        }, {
          desc: '特卖4折起',
          logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/178973/20/12948/7386/60e44280Ed93956a7/ee6b8b3c36d4d903.png'
        }
      ],
      params1: {
        cName: false,
        cLogo: ['logoUrl']
      },
      params2: {
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
