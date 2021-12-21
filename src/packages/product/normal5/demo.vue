<template>
  <div class="demo">
    <h2>类型：normal-5</h2>
    <p class="type">适用场景：带购物车的常规类型，支持一行二个、一行三个、一行三个半等。</p>
    <div class="demo-product">
      <NutRow  type="flex" gutter="2">
        <NutCol :span="8" v-for="(item, index) in data" :key="index">
          <NutProduct
            :data="[item, params]"
            iconType="cart"
            nameRow="2"
            col="3"
            type="normal-5"
          >
            <template slot="preName">
              <NutTag type="618">618</NutTag>
            </template>
          </NutProduct>
        </NutCol>
      </NutRow>
    </div>
    <p class="type">一行二个商品，多用于底部 Feed 流。</p>
    <div class="demo-product">
      <NutRow  type="flex" gutter="3">
        <NutCol :span="12" v-for="(item, index) in data" :key="index">
          <NutProduct
            :data="[item, params]"
            iconType="cart"
            name="DYSON戴森吹风机便携家用电吹风负离子智能空调"
            nameRow="2"
            tag="满199减10"
            src="https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png"
            col="2"
            type="normal-5"
          >
            <template slot="preName">
              <NutTag type="618">618</NutTag>
            </template>
            <template slot="priceAfter">
              <NutTag class="price-tag-after" type="plus-price"></NutTag>
            </template>
            <template slot="tag">
              <NutTag class="sub-tag" type="red-light">满199减10</NutTag>
              <NutTag class="sub-tag" type="red-light">利益点利益点</NutTag>
            </template>
          </NutProduct>
        </NutCol>
      </NutRow>
    </div>
    <div class="demo-product">
      <NutRow type="flex" gutter="3">
        <NutCol :span="12" v-for="(item, index) in data" :key="index">
          <NutProduct
            :data="[item, params]"
            iconType="cart"
            name="京东好服务-洗衣机深度清洗"
            nameRow="1"
            src="https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png"
            col="2"
            type="normal-5"
          >
            <template slot="preName">
              <NutTag type="618">618</NutTag>
            </template>
            <template slot="priceAfter">
              <NutTag class="price-tag-after" type="plus-price"></NutTag>
            </template>
            <template slot="tag">
              <NutTag class="sub-tag" type="red-light"
                >您最近浏览的商品正在秒杀</NutTag
              >
            </template>
            <template slot="desc">
              <NutText class="sub-desc">4.3万人购买</NutText>
            </template>
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
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
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
.demo-3 {
  .nutcat-product {
    /deep/.line-price {
      color: #8c8c8c;
      text-decoration: none;
    }
  }
}
.demo-s1 {
  /deep/ .nutcat-col {
    width: 312px;
  }
}
.demo-s3 {
  /deep/ .nutcat-col {
    width: 108px;
  }
}
.demo19 {
  padding: 12px;
  background: rgba(242, 242, 242, 1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  .nutcat-col {
    width: 216px;
    margin-left: 2px;
    &:first-child {
      margin-left: 0;
    }
  }
  .NutRow {
    overflow-x: auto;
  }
}
</style>
