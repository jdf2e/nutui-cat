<template>
  <div :class="classes" :style="styles" @click="toSku(data)">
    <template v-if="col == '1'">
      <nutcat-image
        class="img-box"
        :src="data.cImage"
        :width="imgWidth"
        :height="imgHeight"
      >
      </nutcat-image>
      <div class="product-right" :style="styleRight">
        <div class="product-content">
          <template v-if="data.cName">
            <nutcat-text class="sub-name" :row="nameRow"
              ><slot name="preName"></slot>{{ data.cName }}</nutcat-text
            >
          </template>
          <template v-if="data.cDesc">
            <nutcat-text class="sub-desc" :row="descRow">{{
              data.cDesc
            }}</nutcat-text>
          </template>
        </div>
        <div class="product-bottom">
          <div v-if="$slots.tag" class="tag-box">
            <slot name="tag"></slot>
          </div>
          <div class="price-box">
            {{ pricePre }}
            <nutcat-price :price="data.cPrice" class="price" />
            <template v-if="data.cLinePrice > data.cPrice">
              <nutcat-price class="line-price" :price="data.cLinePrice"></nutcat-price>
            </template>
            <template v-if="tag">
              <nutcat-icon color="#F02B2B" :type="tag"></nutcat-icon>
            </template>
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
      type: [Object, Array],
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
    tag: {
      type: String,
      default: ''
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

.#{$prefix}-normal-1 {
  .sub-tag {
    margin-bottom: 6px;
  }
  &.#{$prefix}-1.#{$prefix}-scrollX {
    .product-content {
      height: 38px;
    }
  }
}
</style>
