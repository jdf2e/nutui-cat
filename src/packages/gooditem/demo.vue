<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nutcat-gooditem
      :list="data"
      :field-mapping="mapping"
      @addCart="addCart"
      @goodDetails="goodDetails"
    ></nutcat-gooditem>
  </div>
</template>

<script lang="ts">
import {dataMock} from "./data";
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('gooditem');

export default createDemo({
  props: {},
  data() {
		return {
      data: [],
      mapping: {
        goodImg: 'image',
      }
    };
	},
  methods: {
    addCart(item) {
      console.log('加入购物车', item);
    },
    goodDetails(item, index) {
      console.log('跳转商品详情页', item, index);
    }
  },
  mounted() {
    this.data = dataMock.list;
  }
});
</script>

  <style>
  #app .demo {
    /* padding: 57px 0 0; */
  }
  </style>
  <style lang="scss" scoped>
  h2 {
    padding: 0 25px;
  }
  .nutcat-gooditem {
    
  }
  </style>
  