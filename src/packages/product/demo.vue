<template>
  <div class="demo">
    <!-- <h2>类型：normal-1</h2>
    <p class="type">一行一个商品布局，左右结构。支持一行一个、一行一个半等。</p>
    <div class="demo-product">
      <NutProduct :data="[data1, params]" col="1" type="normal-1" nameRow="1">
        <template slot="preName">
          <NutTag type="618">618</NutTag>
        </template>
        <template slot="tag">
          <NutTag class="sub-tag" type="red-pink">利益点利益点</NutTag>
          <NutTag class="sub-tag" type="red-pink">利益点利益点</NutTag>
        </template>
      </NutProduct>
    </div>
    <p class="type">增加氛围图、标签、抢购按钮。</p>
    <div class="demo-product">
      <NutProduct
        :data="[data2, params]"
        col="1"
        tag="qiang"
        type="normal-1"
        bgUrl="//img10.360buyimg.com/imagetools/jfs/t1/6090/8/11750/133338/60c09116E0c991a9f/cfe358af6388e40f.png"
      >
        <template slot="tag">
          <NutTag class="sub-tag" type="red-pink">277天最低价</NutTag>
          <NutTag class="sub-tag" type="red-pink">放心购标签</NutTag>
        </template>
        <NutTag class="top-tag tl" type="fire">某某商品top款</NutTag>
      </NutProduct>
    </div>
    <div class="demo-product demo-s1">
      <NutProduct
        rowType="flex"
        gutter="2"
        scrollX
        :data="[data3, params]"
        tag="qiang"
        nameRow="1"
        col="1"
        type="normal-1"
      >
        <template slot="tag">
          <NutTag class="sub-tag" type="red-pink">277天最低价</NutTag>
          <NutTag class="sub-tag" type="red-pink">放心购标签</NutTag>
        </template>
        <NutTag class="top-tag tl" type="red-gradient"
          >全年历史最低价</NutTag
        >
      </NutProduct>
    </div>
    <h2>类型：normal-2</h2>
    <p class="type">一行一个商品布局，左右结构。与 normal-1 的区别在于利益点、划线价的顺序结构有所调整。</p>
    <div class="demo-product">
      <NutRow>
        <nutcat-col :span="24">
          <NutProduct
            :data="[data4, params]"
            col="1"
            type="normal-2"
            nameRow="1"
            linePricePre="日常价"
          >
            <template slot="priceSlot">
              <NutTag class="price-tag-pre" type="red" radius="2px"
                >秒杀</NutTag
              >
              预估到手价
              <NutPrice price="1649" class="price" />
            </template>
            <template slot="tag">
              <NutTag class="sub-tag" type="red-light"
                >利益点利益点利益点</NutTag
              >
              <NutTag class="sub-tag" type="red-light"
                >利益点利益点利益点</NutTag
              >
            </template>
          </NutProduct>
        </nutcat-col>
      </NutRow>
    </div>
    <h2>类型：normal-3</h2>
    <p class="type"
      >一行一个商品布局，左右结构。适用于秒杀限量商品，去抢购的进度条显示剩余库存量比例。</p
    >
    <p class="type"
      >2. 秒杀未开始时，按键显示“提醒我”，点击后，变为“已提醒”；</p
    <div class="demo-product">
      <NutProduct
        :data="[data5, params]"
        col="1"
        type="normal-3"
      >
        <template slot="tag">
          <NutTag class="sub-tag" type="red-pink">限量5000件</NutTag>
          <NutTag class="sub-tag" type="red-pink">限量5000件</NutTag>
        </template>
        <template slot="priceSlot">
          <NutTag class="price-tag-pre" type="red" radius="2px"
            >秒杀</NutTag
          >
          <NutPrice price="1649" class="price" />
        </template>
        <NutTag class="top-tag tl" type="red-gradient"
          >全年历史最低价</NutTag
        >
      </NutProduct>
    </div>
    <h2>类型：normal-4</h2>
    <p class="type">一行多个商品布局，上下结构的常规类型，支持一行三个、一行三个半等。</p>
    <div class="demo-product demo-3">
      <NutProduct
        rowType="flex"
        gutter="2"
        :data="[data6, params]"
        col="3"
        type="normal-4"
      >
        <template slot="tag">
          <NutTag class="sub-tag" type="red-light">噱头标签</NutTag>
        </template>
        <NutTag class="sub-tag tl" type="red-gradient">
          <NutIcon class="sub-icon" type="crown"></NutIcon>
          数码销量TOP1
        </NutTag>
      </NutProduct>
    </div>
    <div class="demo-product demo-s3">
      <NutProduct
        rowType="flex"
        gutter="1"
        :data="[data7, params]"
        col="3"
        type="normal-4"
        scrollX
      >
        <template slot="tag">
          <NutTag class="sub-tag" type="red-light">噱头标签</NutTag>
        </template>
        <NutTag class="sub-tag tl" type="red-gradient">
          <NutIcon class="sub-icon" type="crown"></NutIcon>
          数码销量TOP1
        </NutTag>
      </NutProduct>
    </div>
    <div class="demo-product">
      <NutProduct
        rowType="flex"
        gutter="1"
        :data="[data8, params]"
        nameRow="1"
        pricePre="预估到手价"
        col="4"
        type="normal-4"
        scrollX
      >
      </NutProduct>
    </div>
    <h2>类型：normal-5</h2>
    <p class="type">带购物车的常规类型，支持一行二个、一行三个、一行三个半等。</p>
    <div class="demo-product">
      <NutProduct
        rowType="flex"
        gutter="2"
        :data="[data6, params]"
        iconType="cart"
        nameRow="2"
        col="3"
        type="normal-5"
      >
        <template slot="preName">
          <NutTag type="618">618</NutTag>
        </template>
      </NutProduct>
    </div>
    <p class="type">一行二个商品，多用于底部 Feed 流。</p>
    <div class="demo-product">
      <NutProduct
        rowType="flex"
        gutter="3"
        :data="[data6, params]"
        iconType="cart"
        name="DYSON戴森吹风机便携家用电吹风负离子智能空调"
        nameRow="2"
        tag="满199减10"
        price="199"
        linePrice="499"
        src="https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png"
        col="2"
        type="normal-5"
      >
        <template slot="preName">
          <NutTag type="618">618</NutTag>
        </template>
        <template slot="priceAfter">
          <NutTag class="price-tag-after" type="plus-price"></NutTag>
        </template>
        <template slot="tag">
          <NutTag class="sub-tag" type="red-light">满199减10</NutTag>
          <NutTag class="sub-tag" type="red-light">利益点利益点</NutTag>
        </template>
      </NutProduct>
    </div>
    <div class="demo-product">
      <NutProduct
        rowType="flex"
        gutter="3"
        :data="[data6, params]"
        iconType="cart"
        name="京东好服务-洗衣机深度清洗"
        nameRow="1"
        price="199"
        linePrice="499"
        src="https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png"
        col="2"
        type="normal-5"
      >
        <template slot="preName">
          <NutTag type="618">618</NutTag>
        </template>
        <template slot="priceAfter">
          <NutTag class="price-tag-after" type="plus-price"></NutTag>
        </template>
        <template slot="tag">
          <NutTag class="sub-tag" type="red-light"
            >您最近浏览的商品正在秒杀</NutTag
          >
        </template>
        <template slot="desc">
          <NutText class="sub-desc">4.3万人购买</NutText>
        </template>
      </NutProduct>
    </div>
    <h2>类型：normal-6</h2>
    <p class="type">强化抢购氛围，支持一行二个、一行三个、一行三个半等。</p>
    <div class="demo-product">
      <NutProduct
        rowType="flex"
        gutter="3"
        :data="[data9, params]"
        nameRow="2"
        pricePre="拼团价"
        col="2"
        type="normal-6"
      >
        <template slot="preName">
          <NutTag type="618">618</NutTag>
        </template>
        <template slot="tag">
          <NutTag class="sub-tag" type="red-pink">闪购进行时</NutTag>
        </template>
      </NutProduct>
    </div>
    <div class="demo-product">
      <div class="demo-product">
        <NutProduct
          rowType="flex"
          gutter="2"
          :data="[data9, params]"
          nameRow="2"
          col="3"
          type="normal-6"
        >
        </NutProduct>
      </div>
    </div>
    <h2>类型：heart</h2>
    <p class="type">心跳曲线类型，支持一行一个、一行二个、一行三个等。</p>
    <div class="demo-product">
      <NutProduct
        :data="[data2, params]"
        nameRow="1"
        heartName="限时优惠价"
        col="1"
        type="heart"
      >
        <template slot="preName">
          <NutTag type="618">618</NutTag>
        </template>
        <template slot="tag">
          <NutTag class="sub-tag" type="red-pink">利益点利益点</NutTag>
        </template>
      </NutProduct>
    </div>
    <div class="demo-product">
      <NutProduct
        rowType="flex"
        gutter="3"
        :data="[data6, params]"
        heartName="N天最低价"
        nameRow="2"
        col="2"
        type="heart"
      >
        <template slot="preName">
          <NutTag type="618">618</NutTag>
        </template>
        <template slot="tag">
          <NutTag class="sub-tag" type="red-pink">闪购进行时</NutTag>
        </template>
      </NutProduct>
    </div>
    <div class="demo-product">
      <NutProduct
        rowType="flex"
        gutter="3"
        :data="[data6, params]"
        heartName="N天最低价"
        nameRow="2"
        col="3"
        type="heart"
      >
        <template slot="preName">
          <NutTag type="618">618</NutTag>
        </template>
        <template slot="tag">
          <NutTag class="sub-tag" type="red-pink">闪购进行时</NutTag>
        </template>
      </NutProduct>
    </div>
    <h2>类型：fold</h2>
    <p class="type">心跳折线类型，支持一行一个。</p>
    <div class="demo-product">
      <NutProduct
        :data="[data5, params]"
        nameRow="1"
        linePricePre="日常价"
        col="1"
        type="fold"
      >
        <template slot="priceSlot">
          <NutTag class="price-tag-pre" type="red" radius="2px"
            >秒杀</NutTag
          >
          限时优惠价
          <NutPrice price="1649" class="price" />
        </template>
      </NutProduct>
    </div>
    <h2>类型：feed-shop</h2>
    <p class="type">商品+店铺类型，多用于底部 Feed 流。</p>
    <div class="demo-product">
      <NutProduct
        rowType="flex"
        gutter="3"
        :data="[data6, params]"
        tag="满199减10"
        linePricePre="日常价"
        col="2"
        type="feed-shop"
      >
        <template slot="preName">
          <NutTag type="618">618</NutTag>
        </template>
        <template slot="priceAfter">
          <NutTag class="price-tag-after" type="plus-price"></NutTag>
        </template>
        <template slot="shop">
          <NutText class="shop-name">店铺名称</NutText>
          <NutText class="shop-desc"
            >接受预定，明日23:00开始营业</NutText
          >
        </template>
        <NutTag class="tl9" type="lbs">1.3km</NutTag>
      </NutProduct>
    </div>
    <h2>类型：normal-free</h2>
    <p class="type">一行一-自定义类型</p>
    <div class="demo-product">
      <NutRow>
        <nutcat-col :span="24">
          <NutProduct
            src="https://img12.360buyimg.com/imagetools/jfs/t1/185218/3/12954/50806/60ead6b5E2716e7ee/d51415655b04ad48.png"
            col="1"
            type="normal-free"
          >
            <template slot="rightSlot">
              <div class="product-content">
                <NutText class="sub-name" row="1">
                  <NutTag type="618">618</NutTag>
                  商品名HUAWEI Mate30 商品名商品名商品名
                </NutText>
                <NutText class="sub-desc" row="1">我是利益点啊</NutText>
                <NutTag class="sub-tag" type="red-pink"
                  >利益点利益点</NutTag
                >
                <NutTag class="sub-tag" type="red-pink"
                  >利益点利益点</NutTag
                >
              </div>
              <div class="product-bottom">
                <div class="price-wrap">
                  <div class="price-box">
                    <NutPrice price="1649" class="price" />
                  </div>
                  <div class="line-price-box">
                    京东价
                    <NutPrice class="line-price" :price="1999"></NutPrice>
                  </div>
                </div>
              </div>
            </template>
          </NutProduct>
        </nutcat-col>
      </NutRow>
    </div>
    <div class="demo-product">
      <NutRow>
        <nutcat-col :span="24">
          <NutProduct
            src="https://img12.360buyimg.com/imagetools/jfs/t1/185218/3/12954/50806/60ead6b5E2716e7ee/d51415655b04ad48.png"
            col="1"
            type="normal-free"
          >
            <template slot="rightSlot">
              <div class="product-content">
                <NutText class="sub-name" row="1">
                  <NutTag type="618">618</NutTag>
                  商品名HUAWEI Mate30 商品名商品名商品名
                </NutText>
                <NutText class="sub-desc" row="1">我是利益点啊</NutText>
                <NutTag class="sub-tag" type="red-pink"
                  >利益点利益点</NutTag
                >
                <NutTag class="sub-tag" type="red-pink"
                  >利益点利益点</NutTag
                >
              </div>
              <div class="product-bottom">
                <div class="price-wrap">
                  <div class="price-box">
                    <NutPrice price="1649" class="price" />
                  </div>
                  <div class="line-price-box">
                    京东价
                    <NutPrice class="line-price" :price="1999"></NutPrice>
                  </div>
                </div>
              </div>
            </template>
          </NutProduct>
        </nutcat-col>
      </NutRow>
    </div> -->
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('product');
// import data from './data.js';
export default createDemo({
  data() {
    return {
      params: {
        cName: ['name'],
        cDesc: ['desc', 'extension.shopInfo.desc', '"火爆热卖中"'],
        cImage: ['"https://img11.360buyimg.com/imagetools/jfs/t1/176928/22/13163/23498/60e65cffE9eda1beb/5267b71a88705447.png"'],
        cLogo: ['"https://img12.360buyimg.com/imagetools/jfs/t1/38529/35/16342/2610/60a932b8Ee8863f19/e7815621d25695a0.png"']
      },
      data1: {},
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
      data14: {}
    };
  },
  mounted() {
    // this.data = data;
    // console.log('data', data);
    this.data1 = [
      {
        name: 'CAMILA&KORALI限定斜挎包包',
        desc: '更多买点更多买点',
        linePrice: '2999',
        price: '1999',
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
      }
    ];
    this.data2 = [
      {
        name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',
        tag: '源头好物',
        pricePre: '狂欢价',
        linePrice: '2999',
        price: '1999',
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
      }
    ];
    this.data3 = [
      {
        name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',
        nameRow: '1',
        tag: '源头好物',
        pricePre: '狂欢价',
        linePrice: '299',
        price: '199',
        src:
          'https://img13.360buyimg.com/imagetools/jfs/t1/186714/12/12846/30194/60ebb6beEfeba0dc4/c24d1a0f8515d6f2.png'
      },
      {
        name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',
        nameRow: '1',
        tag: '源头好物',
        pricePre: '狂欢价',
        linePrice: '299',
        price: '199',
        src:
          'https://img13.360buyimg.com/imagetools/jfs/t1/186714/12/12846/30194/60ebb6beEfeba0dc4/c24d1a0f8515d6f2.png'
      }
    ];
    this.data4 = [
      {
        name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',
        nameRow: '1',
        tag: '源头好物',
        linePrice: '4999',
        image:
          'https://img12.360buyimg.com/imagetools/jfs/t1/185218/3/12954/50806/60ead6b5E2716e7ee/d51415655b04ad48.png'
      }
    ];
    this.data5 = [
      {
        name: 'CAMILA&KORALI限定斜挎包包',
        nameRow: '1',
        linePrice: '2999',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png'
      }
    ];
    this.data6 = [
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      }
    ];
    this.data7 = [
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      }
    ];
    this.data8 = [
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      }
    ];
    this.data9 = [
      {
        name: 'DYSON戴森吹风机吹风机吹风机吹风机吹风机吹风机',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177307/28/13383/31510/60ebf332E30234292/107cc03dce68edec.png'
      },
      {
        name: 'DYSON戴森吹风机吹风机吹风机吹风机吹风机吹风机',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177307/28/13383/31510/60ebf332E30234292/107cc03dce68edec.png'
      },
      {
        name: 'DYSON戴森吹风机吹风机吹风机吹风机吹风机吹风机',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177307/28/13383/31510/60ebf332E30234292/107cc03dce68edec.png'
      }
    ];
    this.data10 = [
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      }
    ];
    this.data11 = [
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
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
  .demo-product {
    margin-bottom: 5px;
    overflow: hidden;
    .top-tag {
      border-radius: 0 0 4px 0;
    }
    /deep/ .nutcat-tag-fire {
      border-radius: 0 0 8px 0;
    }
  }
}
.demo-3 {
  .nutcat-product {
    /deep/.line-price {
      color: #8c8c8c;
      text-decoration: none;
    }
  }
}
.demo-s3 {
  /deep/ .nutcat-col {
    width: 108px;
  }
}
.demo19 {
  padding: 12px;
  background: rgba(242, 242, 242, 1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  .nutcat-col {
    width: 216px;
    margin-left: 2px;
    &:first-child {
      margin-left: 0;
    }
  }
  .NutRow {
    overflow-x: auto;
  }
}
</style>
