<template>
  <div class="demo">
    <h2>类型：normal-1</h2>
    <p class="type">适用场景：一行一个商品布局，左右结构。支持一行一个、一行一个半等。</p>
    <div class="demo-product">
      <NutRow>
        <nutcat-col :span="24" v-for="(item, index) in data1" :key="index">
          <NutProduct :data="[item, params]" col="1" type="normal-1" nameRow="1">
            <template slot="preName">
              <NutTag type="618">618</NutTag>
            </template>
            <template slot="tag">
              <NutTag class="sub-tag" type="red-pink">利益点利益点</NutTag>
              <NutTag class="sub-tag" type="red-pink">利益点利益点</NutTag>
            </template>
          </NutProduct>
        </nutcat-col>
      </NutRow>
    </div>
    <p class="type">增加氛围图、标签、抢购按钮。</p>
    <div class="demo-product">
      <NutRow>
        <nutcat-col :span="24" v-for="(item, index) in data2" :key="index">
          <NutProduct
            :data="[item, {
              cDesc: false
            }]"
            nameRow="2"
            col="1"
            tag="qiang"
            type="normal-1"
            bgUrl="//img10.360buyimg.com/imagetools/jfs/t1/6090/8/11750/133338/60c09116E0c991a9f/cfe358af6388e40f.png"
          >
            <template slot="tag">
              <NutTag class="sub-tag" type="red-pink">277天最低价</NutTag>
              <NutTag class="sub-tag" type="red-pink">放心购标签</NutTag>
            </template>
            <NutTag class="top-tag tl" type="fire">某某商品top款</NutTag>
          </NutProduct>
        </nutcat-col>
      </NutRow>
    </div>
    <div class="demo-product demo-s1">
      <NutRow scrollX type="flex" gutter="2">
        <nutcat-col :span="24" v-for="(item, index) in data3" :key="index">
          <NutProduct
            :data="[item, {
              cDesc: false
            }]"
            tag="qiang"
            nameRow="1"
            col="1"
            type="normal-1"
          >
            <template slot="tag">
              <NutTag class="sub-tag" type="red-pink">277天最低价</NutTag>
              <NutTag class="sub-tag" type="red-pink">放心购标签</NutTag>
            </template>
            <NutTag class="top-tag tl" type="red-gradient"
              >全年历史最低价</NutTag
            >
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
          name: 'CAMILA&KORALI限定斜挎包包',
          desc: '更多买点更多买点',
          linePrice: '2999',
          pPrice: '1999',
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
        }
      ],
      data2: [
        {
          name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',
          tag: '源头好物',
          pricePre: '狂欢价',
          linePrice: '2999',
          pPrice: '1999',
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
        }
      ],
      data3: [
        {
          name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',
          tag: '源头好物',
          pricePre: '狂欢价',
          linePrice: '299',
          pPrice: '199',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/186714/12/12846/30194/60ebb6beEfeba0dc4/c24d1a0f8515d6f2.png'
        },
        {
          name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',
          tag: '源头好物',
          pricePre: '狂欢价',
          linePrice: '299',
          pPrice: '199',
          image:
            'https://img13.360buyimg.com/imagetools/jfs/t1/186714/12/12846/30194/60ebb6beEfeba0dc4/c24d1a0f8515d6f2.png'
        }
      ],
      params: {
        cName: ['name']
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
.demo-s1 {
  /deep/ .nutcat-col {
    width: 312px;
  }
}
</style>
