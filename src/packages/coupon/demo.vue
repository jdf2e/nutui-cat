<template>
  <div class="demo">
    <h2>类型：normal</h2>
    <p class="type">普通优惠券-无图</p>
    <div class="demo-coupon demo1">
      <nutcat-row type="flex">
        <nutcat-col class="mf-col-1" :span="8" v-for="(item, index) in data" :key="index">
          <nutcat-coupon 
            :data="[item, {
              cImage: false,
              cLabel: ['desc']
            }]"
            type='normal'
            col="3"
            @click-report="handelClick1(item)"
          >
          </nutcat-coupon>
        </nutcat-col>
      </nutcat-row>
      <!-- <nutcat-row>
        <nutcat-col :span="8" v-for="(item, index) in data.list" :key="index">
          <nutcat-coupon 
            :item="[item, params]"
            type='normal'
            @click-report="handelClick"
          >
          </nutcat-coupon>
        </nutcat-col>
      </nutcat-row> -->
    </div>
    <p class="type">普通优惠券-有图</p>
    <div class="demo-coupon demo3">
      <nutcat-row>
        <nutcat-col :span="8" v-for="(item, index) in data" :key="index">
          <nutcat-coupon 
            :data="[item, {
              cImage: true,
              cLabel: ['desc']
            }]"
            col="3"
            type='normal'
          >
          </nutcat-coupon>
        </nutcat-col>
      </nutcat-row> 
    </div>
    <!-- <h2>类型：finance</h2>
    <p class="type">金融优惠券-无图</p>
    <div class="demo-coupon demo2">
      <nutcat-row>
        <nutcat-col :span="8" v-for="(item, index) in data.list" :key="index">
          <nutcat-coupon 
            :item="item"
            :src="false"
            type='finance'
            @click-report="handelClick(state)"
          >
          </nutcat-coupon>
        </nutcat-col>
      </nutcat-row>
    </div> -->
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('coupon');
import data from './data.js' ;
export default createDemo({
  data() {
		return {
      data: [
        {
          pictureUrl: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png",
          extension: {
            limitStr: "限购 [senmum红木家具旗舰店] 店铺部分商品",
            quota: "205.0",
            disCount: "10",
            couponStyle: '',
            couponType: '',
            couponKind: '0',
            cpnResultCode: '0',
            soldOut: '0',
            subSku: '',
            endTime: '2021-08-31 23:59:59',
          },
          comments: ["$提报备注"]
        },{
          pictureUrl: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png",
          extension: {
            limitStr: "限购 [senmum红木家具旗舰店] 店铺部分商品",
            quota: "500",
            disCount: "100",
            couponStyle: '',
            couponType: '',
            couponKind: '0',
            cpnResultCode: '16',
            soldOut: '1',
            subSku: '',
            endTime: '2021-08-31 23:59:59',
            src: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png"
          },
          comments: ["$提报备注"]
        },{
          pictureUrl: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png",
          extension: {
            limitStr: "限购 [senmum红木家具旗舰店] 店铺部分商品",
            quota: "1500",
            disCount: "20",
            couponStyle: '',
            couponKind: '0',
            cpnResultCode: '14',
            soldOut: '0',
            couponType: '',
            subSku: '',
            endTime: '2021-08-31 23:59:59',
            src: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png"
          },
          comments: ["$提报备注"]
        }
      ]
    };
	},
  mounted() {
    // this.data = data;
    console.log('data', this.data)
  },
  methods: {
    handelClick(state: string) {
      console.log('maidian', state)
    }
  }
});
</script>

<style lang="scss" scoped>
#app {
  .demo {
  }
}
.demo1 {
  overflow-x: auto;
  .nutcat-coupon {
    margin-left: 6px;
    &:first-child {
      margin-left: 0;
    }
  }
}
.mf-col-1 {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
}
.nutcat-coupon {
  position: relative;
  margin-left: 6px;
  flex: 0 0 auto;
  &:first-child {
    margin-left: 0;
  }
}
</style>
