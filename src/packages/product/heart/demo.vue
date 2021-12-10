<template>
  <div class="demo">
    <h2>类型：heart</h2>
    <p class="type">适用场景：心跳曲线类型，支持一行一个、一行二个、一行三个等。</p>
    <div class="demo-product">
      <NutRow>
        <nutcat-col :span="24" v-for="(item, index) in data1" :key="index">
          <NutProduct
            :data="[item, params]"
            pricePre="狂欢价"
            nameRow="1"
            heartName="限时优惠价"
            col="1"
            type="heart"
          >
            <template slot="preName">
              <NutTag type="618">618</NutTag>
            </template>
            <template slot="tag">
              <NutTag class="sub-tag" type="red-pink">利益点利益点</NutTag>
            </template>
          </NutProduct>
        </nutcat-col>
      </NutRow>
    </div>
    <div class="demo-product">
      <NutRow type="flex" gutter="3">
        <nutcat-col :span="12" v-for="(item, index) in data2" :key="index">
          <NutProduct
            :data="[item, params]"
            heartName="N天最低价"
            nameRow="2"
            col="2"
            type="heart"
          >
            <template slot="preName">
              <NutTag type="618">618</NutTag>
            </template>
            <template slot="tag">
              <NutTag class="sub-tag" type="red-pink">闪购进行时</NutTag>
            </template>
          </NutProduct>
        </nutcat-col>
      </NutRow>
    </div>
    <div class="demo-product">
      <NutRow type="flex" gutter="3">
        <nutcat-col :span="8" v-for="(item, index) in data2" :key="index">
          <NutProduct
            :data="[item, params]"
            heartName="N天最低价"
            nameRow="2"
            col="3"
            type="heart"
          >
            <template slot="preName">
              <NutTag type="618">618</NutTag>
            </template>
            <template slot="tag">
              <NutTag class="sub-tag" type="red-pink">闪购进行时</NutTag>
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
      data1: [
        {
          name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',  
          tag: '源头好物',
          pPrice: '1999',
          linePrice: '2999',
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
        }
      ],
      data2: [
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
