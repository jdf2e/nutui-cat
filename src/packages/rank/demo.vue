<template>
  <div class="demo">
    <!-- <h2>类型：normal-1</h2>
    <p class="type">一行一个榜单布局，左边文字区域，右边区域是商品区域。</p>
    <div class="demo-rank">
      <NutRank
        :data="[data1, params1]" 
        :productData="[productData2, params2]" 
        col="1" 
        type="normal-1" 
        bgColor="#820C00"
      >
      </NutRank>
    </div>
    <div class="demo-rank">
      <NutRank
        :data="[data1, params1]" 
        :productData="[productData3, params2]" 
        col="1" 
        type="normal-1" 
        tag="rank-1"
        bgColor="#820C00"
      >
      </NutRank>
    </div>
    <p class="type">`productData` 为空，右边的商品区域则隐藏，通过 `slot` 增加进入的 `icon`。</p>
    <div class="demo-rank demo1-2">
      <NutRank
        :data="[data1, params2]" 
        col="1" 
        type="normal-1" 
        bgColor="#820C00"
      >
        <NutIcon type="arrow-full"></NutIcon>
      </NutRank>
    </div>
    <h2>类型：normal-2</h2>
    <p class="type">一行二个榜单布局，左右结构，左边文字，右边图片区域。</p>
    <div class="demo-rank demo2-1">
      <NutRank
        rowType="flex"
        gutter="3"
        :data="[data2, params1]" 
        :productData="[productData1, params2]" 
        descRow="2"
        col="2" 
        type="normal-2" 
        bgColor="#820C00"
      ></NutRank>
    </div>
    <h2>类型：normal-3</h2>
    <p class="type">一行三个榜单布局，上下结构，支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-rank demo3-1">
      <NutRank
        rowType="flex"
        gutter="2"
        :data="[data3, params1]" 
        col="3" 
        type="normal-3" 
      ></NutRank>
    </div>
    <div class="demo-rank demo3-2">
      <NutRank
        rowType="flex"
        gutter="2"
        :data="[data4, params1]" 
        col="3" 
        type="normal-3" 
      >
        <NutTag type="rank-hot"></NutTag>
      </NutRank>
    </div>
    <div class="demo-rank demo-s3">
      <NutRank
        scrollX
        rowType="flex"
        gutter="1"
        :data="[data5, params1]" 
        col="3" 
        type="normal-3" 
      >
        <NutTag type="rank-hot"></NutTag>
      </NutRank>
    </div>
    <div class="demo-rank demo4-1">
      <NutRank
        scrollX
        rowType="flex"
        gutter="1"
        :data="[data5, params1]" 
        col="4" 
        type="normal-3" 
      >
        <NutTag type="rank-hot"></NutTag>
      </NutRank>
    </div>
    <h2>类型：normal-4</h2>
    <p class="type">一行三个榜单布局，上下结构，支持一行三个、一行三个半。</p>
    <div class="demo-rank demo3-3">
      <NutRank
        rowType="flex"
        gutter="2"
        :data="[data6, params1]" 
        bgUrl="//img11.360buyimg.com/imagetools/jfs/t1/187035/30/7524/12500/60c1cfd7E8d2e1f3b/e43f0191aea8a5bd.png"
        col="3" 
        type="normal-4" 
      >
        <NutTag type="rank-hot"></NutTag>
      </NutRank>
    </div>
    <h2>类型：feed-1</h2>
    <p class="type">一行二个榜单布局，上下结构，适用于 feed 流场景。</p>
    <div class="demo-rank demo2-1">
      <NutRank
        rowType="flex"
        gutter="3"
        :data="[data7, params1]" 
        tag="arrow-go"
        col="2" 
        type="feed-1" 
      >
      </NutRank>
    </div> -->
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('rank');
import data from './data.js';
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
      data: {},
      productData1: {},
      productData2: {},
      productData3: {},
      data1: {},
      data2: {},
      data3: {},
      data4: {},
      data5: {},
      data6: {},
      data7: {}
    };
  },
  mounted() {
    this.data = data;
    this.productData1 = [
      {
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
      }
    ];
    this.productData2 = [
      {
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
      },
      {
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
      }
    ];
    this.productData3 = [
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
    ];
    this.data1 = [
      {
        name: '榜单标题',
        desc: '清单描述文案文案描述',
      }
    ];
    this.data2 = [
      {
        name: '榜单标题',
        desc: '清单描述文案文案描述',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/182928/36/13009/7303/60e51ebcE91f930b6/5804dadade489bbe.png'
      },{
        name: '榜单标题',
        desc: '清单描述文案文案描述',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/182928/36/13009/7303/60e51ebcE91f930b6/5804dadade489bbe.png'
      }
    ];
    this.data3 = [
      {
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      },{
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      },{
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      }
    ];
    this.data4 = [
      {
        name: '手机电脑榜',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      },{
        name: '手机电脑榜',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      },{
        name: '手机电脑榜',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      }
    ];
    this.data5 = [
      {
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      },{
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      },{
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      },{
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      }
    ];
    this.data6 = [
      {
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img10.360buyimg.com/imagetools/jfs/t1/187808/29/11938/45562/60e4509fE3cc935d5/4c98a1614eb9cfa5.png'
      },{
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img10.360buyimg.com/imagetools/jfs/t1/187808/29/11938/45562/60e4509fE3cc935d5/4c98a1614eb9cfa5.png'
      },{
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img10.360buyimg.com/imagetools/jfs/t1/187808/29/11938/45562/60e4509fE3cc935d5/4c98a1614eb9cfa5.png'
      }
    ];
    this.data7 = [
      {
        name: '手机电脑榜',
        desc: '2.6万人看过',
        pictureUrl:
          'https://img10.360buyimg.com/imagetools/jfs/t1/187808/29/11938/45562/60e4509fE3cc935d5/4c98a1614eb9cfa5.png'
      }, {
        name: '手机电脑榜',
        desc: '2.6万人看过',
        pictureUrl:
          'https://img10.360buyimg.com/imagetools/jfs/t1/187808/29/11938/45562/60e4509fE3cc935d5/4c98a1614eb9cfa5.png'
      }
    ];
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
