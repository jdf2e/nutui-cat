<template>
  <div class="demo">
    <h2>类型：feed-1</h2>
    <p class="type">一行二个视频布局，上边是视频区域信息，下面包含商品和达人内容。适用于 feed 流。</p>
    <div class="demo-video demo1">
      <nutcat-video 
        rowType="flex"
        gutter="3"
        :data="data" 
        col="2"
        type='feed-1'
      >
      </nutcat-video>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('video');
// import data from './data.js' ;
export default createDemo({
  data() {
		return {
      data: {}
    };
	},
  mounted() {
    this.data = [
      {
        "name": "TÜV SÜD| 告别三无小龙虾，在小龙虾季助您安心畅",
        "productName": "DYSON戴森吹风机便携家用电吹风负离子智能控温海外版 HD01黑色",
        "authorName": "巴啦啦小魔仙",
        "desc": "好评率: 20%",
        "pageView": "212",
        "label": "源头好物",
        "videoDuration": "73",
        "authorPic": "https://m.360buyimg.com/ceco/jfs/t1/156946/30/4359/12113/5ff40f9dE5659cdfa/4aba7354a3bd8ae2.png",
        "src": "https://m.360buyimg.com/ceco/jfs/t1/184424/21/4916/95423/60a4897bE37bdffd3/cf9a66eb05457d5a.jpg",
      },{
        "name": "内蒙古草原法式小羊排",
        "productName": "DYSON戴森吹风机便携家用电吹风负离子智能控温海外版 HD01黑色",
        "authorName": "巴啦啦小魔仙",
        "desc": "好评率: 20%",
        "pageView": "212",
        "label": "源头好物",
        "videoDuration": "73",
        "authorPic": "https://m.360buyimg.com/ceco/jfs/t1/156946/30/4359/12113/5ff40f9dE5659cdfa/4aba7354a3bd8ae2.png",
        "src": "https://m.360buyimg.com/ceco/jfs/t1/186998/9/3418/331629/60a62dbcE972a9ce2/b011382d9a57830b.jpg",
      }
    ];
    // console.log('data', data)
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
.demo-video {
}
.demo1 {
  .nutcat-col {
    // width: 354px;
    // margin-left: 3px;
    // &:first-child {
    //   margin-left: 0;
    // }
  }
}
</style>
