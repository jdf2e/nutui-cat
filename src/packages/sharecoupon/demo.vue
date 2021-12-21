<template>
  <div class="demo">
    <h2>分享领券</h2>
    <div class="demo-coupon demo1">
      <NutRow>
        <NutCol :span="8" v-for="(item, index) in data.list" :key="index">
          <NutSharecoupon
            :item="item"
            type='share'
            col="3"
            @click-report="handelClick"
          >
          </NutSharecoupon>
        </NutCol>
      </NutRow>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('shareCoupon');
import data from './data.js' ;
export default createDemo({
  data() {
		return {
      data: {}
    };
	},
  mounted() {
    this.data = data;
    console.log('data', data)
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
  .nutcat-col {
    width: 32%;
    margin-left: 3px;
    &:first-child {
      margin-left: 0;
    }
  }
  
}
</style>
