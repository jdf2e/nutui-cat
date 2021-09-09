<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nutcat-idlegoods
      :goods="data"
      @addCart="addCart"
      @goodDetails="goodDetails"
    >
    </nutcat-idlegoods>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
import {list} from './data';
const { createDemo } = createComponent('idlegoods');
export default createDemo({
  data() {
    return {
      data: {}
    };
  },
  methods: {
    addCart(item) {
      console.log('加入购物车', item);
    },
    goodDetails(item) {
      console.log('跳转商品详情页', item);
    }
  },
  mounted() {
    this.data = list[0];
  }
});
</script>
  
<style lang="scss" scoped>
.nutcat-idlegoods {
}
</style>
  