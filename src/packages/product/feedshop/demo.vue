<template>
  <div class="demo">
    <h2>类型：feed-shop</h2>
    <p class="type">适用场景：商品+店铺类型，多用于底部 Feed 流。</p>
    <div class="demo-product">
      <nutcat-row type="flex" gutter="3">
        <nutcat-col :span="12" v-for="(item, index) in data" :key="index">
          <nutcat-product
            :data="[item, params]"
            tag="满199减10"
            linePricePre="日常价"
            col="2"
            type="feed-shop"
          >
            <template slot="preName">
              <nutcat-tag type="618">618</nutcat-tag>
            </template>
            <template slot="priceAfter">
              <nutcat-tag class="price-tag-after" type="plus-price"></nutcat-tag>
            </template>
            <template slot="shop">
              <nutcat-text class="shop-name">店铺名称</nutcat-text>
              <nutcat-text class="shop-desc"
                >接受预定，明日23:00开始营业</nutcat-text
              >
            </template>
            <nutcat-tag class="tl9" type="lbs">1.3km</nutcat-tag>
          </nutcat-product>
        </nutcat-col>
      </nutcat-row>
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
  .nutcat-row {
    overflow-x: auto;
  }
}
</style>
