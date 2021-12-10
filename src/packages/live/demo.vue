<template>
  <div class="demo">
    <h2>商品直播 一行一</h2>
    <NutLive col="1" :data="data5" type="normal"></NutLive>
    <h2>商品直播 一行二</h2>
    <NutLive col="2" :data="data2" type="normal"></NutLive>
    <h2>商品直播 一行三</h2>
    <NutLive col="3" :data="data1" type="normal"></NutLive>
    <h2>会场直播 一行二 无商品</h2>
    <NutLive col="2" :data="data3" type="room-1"></NutLive>
    <h2>会场直播 一行二 有商品</h2>
    <NutLive col="2" :data="data4" type="room-2"></NutLive>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('live');
export default createDemo({
  data() {
    return {
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: []
    };
  },
  mounted() {
    this.data1 = [
      {
        indexImage:
          'https://m.360buyimg.com/livecms/jfs/t1/127818/24/19958/110963/60b47c04E35158ec5/ceb5aa16684fe1fc.jpg!q70.jpg',
        status: 0,
        desc: '利益点123',
        title: '直播标题123'
      },
      {
        indexImage:
          'https://m.360buyimg.com/livecms/jfs/t1/177925/24/6631/79460/60b331d8E6de23759/69e8bf36545c14b6.jpg!q70.jpg',
        status: 1,
        desc: '利益点123',
        title: '直播标题123'
      },
      {
        indexImage:
          'https://m.360buyimg.com/livecms/jfs/t1/177925/24/6631/79460/60b331d8E6de23759/69e8bf36545c14b6.jpg!q70.jpg',
        status: 2,
        desc: '利益点123',
        title: '直播标题123'
      }
    ];
    this.data2 = [
      {
        indexImage:
          'https://m.360buyimg.com/livecms/jfs/t1/127818/24/19958/110963/60b47c04E35158ec5/ceb5aa16684fe1fc.jpg!q70.jpg',
        status: 0,
        desc: '利益点123',
        title: '直播标题123'
      },
      {
        indexImage:
          'https://m.360buyimg.com/livecms/jfs/t1/177925/24/6631/79460/60b331d8E6de23759/69e8bf36545c14b6.jpg!q70.jpg',
        status: 1,
        desc: '利益点123',
        title: '直播标题123'
      }
    ];
    this.data3 = [
      {
        indexImage:
          'http://img14.360buyimg.com/img/jfs/t1/189882/3/12295/66499/60e6cf2cE57497b7e/7130b52a40d17eb5.png',
        status: 0,
        watchNumber: '24.6W',
        name: '测试直播名称直播名称1',
        desc: '测试利益点'
      },
      {
        indexImage:
          'http://img14.360buyimg.com/img/jfs/t1/189882/3/12295/66499/60e6cf2cE57497b7e/7130b52a40d17eb5.png',
        status: 0,
        watchNumber: '24.6W',
        name: '测试直播名称直播名称2',
        desc: '测试利益点'
      }
    ];
    this.data4 = [
      {
        indexImage:
          '//img30.360buyimg.com/img/jfs/t1/177384/11/14132/99610/60eea91cE4be56c41/f4e2d8c118b8aa2a.png',
        status: 0,
        watchNumber: '直播中',
        name: '测试直播名称1',
        desc: '测试利益点',
        price: '199',
        sImg:
          '//img13.360buyimg.com/img/jfs/t1/180070/24/14169/12358/60eea91bE80bd1d30/2b8dd3366043967d.png'
      },
      {
        indexImage:
          '//img30.360buyimg.com/img/jfs/t1/177384/11/14132/99610/60eea91cE4be56c41/f4e2d8c118b8aa2a.png',
        status: 0,
        watchNumber: '直播中',
        name: '测试直播名称2',
        desc: '测试利益点',
        price: '199',
        sImg:
          '//img13.360buyimg.com/img/jfs/t1/180070/24/14169/12358/60eea91bE80bd1d30/2b8dd3366043967d.png'
      }
    ];
    this.data5 = [
      {
        indexImage:
          'https://m.360buyimg.com/livecms/jfs/t1/194940/13/7234/103083/60bf9448E2cc2cd30/9c60153e44bf95aa.jpg!q70.jpg',
        status: 0,
        desc: '测试利益点利益点123',
        title: '测试直播标题直播标题123'
      }
    ];
  }
});
</script>

<style lang="scss" scoped>
#app {
  .demo {
  }
}
</style>
