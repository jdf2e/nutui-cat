<template>
  <div :class="classes" :style="styles" @click="toSku(data)">
    <!-- <template v-if="col == '2'">
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
        <div class="qg-bottom-box">
          <div class="price-wrap">
            <div class="price-box">
              {{ pricePre }}
              <NutPrice class="price" :price="data.cPrice"></NutPrice>
            </div>
            <div class="lineprice-wrap">
              <NutPrice
                v-if="data.cLinePrice > data.cPrice"
                class="line-price"
                :price="data.cLinePrice"
              ></NutPrice>
            </div>
          </div>
        </div>
      </div>
    </template> -->
    <template v-if="col == '3'">
      <NutImage
        class="img-box"
        :src="data.cImage"
        :width="imgWidth"
        :height="imgHeight"
      >
      </NutImage>
      <div class="product-content">
        <template v-if="data.name">
          <NutText class="sub-name" :row="nameRow"
            ><slot name="preName"></slot>{{ data.name }}</NutText
          >
        </template>
        <div v-if="$slots.tag" class="tag-box">
          <slot name="tag"></slot>
        </div>
        <div class="fold-img-box">
          <div class="fold-content">
            <p class="fold-title">{{ foldName }}</p>
            <div class="fold-price-box fold-lineprice-wrap">
              <NutPrice
                v-if="data.cLinePrice > data.cPrice"
                class="line-price"
                :price="data.cLinePrice"
              ></NutPrice>
            </div>
          </div>
        </div>
        <div class="qg-bottom-box">
          <div class="price-wrap">
            <div class="price-box">
              {{ pricePre }}
              <NutPrice class="price" :price="data.cPrice"></NutPrice>
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
    foldName: {
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

.#{$prefix}-normal-7 {
  &.#{$prefix}-3,
  &.#{$prefix}-3.#{$prefix}-scrollX {
    .img-box {
      margin-bottom: 4px;
    }
    .qg-bottom-box {
      width: 100%;
      height: 21px;
      // padding: 3px 6px;
      background: url('//storage.360buyimg.com/imgtools/dde3f7d4df-091e2f80-fa46-11eb-9874-cdedefa3c24e.png') no-repeat center
        /100% 100%;
      // background-size: 174px 37px;
      overflow: hidden;
    }
  }
  // 心跳曲线-一行三
  &.#{$prefix}-3,
  &.#{$prefix}-3.#{$prefix}-scrollX {
    .sub-name {
      margin-bottom: 3px;
    }
    .fold-img-box {
      height: 22px;
      margin-bottom: 6px;
      background: url('//storage.360buyimg.com/imgtools/d8d8242eed-8cdfc7b0-fa47-11eb-a27f-676da10c85f4.png') no-repeat center
        5px;
      background-size: 96px 17px;
      .fold-title {
        text-align: center;
        color: $red;
        font-size: 10px;
      }
      .fold-price-box {
      }
      .fold-lineprice-wrap {
        // width: 82px;
        line-height: 14px;
        color: #8C8C8C;
        font-size: 10px;
      }
      /deep/ .fold-price {
        font-size: 10px;
        .nutcat-price--big {
          font-size: 16px;
        }
        .nutcat-price--small {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
