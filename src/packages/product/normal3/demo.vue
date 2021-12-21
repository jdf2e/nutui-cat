<template>
  <div class="demo">
    <h2>类型：normal-3</h2>
    <p class="type">适用场景：一行一个商品布局，左右结构。适用于秒杀限量商品，去抢购的进度条显示剩余库存量比例。</p>
    <div class="demo-product">
      <NutRow>
        <NutCol :span="24" v-for="(item, index) in data" :key="index">
          <NutProduct
            :data="[item, params]"
            col="1"
            type="normal-3"
          >
            <template slot="tag">
              <NutTag class="sub-tag" type="red-pink">限量5000件</NutTag>
              <NutTag class="sub-tag" type="red-pink">限量5000件</NutTag>
            </template>
            <template slot="priceSlot">
              <NutTag class="price-tag-pre" type="red" radius="2px"
                >秒杀</NutTag
              >
              <NutPrice price="1649" class="price" />
            </template>
            <NutTag class="top-tag tl" type="red-gradient"
              >全年历史最低价</NutTag
            >
          </NutProduct>
        </NutCol>
      </NutRow>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('product');
// import data from './data.js';
export default createDemo({
  data() {
    return {
      data: [
        {
          name: 'CAMILA&KORALI限定斜挎包包',
          nameRow: '1',
          linePrice: '2999',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png'
        }
      ],
      params: {
        cDesc: false
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
  .demo-product {
    margin-bottom: 5px;
    overflow: hidden;
    .top-tag {
      border-radius: 0 0 4px 0;
    }
    /deep/ .nutcat-tag-fire {
      border-radius: 0 0 8px 0;
    }
  }
}
</style>
