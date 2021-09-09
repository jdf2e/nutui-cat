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
        <div class="price-box">
          {{ pricePre }}
          <nutcat-price class="price" :price="data.cPrice"></nutcat-price>
          <template v-if="$slots.priceAfterSlot">
            <slot name="priceAfterSlot"></slot>
          </template>
          <slot name="priceAfter"></slot>
        </div>
        <div v-if="$slots.shop" class="shop-bottom">
          <slot name="shop"></slot>
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

.#{$prefix}-feed-shop {
  .img-box {
    margin-bottom: 3px;
  }
  .sub-name {
    margin-bottom: 11px;
  }
  .shop-bottom {
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
</style>
