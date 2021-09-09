<template>
  <div class="demo">
    <!-- <h2>类型：normal-1</h2>
    <p class="type">一行一个会场布局，由文字+进入标签+图片组成。文字超一行出现省略号。</p>
    <div class="demo-hall demo1">
      <nutcat-hall
        :data="[data1, params]"
        tag="arrow-go"
        imgWidth="90"
        imgHeight="44"
        bgColor="#820C00"
        col="1"
        type="normal-1"
      >
      </nutcat-hall>
    </div>
    <h2>类型：normal-2</h2>
    <p class="type">一行一个会场布局，由名称+利益点+进入标签+图片组成。文字溢出出现省略号。</p>
    <div class="demo-hall demo2">
      <nutcat-hall
        :data="[data2, params]"
        tag="arrow-full"
        imgWidth="90"
        imgHeight="44"
        bgColor="#820C00"
        col="1"
        type="normal-2"
      >
      </nutcat-hall>
    </div>
    <h2>类型：normal-3</h2>
    <p class="type">一行二个会场布局，图片和内容区域左右布局。标题和利益点均为一行。</p>
    <div class="demo-hall demo3">
      <nutcat-hall
        rowType="flex"
        gutter="2"
        :data="[data.list, params]"
        imgWidth="44"
        imgHeight="44"
        col="2"
        type="normal-3"
      >
      </nutcat-hall>
    </div>
    <h2>类型：normal-4</h2>
    <p class="type">一行二个会场布局，图片和内容区域左右布局。右边内容区域3行以上。</p>
    <div class="demo-hall demo4">
      <nutcat-hall
        rowType="flex"
        gutter="1"
        :data="data4"
        descRow="2"
        col="2"
        type="normal-4"
      >
      </nutcat-hall>
    </div>
    <div class="demo-hall demo5">
      <nutcat-hall
        rowType="flex"
        gutter="3"
        :data="data5"
        tag="arrow-go"
        nameColor="#fff"
        descColor="#fff"
        bgColor="#820C00"
        col="2"
        type="normal-4"
      >
      </nutcat-hall>
    </div>
    <h2>类型：normal-5</h2>
    <p class="type">一行多个会场布局，白底图和内容区域上下布局。支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-hall demo6">
      <nutcat-hall
        rowType="flex"
        gutter="2"
        :data="data6"
        imgHeight="76"
        col="3"
        type="normal-5"
      >
      </nutcat-hall>
    </div>
    <div class="demo-hall demo7">
      <nutcat-hall
        rowType="flex"
        gutter="2"
        :data="data7"
        imgHeight="76"
        col="3"
        type="normal-5"
      >
      </nutcat-hall>
    </div>
    <div class="demo-hall demo8">
      <nutcat-hall
        rowType="flex"
        gutter="1"
        :data="data8"
        imgWidth="71"
        imgHeight="71"
        col="4"
        type="normal-5"
      >
      </nutcat-hall>
    </div>
    <div class="demo-hall demo9">
      <nutcat-hall
        rowType="flex"
        gutter="1"
        :data="data9"
        imgWidth="71"
        imgHeight="71"
        col="4"
        type="normal-5"
      >
      </nutcat-hall>
    </div> -->
    <!-- <h2>类型：normal-6</h2>
    <p class="type">一行多个会场布局，氛围图和内容区域上下布局。支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-hall demo10">
      <nutcat-hall
        rowType="flex"
        gutter="3"
        :data="data10"
        imgWidth="117"
        imgHeight="105"
        src="https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png"
        name="会场名称"
        desc="满199减100"
        col="3"
        type="normal-6"
      >
      </nutcat-hall>
    </div>
    <h2>类型：normal-7</h2>
    <p class="type">一行多个会场布局，上面是文字下面是图片。支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-hall demo11">
      <nutcat-hall
        rowType="flex"
        gutter="3"
        :data="data11"
        imgWidth="57"
        imgHeight="57"
        bgColor="#820C00"
        col="3"
        type="normal-7"
      >
      </nutcat-hall>
    </div>
    <h2>类型：normal-8</h2>
    <p class="type">一行多个会场布局，上面是文字下面是图片。文字内容区域增加了 `bgTopColor`、`bgTopUrl` 设置背景颜色和图片，支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-hall demo12">
      <nutcat-hall
        rowType="flex"
        gutter="1"
        :data="data12"
        imgWidth="65"
        imgHeight="65"
        tag="arrow-go"
        bgTopColor="#820C00"
        col="4"
        type="normal-8"
      >
      </nutcat-hall>
    </div> -->
    <!-- <h2>类型：left-1</h2>
    <p class="type">一拖二个半</p>
    <div class="demo-hall demo13">
      <nutcat-hall 
        leftSpan="8"
        name="会场名称"
        desc="利益点利益点利益点利益点"
        bgColor="#830101"
        type="left-1"
      >
        <template slot="left">
          <nutcat-button afterIcon="arrow-normal" borderColor="#fff" txtColor="#fff">立即查看</nutcat-button>
          <nut-button color="#7232dd">单色按钮</nut-button>
        </template>
        <template slot="right">
          <nutcat-col :span="12" v-for="(item, index) in (productData.list || '')" :key="index">
            <nutcat-product 
              :name="item.name"
              tag="源头好物"
              :price="item.pPrice"
              :src="item.image"
              col="3"
            >
            </nutcat-product>
          </nutcat-col>
        </template>
      </nutcat-hall>
    </div> -->
    <!-- <h2>类型：free-1</h2>
    <p class="type">一行一个会场左右布局。通过具名 `slot` 的 `left`、`right` 自定义内容。</p>
    <div class="demo-hall demo-free1">
      <nutcat-hall :data="data1" bgColor="#820C00" col="1" type="free-1">
        <template slot="left">
          <nutcat-text class="sub-name" row="1">京东美妆</nutcat-text>
          <nutcat-text class="sub-desc" row="1">
            全场满999减200
            <nutcat-icon class="sub-tag" type="arrow-full"></nutcat-icon>
          </nutcat-text>
        </template>
        <template slot="right">
          <nutcat-image
            class="img-box"
            :width="90"
            :height="44"
            src="https://img11.360buyimg.com/imagetools/jfs/t1/176928/22/13163/23498/60e65cffE9eda1beb/5267b71a88705447.png"
          >
          </nutcat-image>
        </template>
      </nutcat-hall>
    </div>
    <p class="type">一行二个会场左右布局。通过具名 `slot` 的 `left`、`right` 自定义内容。</p>
    <div class="demo-hall demo-free2">
      <nutcat-hall
        rowType="flex"
        gutter="2"
        :data="data3"
        col="2"
        type="free-1"
      >
        <template slot="left">
          <nutcat-image
            class="img-box"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/184366/12/13604/18481/60e6e839E0d7a3bfd/e242fa7889e7d39a.png"
            width="57"
            height="57"
          >
          </nutcat-image>
        </template>
        <template slot="right">
          <nutcat-tag class="sub-tag" type="red-gradient">
            <nutcat-icon
              style="font-size: 10px;vertical-align: initial"
              color="#fff"
              type="clock"
            ></nutcat-icon>
            正在秒杀
          </nutcat-tag>
          <nutcat-text class="sub-name" row="1">品牌闪购</nutcat-text>
          <nutcat-text class="sub-desc" row="1">超值单品9.9</nutcat-text>
        </template>
      </nutcat-hall>
    </div>
    <p class="type">一行多个会场上下布局。通过具名 `slot` 的 `top`、`bottom` 自定义内容。</p>
    <div class="demo-hall demo-free3">
      <nutcat-hall
        rowType="flex"
        gutter="2"
        :data="data6"
        bgColor="#820C00"
        col="3"
        type="free-1"
      >
        <template slot="top">
          <nutcat-image
            class="img-box"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/184366/12/13604/18481/60e6e839E0d7a3bfd/e242fa7889e7d39a.png"
            width="76"
            height="76"
          >
          </nutcat-image>
        </template>
        <template slot="bottom">
          <div class="hall-content">
            <nutcat-tag class="sub-tag" type="red-gradient">
              <nutcat-icon
                style="font-size: 10px;vertical-align: initial"
                color="#fff"
                type="clock"
              ></nutcat-icon>
              正在秒杀
            </nutcat-tag>
            <nutcat-text class="sub-name" color="#fff" row="1">会场名称</nutcat-text>
            <nutcat-text class="sub-desc" color="#fff" row="1">满199减100</nutcat-text>
          </div>
        </template>
      </nutcat-hall>
    </div> -->
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('hall');
// import connectData  from '@/utils/connect';
import data from './data.js';
// console.log('connectData', connectData)
export default createDemo({
  data() {
    return {
      data: {},
      params: {},
      data5: {},
      data6: {},
      data7: {},
      data8: {},
      data9: {},
      productData: {}
    };
  },
  methods: {
  },
  mounted() {
    this.data = data;
    console.log('data 0', this.data)
    this.params = {
      cName: ['name'],
      cDesc: ['desc', 'extension.shopInfo.desc', '"火爆热卖中"'],
      cBg: false,
      cImage: ['"https://img11.360buyimg.com/imagetools/jfs/t1/176928/22/13163/23498/60e65cffE9eda1beb/5267b71a88705447.png"'],
      cLogo: ['"https://img12.360buyimg.com/imagetools/jfs/t1/38529/35/16342/2610/60a932b8Ee8863f19/e7815621d25695a0.png"']
    }
    // this.productData = productData;

    this.data6 = [
      {
        name: '标签会场名称',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      },
      {
        name: '标签会场名称',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      },
      {
        name: '标签会场名称',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      }
    ];
    this.data7 = [
      {
        name: '标签会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      },
      {
        name: '标签会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      },
      {
        name: '标签会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      }
    ];
    this.data8 = [
      {
        name: '会场名称',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      }
    ];
    this.data8 = [
      {
        name: '会场名称',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      }
    ];
    this.data9 = [
      {
        name: '会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
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
  .demo-hall {
    margin-bottom: 5px;
  }
}
</style>
