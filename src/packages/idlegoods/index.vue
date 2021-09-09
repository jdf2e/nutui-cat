<template>
  <div
    class="good"
    @click.stop="goDetails(goodsItem)"
  >
    <div class="image">
      <img
        :src="goodsItem.image"
      />
    </div>
    <div class="name">{{ goodsItem.name }}</div>
    <div class="info">
      <nutcat-price
        class="price"
        :price="goodsItem.pPrice"
        :decimalDigits="2"
      />
      <div
        class="add-car"
        @click.stop="addToCart(goodsItem)"
      >
        <img src="https://img10.360buyimg.com/imagetools/jfs/t1/176274/37/17202/3654/60d96c5cE511ed60f/79d580f6873754c3.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>

import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('idlegoods');

export default create({
  props: {
    goods: {
      type: Object,
    },
  },
  watch: {
    goods(n, o) {
      this.goodsItem = n;
    }
  },
  data() {
    return {
      goodsItem: {}
    };
  },
  components: {},
  computed:{
    classes() {
      return {
        [componentName+'-page']: true,
      };
    },
  },
  mounted() {
  },
  methods: {
    addToCart(item){
      this.$emit("addCart", item);
    },
    goDetails(item, index){
      this.$emit("goodDetails", item);
    },
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
  