<template>
  <div class="goods-wrapper">
    <div class="goods-item" v-for="(item, index) in list" :key="item.skuId" @click="goDetails(item, index)">
      <div class="goods-box">
        <img
          :src="item[filed.goodImg]"
          class="goods-img"
        />
        <span class="goods-tips" v-if="limitDescription(item)">{{limitDescription(item)}}</span>
      </div>
      <div class="goods-desc">
        {{ item[filed.name] }}
      </div>
      <div class="price-show">
        <div class="price">
          <nutcat-price
            :price="item[filed.pPrice]"
            :thousands="true"
          />
        </div>
        <div class="h-price" v-if="item.linePrice">
          <nutcat-price
            :price="item[filed.linePrice]"
            :thousands="true"
          />
        </div>
      </div>
      <div class="goods-add-cart" @click.stop="addCart(item)"></div>
    </div>
  </div>
</template>
<script>

import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('gooditem');

export default create({
  props: {
    list: {
      type: Array,
      default: []
    },
    fieldMapping: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      filed: {
        goodImg: 'image',
        name: 'name',
        subTitle: '["productExtInfo"]["promoTagDet1"]',
        pPrice: 'pPrice',
        linePrice: 'linePrice'
      }
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
    this.filed = Object.assign(this.filed, this.fieldMapping);
  },
  methods: {
    addCart(item){
      this.$emit("addCart", item);
    },
    goDetails(item, index){
      this.$emit("goodDetails", item, index);
    },
    limitDescription(item) {
      const promoTagDet1 = item[this.filed.subTitle];
      if (promoTagDet1 && promoTagDet1.length > 7) {
        return promoTagDet1.substr(0,7) +"...";
      } else if (promoTagDet1) {
        return promoTagDet1;
      } else {
        return null;
      }
    }
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
