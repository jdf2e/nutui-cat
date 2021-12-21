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
      <div class="product-right" :style="styleRight">
        <div class="product-content">
          <template v-if="data.cName">
            <NutText class="sub-name" :row="nameRow"
              ><slot name="preName"></slot>{{ data.cName }}</NutText
            >
          </template>
          <template v-if="data.cDesc">
            <NutText class="sub-desc" :row="descRow">{{
              data.cDesc
            }}</NutText>
          </template>
        </div>
        <div class="product-bottom">
          <div v-if="$slots.tag" class="tag-box">
            <slot name="tag"></slot>
          </div>
          <div class="price-box">
            {{ pricePre }}
            <NutPrice :price="data.cPrice" class="price" />
            <template v-if="data.cLinePrice > data.cPrice">
              <NutPrice class="line-price" :price="data.cLinePrice"></NutPrice>
            </template>
            <template v-if="tag">
              <NutIcon color="#F02B2B" :type="tag"></NutIcon>
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
const { componentClass, create } = createComponent('product');

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
        [componentClass]: true,
        [`${componentClass}-${(this as any).col}`]: (this as any).col,
        [`${componentClass}-${(this as any).type}`]: (this as any).type,
        [`${componentClass}-scrollX`]: (this as any).scrollX
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
  color: red;
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
