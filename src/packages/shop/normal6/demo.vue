<template>
  <div class="demo">
    <h2>类型：normal-6</h2>
    <p class="type">适用场景：一行多个店铺布局，上下结构，顶部底部是文字，中间图片区域。支持一行二个、一行三个、一行三个半、一行四个等。</p>
    <div class="demo-shop demo-s3">
      <NutRow scrollX type="flex" gutter="1">
        <nutcat-col :span="8" v-for="(item, index) in data" :key="index">
          <NutShop
            :data="[item, {
                cLogo: false,
                cImage: ['pictureUrl']
              }]" 
            col="3" 
            type="normal-6" 
          >
          </NutShop>
        </nutcat-col>
      </NutRow>
    </div>
    
  </div>
</template>

<script lang="ts">
// import { createComponent } from '@/utils/create';
// const { createDemo } = createComponent('shop');
// import data from '../data.js';
export default {
  data() {
    return {
      data: [
        {
          name: '欧莱雅进口专卖',
          desc: '全场5折起',
          pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/173974/21/18150/32309/60e3bc10E3df14e94/1b62f83797a76dfe.png'
        }, {
          name: '欧莱雅进口专卖',
          desc: '全场5折起',
          pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/173974/21/18150/32309/60e3bc10E3df14e94/1b62f83797a76dfe.png'
        }, {
          name: '欧莱雅进口专卖',
          desc: '全场5折起',
          pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/173974/21/18150/32309/60e3bc10E3df14e94/1b62f83797a76dfe.png'
        }, {
          name: '欧莱雅进口专卖',
          desc: '全场5折起',
          pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/173974/21/18150/32309/60e3bc10E3df14e94/1b62f83797a76dfe.png'
        }
      ],
      params: {
        cName: false,
        cLogo: ['logoUrl'],
        cImage: ['pictureUrl']
      }
    };
  },
  mounted() {
    // console.log('demo1', this.data)
  }
};
</script>

<style lang="scss" scoped>
#app {
  .demo {
    padding-left: 9px;
    padding-right: 9px;
  }
  .demo-shop {
    margin-bottom: 5px;
  }
}
.demo-s3 {
  /deep/ .nutcat-col {
    width: 108px;
  }
  .nutcat-tag-live-on {
    position: absolute;
    left: 6px;
    top: 6px;
  }
}
</style>
