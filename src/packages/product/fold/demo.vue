<template>
  <div class="demo">
    <h2>类型：fold</h2>
    <p class="type">适用场景：心跳折线类型，支持一行一个。</p>
    <div class="demo-product">
      <nutcat-row>
        <nutcat-col :span="24" v-for="(item, index) in data" :key="index">
          <nutcat-product
            :data="[item, params]"
            nameRow="1"
            linePricePre="日常价"
            col="1"
            type="fold"
          >
            <template slot="priceSlot">
              <nutcat-tag class="price-tag-pre" type="red" radius="2px"
                >秒杀</nutcat-tag
              >
              限时优惠价
              <nutcat-price price="1649" class="price" />
            </template>
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
