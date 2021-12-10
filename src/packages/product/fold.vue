<template>
  <div :class="classes" :style="styles" @click="toSku(data)">
    <template v-if="col == '1'">
      <NutImage
        class="img-box"
        :src="data.cImage"
        :width="imgWidth"
        :height="imgHeight"
      >
      </NutImage>
      <div class="product-right">
        <div class="product-content">
          <template v-if="data.cName">
            <NutText class="sub-name" :row="nameRow"
              ><slot name="preName"></slot>{{ data.cName }}</NutText
            >
          </template>
          <div class="line-price-box" v-if="data.cLinePrice">
            {{ linePricePre }}
            <NutPrice class="line-price" :price="data.cLinePrice"></NutPrice>
          </div>
        </div>
        <NutImage
          class="fold-img"
          src="https://img13.360buyimg.com/imagetools/jfs/t1/40975/15/16674/3851/60eb1c98E9c94d95d/c24d03cbe8a787b5.png"
        ></NutImage>
        <!-- <div class="product-bottom"> -->
        <!-- <div class="price-wrap"> -->
        <div class="price-box">
          <slot name="priceSlot"></slot>
        </div>
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </template>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('product');

export default create({
  props: {
    data: {
      type: Object,
      default: {}
    },
    col: {
      type: String,
      default: '1'
    },
    type: {
      type: String,
      default: '1'
    },
    nameRow: {
      type: [String, Number],
      default: '2'
    },
    descRow: {
      type: [String, Number],
      default: '1'
    },
    pricePre: {
      type: String,
      default: ''
    },
    linePricePre: {
      type: String,
      default: ''
    },
    bgColor: {
      type: [String, Number],
      default: ''
    },
    bgUrl: {
      type: [String, Number],
      default: ''
    },
    imgWidth: {
      type: [String, Number],
      default: ''
    },
    imgHeight: {
      type: [String, Number],
      default: ''
    },
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    classes() {
      return {
        [componentName]: true,
        [`${componentName}-${(this as any).col}`]: (this as any).col,
        [`${componentName}-${(this as any).type}`]: (this as any).type,
        [`${componentName}-scrollX`]: (this as any).scrollX
      };
    },
    styles() {
      if ((this as any).bgUrl) {
        return {
          'background-image': `url(${(this as any).bgUrl})`,
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-size': '100% 100%'
        };
      }
      if ((this as any).bgColor) {
        return {
          'background-color': `${(this as any).bgColor}`
        };
      }
    },
    styleRight() {
      if ((this as any).imgWidth) {
        return {
          width: `calc(100% - ${(this as any).imgWidth}px - 12px)`
        };
      }
    }
  },
  methods: {
    toSku(item) {
      (this as any).$emit('click-sku', item);
    }
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
$prefix: nutcat-product;

// 心跳折线
.#{$prefix}-fold {
  .product-content {
    height: 35px;
  }
  .sub-name {
    margin-bottom: 6px;
  }
  .fold-img {
    margin-top: 12px;
  }
  .price-box {
    margin-top: 16px;
  }
  /deep/.line-price {
    font-size: 12px;
    text-decoration: none;
    .nutcat-price--symbol,
    .nutcat-price--big,
    .nutcat-price--small {
      font-size: 12px;
    }
  }
}
</style>
