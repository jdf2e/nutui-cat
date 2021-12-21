<template>
  <div class="demo">
    <h2>类型：normal-2</h2>
    <p class="type">适用场景：一行一个店铺布局，由品牌logo+名称+运营语+利益点+进入标签组成。适合长利益点。</p>
    <div class="demo-shop">
      <NutRow>
        <NutCol :span="24" v-for="(item, index) in data" :key="index">
          <NutShop
            :data="[item, params]" 
            col="1" 
            type="normal-2" 
            descRow="1"
            bgColor="#820C00"
          >
            <NutTag
              slot="tag"
              class="tag-go"
              radius="30px"
              color="#fff"
              bgColor="rgb(0, 0, 0)"
              afterIcon="arrow-full"
            >
              进入
            </NutTag>
            <div class="tag-box">
              <NutTag type="red-light">
                <span slot="preSlot">满减</span>
                满1000减300券
              </NutTag>
              <NutTag type="red-light">
                <span slot="preSlot">折</span>
                全场3折起
              </NutTag>
              <NutTag type="red-light">
                其他利益点
              </NutTag>
            </div>
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
          desc: '有气质的运营语十二字以内',
          logo:
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
.nutcat-tag-red-light {
  height: 18px;
}
</style>
