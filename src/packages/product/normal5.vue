<template>
  <div :class="classes" :style="styles" @click="toSku(data)">
    <NutImage
      class="img-box"
      :src="data.cImage"
      :width="imgWidth"
      :height="imgHeight"
    >
    </NutImage>
    <div class="product-content">
      <template v-if="data.cName">
        <NutText class="sub-name" :row="nameRow"
          ><slot name="preName"></slot>{{ data.cName }}</NutText
        >
      </template>
      <div v-if="$slots.tag" class="tag-box">
        <slot name="tag"></slot>
      </div>
      <div class="product-bottom">
        <div class="price-wrap">
          <div class="price-box">
            <template v-if="col > '2'">
              <div class="price-pre">{{ pricePre }}</div>
            </template>
            <template v-else>
              <span class="price-pre">{{ pricePre }}</span>
            </template>
            <NutPrice class="price" :price="data.cPrice"></NutPrice>
            <template v-if="$slots.priceAfterSlot">
              <slot name="priceAfterSlot"></slot>
            </template>
            <slot name="priceAfter"></slot>
          </div>
          <div class="line-price-box" v-if="data.cLinePrice > data.cPrice">
            {{ linePricePre }}
            <NutPrice class="line-price" :price="data.cLinePrice"></NutPrice>
          </div>
          <template v-if="$slots.desc">
            <slot name="desc"></slot>
          </template>
        </div>
        <template v-if="iconType">
          <NutIcon class="icon-right" :type="iconType"></NutIcon>
        </template>
      </div>
    </div>
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

.#{$prefix}-normal-5 {
  .img-box {
    margin-bottom: 4px;
  }
  .sub-name {
    margin-bottom: 5px;
  }
  .product-bottom {
    position: relative;
    overflow: hidden;
    .icon-right {
      font-size: 23px;
    }
  }
  .price-wrap {
    float: left;
  }
  .price-box {
    margin-bottom: 2px;
  }
  .price-pre {
    margin-bottom: 3px;
    font-size: 10px;
  }
  .line-price-box {
    margin-bottom: 0;
  }
  &.#{$prefix}-2 {
    .img-box {
      margin-bottom: 7px;
    }
    .sub-name {
      margin-bottom: 9px;
    }
    .product-bottom {
      .icon-right {
        font-size: 32px;
      }
    }
    .price-box {
      margin-bottom: 4px;
    }
  }
  &.#{$prefix}-3 {
    .product-bottom {
      .icon-right {
        font-size: 23px;
      }
    }
  }
}
</style>
