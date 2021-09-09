<template>
  <div :class="classes" :style="styles" @click="toSku(data)">
    <template v-if="col == '2'">
      <nutcat-image
        class="img-box"
        :src="data.cImage"
        :width="imgWidth"
        :height="imgHeight"
      >
      </nutcat-image>
      <div class="product-content">
        <template v-if="data.cName">
          <nutcat-text class="sub-name" :row="nameRow"
            ><slot name="preName"></slot>{{ data.cName }}</nutcat-text
          >
        </template>
        <div v-if="$slots.tag" class="tag-box">
          <slot name="tag"></slot>
        </div>
        <div class="qg-bottom-box">
          <div class="price-wrap">
            <div class="price-box">
              {{ pricePre }}
              <nutcat-price class="price" :price="data.cPrice"></nutcat-price>
            </div>
            <div class="lineprice-wrap">
              <nutcat-price
                v-if="data.cLinePrice > data.cPrice"
                class="line-price"
                :price="data.cLinePrice"
              ></nutcat-price>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="col == '3'">
      <nutcat-image
        class="img-box"
        :src="data.cImage"
        :width="imgWidth"
        :height="imgHeight"
      >
      </nutcat-image>
      <div class="product-content">
        <template v-if="data.name">
          <nutcat-text class="sub-name" :row="nameRow"
            ><slot name="preName"></slot>{{ data.name }}</nutcat-text
          >
        </template>
        <div v-if="$slots.tag" class="tag-box">
          <slot name="tag"></slot>
        </div>
        <div class="qg-bottom-box">
          <div class="price-wrap">
            <div class="price-box">
              {{ pricePre }}
              <nutcat-price class="price" :price="data.cPrice"></nutcat-price>
            </div>
            <!-- {{data.cLinePrice}} -->
            <div class="lineprice-wrap" v-if="data.cLinePrice > data.cPrice">
              <template v-if="parseFloat(data.cLinePrice)">
                <nutcat-price
                  class="line-price"
                  :price="data.cLinePrice"
                ></nutcat-price>
              </template>
              <template v-else>
                <nutcat-text>{{data.cLinePrice}}</nutcat-text>
              </template>
            </div>
          </div>
        </div>
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
    iconType: {
      type: String,
      default: ''
    }
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

.#{$prefix}-normal-6 {
  &.#{$prefix}-2,
  &.#{$prefix}-2.#{$prefix}-scrollX {
    .qg-bottom-bottom {
      margin-top: 9px;
      padding-top: 7px;
      border-top: 1px dashed #979797;
      .shop-name {
        margin-bottom: 1px;
        font-size: 12px;
        color: $title-color;
      }
      .shop-desc {
        font-size: 10px;
        color: #a4a4a4;
      }
    }
  }
  &.#{$prefix}-3,
  &.#{$prefix}-3.#{$prefix}-scrollX {
    .img-box {
      margin-bottom: 4px;
    }
    .qg-bottom-box {
      width: 100%;
      height: 35px;
      // padding: 3px 6px;
      background: url('//storage.360buyimg.com/grass/qing.png') no-repeat center
        /100% 100%;
      // background-size: 174px 37px;
      overflow: hidden;
    }
  }
}
</style>
