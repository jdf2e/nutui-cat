<template>
  <div class="demo">
    <h2>类型：normal-2</h2>
    <p class="type">适用场景：一行一个商品布局，左右结构。与 normal-1 的区别在于利益点、划线价的顺序结构有所调整。</p>
    <div class="demo-product">
      <NutRow>
        <nutcat-col :span="24" v-for="(item, index) in data" :key="index">
          <NutProduct
            :data="[item, params]"
            col="1"
            type="normal-2"
            nameRow="1"
            linePricePre="日常价"
          >
            <template slot="priceSlot">
              <NutTag class="price-tag-pre" type="red" radius="2px"
                >秒杀</NutTag
              >
              预估到手价
              <NutPrice price="1649" class="price" />
            </template>
            <template slot="tag">
              <NutTag class="sub-tag" type="red-light"
                >利益点利益点利益点</NutTag
              >
              <NutTag class="sub-tag" type="red-light"
                >利益点利益点利益点</NutTag
              >
            </template>
          </NutProduct>
        </nutcat-col>
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
          name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',
          nameRow: '1',
          tag: '源头好物',
          linePrice: '4999',
          image:
            'https://img12.360buyimg.com/imagetools/jfs/t1/185218/3/12954/50806/60ead6b5E2716e7ee/d51415655b04ad48.png'
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
