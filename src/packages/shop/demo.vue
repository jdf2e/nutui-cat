<template>
  <div class="demo">
    <!-- <h2>类型：normal-1</h2>
    <p class="type">一行一个店铺布局，由品牌logo+文字+进入标签组成。适合短利益点。</p>
    <div class="demo-shop demo1">
      <NutShop
        :data="[data1, params]" 
        col="1" 
        type="normal-1" 
        tag="GO"
        nameRow="1"
        bgColor="#820C00"
      >
      </NutShop>
    </div>
    <h2>类型：normal-2</h2>
    <p class="type">一行一个店铺布局，由品牌logo+名称+运营语+利益点+进入标签组成。适合长利益点。</p>
    <div class="demo-shop">
      <NutShop
        :data="[data2, params]" 
        col="1" 
        type="normal-2" 
        descRow="1"
        bgColor="#820C00"
      >
        <NutTag
          slot="tag"
          class="tag-go"
          radius="30px"
          color="#fff"
          bgColor="rgb(0, 0, 0)"
          afterIcon="arrow-full"
        >
          进入
        </NutTag>
        <div class="tag-box">
          <NutTag type="red-light">
            <span slot="preSlot">满减</span>
            满1000减300券
          </NutTag>
          <NutTag type="red-light">
            <span slot="preSlot">折</span>
            全场3折起
          </NutTag>
          <NutTag type="red-light">
            其他利益点
          </NutTag>
        </div>
      </NutShop>
    </div>
    <h2>类型：normal-3</h2>
    <p class="type">一行二个店铺布局，左右结构，左边图片，右边文字区域。</p>
    <div class="demo-shop demo3">
      <NutShop
        :data="[data3, params]" 
        rowType="flex"
        gutter="1"
        col="2" 
        type="normal-3" 
      >
      </NutShop>
    </div>
    <h2>类型：normal-4</h2>
    <p class="type">一行多个店铺布局，上下结构，支持一行三个、一行三个半、一行四个等。</p>
    <div class="demo-shop demo4">
      <NutShop
        :data="[data4, params]" 
        rowType="flex"
        gutter="2"
        col="3" 
        type="normal-4" 
      >
      </NutShop>
    </div>
    <div class="demo-shop demo5">
      <NutShop
        :data="[data5, params]" 
        rowType="flex"
        gutter="2"
        col="3" 
        type="normal-4" 
      >
      </NutShop>
    </div>
    <div class="demo-shop">
      <NutShop
        :data="[data6, params]" 
        rowType="flex"
        gutter="1"
        col="4" 
        type="normal-4" 
      >
      </NutShop>
    </div>
    <h2>类型：normal-5</h2>
    <p class="type">一行多个店铺布局，上下结构，上边图片，下边文字区域。支持一行二个、一行三个、一行三个半、一行四个等。</p>
    <div class="demo-shop">
      <NutShop
        :data="[data7, params]" 
        rowType="flex"
        gutter="3"
        col="3" 
        type="normal-5" 
      >
      </NutShop>
    </div>
    <div class="demo-shop">
      <NutShop
        :data="[data8, params]" 
        rowType="flex"
        gutter="3"
        col="3" 
        type="normal-5" 
      >
      </NutShop>
    </div>
    <p class="type">通过 `slot` 增加自定义内容，例如领券按钮。</p>
    <div class="demo-shop demo6">
      <NutShop
        :data="[data9, params]" 
        rowType="flex"
        gutter="3"
        col="2" 
        type="normal-5" 
      >
        <div class="btn-follow">+关注 领30元券</div>
      </NutShop>
    </div>
    <div class="demo-shop demo3-5">
      <NutShop
        :data="[data10, params]" 
        rowType="flex"
        gutter="3"
        col="3" 
        type="normal-5" 
      >
        <div class="btn-follow">+关注 领30元券</div>
      </NutShop>
    </div>
    <p class="type">增加 `scrollX` 支持左右滑动，通过 `slot` 增加自定义内容，例如直播标签</p>
    <div class="demo-shop demo-s3">
      <NutShop
        scrollX
        :data="[data11, params]" 
        rowType="flex"
        gutter="1"
        col="3" 
        type="normal-5" 
      >
        <NutTag type="live-on">直播中</NutTag>
      </NutShop>
    </div>
    <h2>类型：lbs</h2>
    <p class="type">一行多个店铺布局，上下结构，适用于 lbs 场景。支持一行二个、一行三个、一行三个半、一行四个等。</p>
    <div class="demo-shop demo-s2">
      <NutShop
        scrollX
        :data="[data12, params]" 
        rowType="flex"
        gutter="3"
        col="3" 
        type="lbs" 
      >
        <NutTag slot="tag" class="sub-tag" type="red-light"
        >满199减100</NutTag>
      </NutShop>
    </div>
    <h2>类型：feed-1</h2>
    <p class="type">一行二个店铺布局，上下结构，适用于 feed 流场景。</p>
    <div class="demo-shop">
      <NutShop
        scrollX
        :data="[data13, params]" 
        tag="arrow-go"
        rowType="flex"
        gutter="3"
        col="2" 
        type="feed-1" 
      >
        <NutTag slot="tag" class="sub-tag" type="red-light"
        >满199减100</NutTag>
      </NutShop>
    </div>
    <h2>类型：left</h2>
    <p class="type">一拖二</p>
    <div class="demo-shop demol1-1">
      <NutRow type="flex">
        <NutCol :span="8" class="shop-left">
          <NutShop
            desc="满199减100"
            logo="https://img14.360buyimg.com/imagetools/jfs/t1/178006/28/13004/7510/60e3f7c1E7500c2a7/d15fa4a3da6b1501.png"
            bgColor="#830101"
            type="left"
          >
            <NutTag type="live-on">直播中</NutTag>
            <NutButton
              afterIcon="arrow-full"
              borderColor="#fff"
              txtColor="#fff"
              >进店看看</NutButton
            >
          </NutShop>
        </NutCol>
        <NutRow type="flex" class="shop-right">
          <NutCol
            :span="12"
            v-for="(item, index) in productData.list || ''"
            :key="index"
          >
            <NutProduct
              :name="item.name"
              tag="源头好物"
              :price="item.pPrice"
              :src="item.image"
              col="3"
            >
            </NutProduct>
          </NutCol>
        </NutRow>
      </NutRow>
    </div> -->
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('shop');
// import data from './data.js';
// import productData from './data.js';
export default createDemo({
  data() {
    return {
      params: {
        cLogo: ['logoUrl']
      },
      productData: {},
      data1: [
        {
          name: '品牌店铺名称',
          desc: '利益点满399减300',
          logoUrl:
            'https://img14.360buyimg.com/imagetools/jfs/t1/179875/7/12879/6873/60e3c269E34d46a04/676b02596f2e9ceb.png'
        }
      ],
      data2: {},
      data3: {},
      data4: {},
      data5: {},
      data6: {},
      data7: {},
      data8: {},
      data9: {},
      data10: {},
      data11: {},
      data12: {},
      data13: {},
    };
  },
  mounted() {
    console.log('demo')
    this.productData = [
      {
        name: 'CAMILA&KORALI限定斜挎包包',
        desc: '更多买点更多买点',
        linePrice: '2999',
        price: '1999',
        src:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
      }
    ];
    this.data1 = [
      {
        name: '品牌店铺名称',
        desc: '利益点满399减300',
        logoUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/179875/7/12879/6873/60e3c269E34d46a04/676b02596f2e9ceb.png'
      }
    ];
    this.data2 = [
      {
        name: '品牌店铺名称',
        desc: '有气质的运营语十二字以内',
        logo:
          'https://img14.360buyimg.com/imagetools/jfs/t1/179875/7/12879/6873/60e3c269E34d46a04/676b02596f2e9ceb.png'
      }
    ];
    this.data3 = [
      {
        name: '资生堂进口专卖',
        desc: '单品69元起',
        logo: 'https://img11.360buyimg.com/imagetools/jfs/t1/177426/30/12870/5564/60e3b907Efe15e7c1/b3c982266b83c546.png'
      }, {
        name: '资生堂进口专卖',
        desc: '单品69元起',
        logo: 'https://img11.360buyimg.com/imagetools/jfs/t1/177426/30/12870/5564/60e3b907Efe15e7c1/b3c982266b83c546.png'
      }
    ];
    this.data4 = [
      {
        desc: '满千减百狂欢',
        logo: 'https://img14.360buyimg.com/imagetools/jfs/t1/172656/3/18637/6643/60e3bb70E996a14ca/861ce485c3036928.png'
      }, {
        desc: '满千减百狂欢',
        logo: 'https://img14.360buyimg.com/imagetools/jfs/t1/172656/3/18637/6643/60e3bb70E996a14ca/861ce485c3036928.png'
      }, {
        desc: '满千减百狂欢',
        logo: 'https://img14.360buyimg.com/imagetools/jfs/t1/172656/3/18637/6643/60e3bb70E996a14ca/861ce485c3036928.png'
      }
    ];
    this.data5 = [
      {
        name: '资生堂进口专卖',
        desc: '满千减百狂欢',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/185638/30/12045/7305/60e3bd5dEa06a3bf5/fb073dc4992683bf.png'
      }, {
        name: '资生堂进口专卖',
        desc: '满千减百狂欢',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/185638/30/12045/7305/60e3bd5dEa06a3bf5/fb073dc4992683bf.png'
      }, {
        name: '资生堂进口专卖',
        desc: '满千减百狂欢',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/185638/30/12045/7305/60e3bd5dEa06a3bf5/fb073dc4992683bf.png'
      }
    ];
    this.data6 = [
      {
        desc: '特卖4折起',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/178973/20/12948/7386/60e44280Ed93956a7/ee6b8b3c36d4d903.png'
      }, {
        desc: '特卖4折起',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/178973/20/12948/7386/60e44280Ed93956a7/ee6b8b3c36d4d903.png'
      }, {
        desc: '特卖4折起',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/178973/20/12948/7386/60e44280Ed93956a7/ee6b8b3c36d4d903.png'
      }, {
        desc: '特卖4折起',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/178973/20/12948/7386/60e44280Ed93956a7/ee6b8b3c36d4d903.png'
      }
    ];
    this.data7 = [
      {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/173910/14/18452/4865/60e3c11dEe24a049b/60e1e1ed280b56ac.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/184321/21/12968/89947/60e3b907E99089cd7/71f211038718894a.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/173910/14/18452/4865/60e3c11dEe24a049b/60e1e1ed280b56ac.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/184321/21/12968/89947/60e3b907E99089cd7/71f211038718894a.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/173910/14/18452/4865/60e3c11dEe24a049b/60e1e1ed280b56ac.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/184321/21/12968/89947/60e3b907E99089cd7/71f211038718894a.png'
      }
    ];
    this.data8 = [
      {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/179875/7/12879/6873/60e3c269E34d46a04/676b02596f2e9ceb.png',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/180975/16/12965/81810/60e3c271E6846510d/b957175211011d62.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/179875/7/12879/6873/60e3c269E34d46a04/676b02596f2e9ceb.png',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/180975/16/12965/81810/60e3c271E6846510d/b957175211011d62.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/179875/7/12879/6873/60e3c269E34d46a04/676b02596f2e9ceb.png',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/180975/16/12965/81810/60e3c271E6846510d/b957175211011d62.png'
      }
    ];
    this.data9 = [
      {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/181672/14/12861/8907/60e42f20E38fae235/1739835e3dbdb858.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/185323/14/13016/209857/60e42e83Ee77310f0/33e69bcea6f13cb7.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/181672/14/12861/8907/60e42f20E38fae235/1739835e3dbdb858.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/185323/14/13016/209857/60e42e83Ee77310f0/33e69bcea6f13cb7.png'
      }
    ];
    this.data10 = [
      {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/181672/14/12861/8907/60e42f20E38fae235/1739835e3dbdb858.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/185323/14/13016/209857/60e42e83Ee77310f0/33e69bcea6f13cb7.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/181672/14/12861/8907/60e42f20E38fae235/1739835e3dbdb858.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/185323/14/13016/209857/60e42e83Ee77310f0/33e69bcea6f13cb7.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/181672/14/12861/8907/60e42f20E38fae235/1739835e3dbdb858.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/185323/14/13016/209857/60e42e83Ee77310f0/33e69bcea6f13cb7.png'
      }
    ];
    this.data11 = [
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
    ];
    this.data12 = [
      {
        name: '奈雪的茶（宝安店）',
        distance: '2.3km',
        desc: '全场5折起',
        pictureUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/180880/27/12966/49968/60e5716aE5ea88e4a/d8dcf8a43eec9dbe.png'
      }, {
        name: '奈雪的茶（宝安店）',
        distance: '2.3km',
        pictureUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/180880/27/12966/49968/60e5716aE5ea88e4a/d8dcf8a43eec9dbe.png'
      }, {
        name: '奈雪的茶（宝安店）',
        distance: '2.3km',
        pictureUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/180880/27/12966/49968/60e5716aE5ea88e4a/d8dcf8a43eec9dbe.png'
      }
    ];
    this.data13 = [
      {
        name: 'XXX自营旗舰店',
        desc: '利益点/运营语',
        price: '199',
        logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/173910/14/18452/4865/60e3c11dEe24a049b/60e1e1ed280b56ac.png',
        pictureUrl: '//m.360buyimg.com/babel/s354x354_jfs/t1/169633/21/20537/104213/60821d78E618f6f68/3446b6abe26a05ce.jpg!q50.jpg'
      }, {
        name: '旗舰店',
        desc: '利益点/运营语',
        price: '199',
        logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/173910/14/18452/4865/60e3c11dEe24a049b/60e1e1ed280b56ac.png',
        pictureUrl: '//m.360buyimg.com/babel/s354x354_jfs/t1/169633/21/20537/104213/60821d78E618f6f68/3446b6abe26a05ce.jpg!q50.jpg'
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
.demo-shop {
  margin-bottom: 5px;
}


.demol1-1 {
  .shop-left {
    width: 108px;
  }
  .shop-right {
    width: calc(100% - 108px);
    overflow-x: auto;
  }
  .nutcat-tag-live-on {
    position: absolute;
    left: 6px;
    top: 6px;
  }
}
</style>
