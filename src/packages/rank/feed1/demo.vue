<template>
  <div class="demo">
    <h2>类型：feed-1</h2>
    <p class="type">适用场景：一行二个榜单布局，上下结构，适用于 feed 流场景。</p>
    <div class="demo-rank demo2-1">
      <nutcat-row type="flex" gutter="3"> 
        <nutcat-col :span="12" v-for="(item, index) in data" :key="index">
          <nutcat-rank
            :data="[item, params]" 
            tag="arrow-go"
            col="2" 
            type="feed-1" 
          >
          </nutcat-rank>
        </nutcat-col>
      </nutcat-row>
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
          desc: '2.6万人看过',
          pictureUrl:
            'https://img10.360buyimg.com/imagetools/jfs/t1/187808/29/11938/45562/60e4509fE3cc935d5/4c98a1614eb9cfa5.png'
        }, {
          name: '手机电脑榜',
          desc: '2.6万人看过',
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
