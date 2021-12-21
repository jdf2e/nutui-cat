<template>
  <div class="demo">
    <h2>京贴 + PLUS</h2>
    <div class="demo-coupon">
      <NutRow :gutter="1">
        <NutCol :span="16">
          <NutText row="1" type="jtCoupon">
            头号京贴·跨店满减·可叠加
          </NutText>
          <div class="NutCoupon-bd demo1">
            <NutJtcoupon  v-for="(item, index) in (data.list || '').slice(0, 2)" :key="index"
              :item="item"
              type='normal'
              col="3"
              @click-report="handelClick"
            >
            </NutJtcoupon>
          </div>
        </NutCol>
        <NutCol :span="8">
          <NutText row="1" type="plusCoupon">
          <NutTag type="plus-couponHd"></NutTag>
            开通/续费PLUS得
          </NutText>
          <div class="NutCoupon-bd demo2">
            <NutJtcoupon  v-for="(item, index) in (data.list || '').slice(0, 1)" :key="index"
              :item="item"
              type='normal'
              col="3"
              @click-report="handelClick"
            >
            </NutJtcoupon>
          </div>
        </NutCol>
      </NutRow>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('jtCoupon');
import data from './data.js' ;
export default createDemo({
  data() {
		return {
      data: {}
    };
	},
  mounted() {
    this.data = [
      {
        limitStr: "限购 [senmum红木家具旗舰店] 店铺部分商品",
        quota: "5.0",
        disCount: "1.0",
        src: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png"
      },{
        limitStr: "限购 [senmum红木家具旗舰店] 店铺部分商品",
        quota: "5.0",
        disCount: "1.0",
        src: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png"
      },{
        limitStr: "限购 [senmum红木家具旗舰店] 店铺部分商品",
        quota: "5.0",
        disCount: "1.0",
        src: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png"
      }
    ];
    this.data = data;
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
  height: 100%;
  .demo {
    min-height: 100%;
    padding-bottom: 20px;
  }
}
.demo1 {
  .NutJtcoupon {
    width: 118px;
    margin-left: 2px;
    &:first-child {
      margin-left: 0;
    }
  }
}
.demo2 {
  .NutJtcoupon {
    width: 100%;
  }
}
</style>
