<template>
  <div class="demo">
    <h2>类型：normal-4</h2>
    <p class="type">适用场景：一行三个榜单布局，上下结构，支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-rank">
      <NutRow type="flex" gutter="2">
        <NutCol :span="8" v-for="(item, index) in data" :key="index">
          <NutRank
            :data="[item, {cImage: ['pictureUrl']}]" 
            bgUrl="//img11.360buyimg.com/imagetools/jfs/t1/187035/30/7524/12500/60c1cfd7E8d2e1f3b/e43f0191aea8a5bd.png"
            col="3" 
            type="normal-4" 
          >
            <NutTag type="rank-hot"></NutTag>
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
      params: {
        cName: ['name'],
        cDesc: ['desc'],
        cImage: ['pictureUrl']
      },
      data: [
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
