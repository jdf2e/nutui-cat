<template>
  <div class="demo">
    <h2>秒杀</h2>
    <nutcat-tab
      style="height: 45px"
      customClass="tabItem"
      activeClass="tabActive"
      :activeIndex = 'activeIndex'
      :data="[list,{cName:['title'],cDesc:['desc']}]"
      :showLine="false"
      type="complex"
      @click="(data,i)=>{activeIndex=i}"
    ></nutcat-tab>

    <div class="demo-countdown">
      距离本场结束：
      <nut-countdown v-model="resetTime" :endTime="end">
        <div class="countdown-part-box">
          <div class="part-item h">{{ resetTime.h }}</div>
          <span class="part-item-symbol">:</span>
          <div class="part-item m">{{ resetTime.m }}</div>
          <span class="part-item-symbol">:</span>
          <div class="part-item s">{{ resetTime.s }}</div>
        </div>
      </nut-countdown>
    </div>

    <nutcat-row>
      <nutcat-col :span="8" v-for="(item, index) in data6" :key="index">
        <nutcat-product
          :data="[
            item,
            { cName: ['name'], cImage: ['image'], cPrice: ['cPrice'] },
          ]"
          iconType="qiang"
          nameRow="2"
          col="3"
          type="normal-5"
        >
          <nutcat-tag class="top-tag tl" type="red-gradient"
            >满199减100</nutcat-tag
          >
        </nutcat-product>
      </nutcat-col>
    </nutcat-row>

    <h2>直降</h2>

    <nutcat-row>
      <nutcat-col :span="8" v-for="(item, index) in data6" :key="index">
        <nutcat-product
          rowType="flex"
          :data="[item, { cName: ['name'], cImage: ['image'],cPrice:['price'] }]"
          iconType=""
          pricePre="抢购价"
          nameRow="2"
          col="3"
          type="normal-4"
          :bottomOperate="bottomOperate"
          linePricePre="日常价"
        >
          <nutcat-tag class="top-tag tl" type="rank-hot">满199减100</nutcat-tag>
        </nutcat-product>
      </nutcat-col>
    </nutcat-row>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo } = createComponent("productlimit");
export default createDemo({
  props: {},
  data() {
    return {
      list: [
        {
          id: 0,
          title: "8:00",
          desc: "已结束",
        },
        {
          id: 1,
          title: "14:00",
          desc: "抢购中",
        },
        {
          id: 2,
          title: "16:00",
          desc: "即将开始",
        },
        {
          id: 3,
          title: "18:00",
          desc: "即将开始",
        },
        {
          id: 4,
          title: "20:00",
          desc: "即将开始",
        },
      ],
      activeIndex:0,
      data6: [
        {
          name: "商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名",
          price: "199",
          linePrice: "499",
          image:
            "https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png",
        },
        {
          name: "商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名",
          price: "199",
          linePrice: "499",
          image:
            "https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png",
        },
        {
          name: "商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名",
          price: "199",
          linePrice: "499",
          image:
            "https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png",
        },
      ],
      end: Date.now() + 50 * 1000,
      resetTime: {
        d: "1",
        h: "00",
        m: "00",
        s: "00",
      },
      bottomOperate: {
        desc: "马上抢",
        position:'right',
        renderIcon: (h) => {
          return h('nutcat-icon',{
            props:{
              type:"arrow-full",
              color:"#ffffff"
            }
          });
        },
        click: (data) => {
          console.log("跳转详情", data);
        },
      },
    };
  },
  methods: {},
});
</script>

<style lang="scss">
.tabItem {
  height: 42px;
  background: #820c00;
  color: #fff;
  .tabActive {
    background: #fdedec;
    color: #2e2d2d;
  }
}

.demo-countdown {
  display: flex;
  align-items: center;
  margin: 12px 0;
  font-size: 12px;
  font-weight: bold;
  color: #e8220e;

  .countdown-part-box {
    display: flex;
    align-items: center;

    .part-item {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 14px;
      background: #e8220e;
      color: #fff;
      font-size: 10px;
      border-radius: 4px;
    }

    .part-item-symbol {
      margin: 0 5px;
    }
  }
}
</style>
  
  