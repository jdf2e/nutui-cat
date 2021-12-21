<template>
  <div class="demo">
    <h2>类型：normal-1</h2>
    <p class="type">适用场景：一行一个榜单布局，左边文字区域，右边区域是商品区域。</p>
    <div class="demo-rank">
      <NutRow>
        <NutCol :span="24" v-for="(item, index) in data1" :key="index">
          <NutRank
            :data="[item, params1]" 
            :productData="[item.productData, params2]" 
            col="1" 
            type="normal-1" 
            bgColor="#820C00"
          >
            <ul class="nutcat-rank-list" v-if="item.productData.length > 0">
              <div class="nutcat-rank-item" v-for="(productItem, productIndex) in (item.productData || '')" :key="productIndex">
                <NutImage 
                  class="img-box"
                  :src="productItem.image"
                >
                </NutImage>
                <template v-if="tag">
                  <NutTag :type="tag" :class="`top${productIndex + 1}`">{{productIndex + 1}}</NutTag>
                </template>
              </div>
            </ul>
          </NutRank>
        </NutCol>
      </NutRow>
    </div>
    <div class="demo-rank">
      <NutRow>
        <NutCol :span="24" v-for="(item, index) in data2" :key="index">
          <NutRank
            :data="[item, params1]" 
            :productData="[item.productData, params2]" 
            col="1" 
            type="normal-1" 
            tag="rank-1"
            bgColor="#820C00"
          >
            <ul class="nutcat-rank-list" v-if="item.productData.length > 0">
              <div class="nutcat-rank-item" v-for="(productItem, productIndex) in (item.productData || '')" :key="productIndex">
                <NutImage 
                  class="img-box"
                  :src="productItem.image"
                >
                </NutImage>
                <template v-if="tag">
                  <NutTag :type="tag" :class="`top${productIndex + 1}`">{{productIndex + 1}}</NutTag>
                </template>
              </div>
            </ul>
          </NutRank>
        </NutCol>
      </NutRow>
    </div>
    <p class="type">`productData` 为空，右边的商品区域则隐藏，通过 `slot` 增加进入的 `icon`。</p>
    <div class="demo-rank demo1-2">
      <NutRow>
        <NutCol :span="24" v-for="(item, index) in data1" :key="index">
          <NutRank
            :data="[item, params2]" 
            col="1" 
            type="normal-1" 
            bgColor="#820C00"
          >
            <NutIcon type="arrow-full"></NutIcon>
          </NutRank>
        </NutCol>
      </NutRow>
    </div>
  </div> 
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('rank');
// import data from './data.js';
export default createDemo({
  data() {
    return {
      params1: {
        cName: ['name'],
        cDesc: ['desc', 'extension.shopInfo.desc', '"火爆热卖中"'],
        cImage: ['pictureUrl'],
      },
      params2: {
        cName: ['name'],
        cDesc: ['desc', 'extension.shopInfo.desc', '"火爆热卖中"'],
        cImage: ['image'],
      },
      data1: [
        {
          name: '榜单标题',
          desc: '清单描述文案文案描述',
          productData: [
            {
              image:
                'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
            },
            {
              image:
                'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
            }
          ]
        }
      ],
      data2: [
        {
          name: '榜单标题',
          desc: '清单描述文案文案描述',
          productData: [
            {
              image:
                'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
            },
            {
              image:
                'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
            },
            {
              image:
                'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
            }
          ]
        }
      ]
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
}
.demo-rank {
  margin-bottom: 5px;
}
</style>
