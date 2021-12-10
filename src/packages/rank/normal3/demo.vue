<template>
  <div class="demo">
    <h2>类型：normal-3</h2>
    <p class="type">适用场景：一行三个榜单布局，上下结构，支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-rank">
      <NutRow type="flex" gutter="2">
        <nutcat-col :span="8" v-for="(item, index) in data1" :key="index">
          <NutRank
            :data="[item, params]" 
            col="3" 
            type="normal-3" 
          ></NutRank>
        </nutcat-col>
      </NutRow>
    </div>
    <div class="demo-rank">
      <NutRow type="flex" gutter="2">
        <nutcat-col :span="8" v-for="(item, index) in data2" :key="index">
          <NutRank
            :data="[item, {cDesc: false,cImage: ['pictureUrl']}]" 
            col="3" 
            type="normal-3" 
          >
            <NutTag type="rank-hot"></NutTag>
          </NutRank>
        </nutcat-col>
      </NutRow>
    </div>
    <div class="demo-rank demo-s3">
      <NutRow scrollX type="flex" gutter="1">
        <nutcat-col :span="8" v-for="(item, index) in data3" :key="index">
          <NutRank
            :data="[item, params]" 
            col="3" 
            type="normal-3" 
          >
            <NutTag type="rank-hot"></NutTag>
          </NutRank>
        </nutcat-col>
      </NutRow>
    </div>
    <div class="demo-rank">
      <NutRow scrollX type="flex" gutter="1">
        <nutcat-col :span="6" v-for="(item, index) in data3" :key="index">
          <NutRank
            :data="[item, params]" 
            col="4" 
            type="normal-3" 
          >
            <NutTag type="rank-hot"></NutTag>
          </NutRank>
        </nutcat-col>
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
      params: {
        cName: ['name'],
        cDesc: ['desc'],
        cImage: ['pictureUrl']
      },
      data1: [
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
      ],
      data2: [
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
      ],
      data3: [
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
      ],
      productData: [
        {
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
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
.demo-s3 {
  /deep/ .nutcat-col {
    width: 108px;
  }
}
</style>
