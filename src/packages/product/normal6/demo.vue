<template>
  <div class="demo">
    <h2>类型：normal-6</h2>
    <p class="type">适用场景：强化抢购氛围，支持一行二个、一行三个、一行三个半等。</p>
    <div class="demo-product">
      <NutRow type="flex" gutter="3">
        <NutCol :span="12" v-for="(item, index) in data" :key="index">
          <NutProduct
            :data="[item, params]"
            nameRow="2"
            pricePre="拼团价"
            col="2"
            type="normal-6"
          >
            <template slot="preName">
              <NutTag type="618">618</NutTag>
            </template>
            <template slot="tag">
              <NutTag class="sub-tag" type="red-pink">闪购进行时</NutTag>
            </template>
          </NutProduct>
        </NutCol>
      </NutRow>
    </div>
    <div class="demo-product">
      <div class="demo-product">
        <NutRow type="flex" gutter="2">
          <NutCol :span="8" v-for="(item, index) in data" :key="index">
            <NutProduct
              :data="[item, params]"
              nameRow="2"
              col="3"
              type="normal-6"
            >
            </NutProduct>
          </NutCol>
        </NutRow>
      </div>
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
          name: 'DYSON戴森吹风机吹风机吹风机吹风机吹风机吹风机',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/177307/28/13383/31510/60ebf332E30234292/107cc03dce68edec.png'
        },
        {
          name: 'DYSON戴森吹风机吹风机吹风机吹风机吹风机吹风机',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/177307/28/13383/31510/60ebf332E30234292/107cc03dce68edec.png'
        },
        {
          name: 'DYSON戴森吹风机吹风机吹风机吹风机吹风机吹风机',
          pPrice: '199',
          linePrice: '499',
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/177307/28/13383/31510/60ebf332E30234292/107cc03dce68edec.png'
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
