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
          <div v-if="$slots.tag" class="tag-box">
            <slot name="tag"></slot>
          </div>
        </div>
        <div class="product-bottom">
          <div class="price-wrap">
            <div class="price-box">
              <slot name="priceSlot"></slot>
            </div>

            <div class="line-price-box" v-if="data.linePrice">
              {{ linePricePre }}
              <NutPrice class="line-price" :price="data.linePrice"></NutPrice>
            </div>
          </div>
          <div class="price-lowest"
            ><i class="icon-lowest"></i>{{ data.days }}天历史最低价</div
          >
          <div class="qg-box">
            <span class="sub-title">去抢购</span>
            <div class="progress-box">
              <div class="progress-bar">
                <!-- <div class="sub-percent" style="width: `${49}px;`"></div> -->
                <div class="sub-percent" style="width: 27px;"></div>
              </div>
              <span class="sub-num">{{ data.progress }}</span>
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

.#{$prefix}-normal-3 {
  .product-content {
    height: 59px;
  }
  .sub-name {
    margin-bottom: 0;
  }
  .sub-desc {
    margin-bottom: 2px;
  }
  .price-wrap {
    height: 33px;
    margin-bottom: 6px;
  }
  .price-box {
    margin-bottom: 2px;
  }
}
</style>
