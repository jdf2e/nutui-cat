<template>
  <div class="demo">
    <h2>类型：normal-2</h2>
    <p class="type">适用场景：一行二个榜单布局，左右结构，左边文字，右边图片区域。</p>
    <div class="demo-rank demo2-1">
      <NutRow type="flex" gutter="3">
        <NutCol :span="12" v-for="(item, index) in data" :key="index">
          <NutRank
            :data="[item, params1]" 
            :productData="[item.productData, params2]" 
            descRow="2"
            col="2" 
            type="normal-2" 
            bgColor="#820C00"
          >
            <ul class="nutcat-rank-list" v-if="item.productData.length > 0">
              <div class="nutcat-rank-item" v-for="(productItem, productIndex) in (item.productData || '')" :key="productIndex">
                <NutImage 
                  class="imgs-box"
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
        cName: false,
        cDesc: false,
        cImage: ['image'],
      },
      data: [
        {
          name: '榜单标题',
          desc: '清单描述文案文案描述',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/182928/36/13009/7303/60e51ebcE91f930b6/5804dadade489bbe.png',
          productData: [
            {
              image:
                'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
            }
          ]
        },{
          name: '榜单标题',
          desc: '清单描述文案文案描述',
          pictureUrl:
            'https://img13.360buyimg.com/imagetools/jfs/t1/182928/36/13009/7303/60e51ebcE91f930b6/5804dadade489bbe.png',
          productData: [
            {
              image:
                'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
            }
          ]
        }
      ],
      
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
