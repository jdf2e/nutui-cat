<template>
  <div class="demo">
    <h2>类型：normal-1</h2>
    <p class="type">适用场景：一行一个店铺布局，由品牌logo+文字+进入标签组成。适合短利益点。</p>
    <div class="demo-shop">
      <NutRow>
        <NutCol :span="24" v-for="(item, index) in data" :key="index">
          <NutShop
            :data="[item, params]" 
            col="1" 
            type="normal-1" 
            tag="GO"
            nameRow="1"
            bgColor="#820C00"
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
      data: [
        {
          name: '品牌店铺名称',
          desc: '利益点满399减300',
          logoUrl:
            'https://img14.360buyimg.com/imagetools/jfs/t1/179875/7/12879/6873/60e3c269E34d46a04/676b02596f2e9ceb.png'
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
