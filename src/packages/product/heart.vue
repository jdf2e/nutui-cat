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
          <div v-if="$slots.tag" class="tag-box">
            <slot name="tag"></slot>
          </div>
        </div>
        <div class="bight-img-box">
          <div class="bight-content">
            <p class="bight-title">{{ heartName }}</p>
            <div class="bight-price-box">
              <NutPrice class="bight-price" :price="data.cPrice"></NutPrice>
            </div>
            <div class="bight-lineprice-wrap">
              <NutPrice
                v-if="data.cLinePrice > data.cPrice"
                class="line-price"
                :price="data.cLinePrice"
              ></NutPrice>
              <span class="bight-word">即将恢复</span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="col == '2'">
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
        <div class="bight-img-box">
          <div class="bight-content">
            <div class="bight-lineprice-wrap">
              <NutPrice
                v-if="data.cLinePrice > data.cPrice"
                class="line-price"
                :price="data.cLinePrice"
              ></NutPrice>
              <span class="bight-word">即将恢复</span>
            </div>
            <div class="bight-price-box">
              <NutPrice class="bight-price" :price="data.cPrice"></NutPrice>
            </div>
            <p class="bight-title">{{ heartName }}</p>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="col == '3'">
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
        <div class="bight-img-box">
          <div class="bight-content">
            <p class="bight-title">{{ heartName }}</p>
            <div class="bight-price-box">
              <NutPrice class="bight-price" :price="data.cPrice"></NutPrice>
            </div>
            <div class="bight-lineprice-wrap">
              <NutPrice
                v-if="data.cLinePrice > data.cPrice"
                class="line-price"
                :price="data.cLinePrice"
              ></NutPrice>
              <!-- <span class="bight-word">即将恢复</span> -->
            </div>
          </div>
        </div>
        <div v-if="$slots.tag" class="tag-box-bottom">
          <slot name="tag"></slot>
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
    heartName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this)
  },
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
.mb0 {
  margin-bottom: 0;
}
.#{$prefix}-heart {
  // 心跳曲线-一行一
  &.#{$prefix}-1,
  &.#{$prefix}-1.#{$prefix}-scrollX {
    .product-content {
      height: 36px;
      margin-bottom: 15px;
    }
    .sub-name {
      margin-bottom: 2px;
    }
    .bight-img-box {
      width: 174px;
      height: 51px;
      background: url('https://img11.360buyimg.com/imagetools/jfs/t1/172087/7/19486/13184/60eba8beE25d599fb/2bdfc80682b9483a.png')
        no-repeat center bottom;
      background-size: 174px 37px;
      .bight-content {
        width: 168px;
      }
      .bight-title {
        color: $red;
      }
      .bight-price-box {
        width: 82px;
        height: 25px;
        line-height: 26px;
        margin-top: 5px;
      }
      .bight-lineprice-wrap {
        .bight-word {
          line-height: 12px;
        }
      }
    }
  }
  // 心跳曲线-一行二
  &.#{$prefix}-2,
  &.#{$prefix}-2.#{$prefix}-scrollX {
    padding-bottom: 12px;
    .bight-img-box {
      height: 63px;
      background: url('https://img12.360buyimg.com/imagetools/jfs/t1/186382/29/12900/12398/60ec0499E4407f2ac/0574bea8f9d3aefd.png')
        no-repeat center 14px;
      background-size: 159px 38px;
      .bight-lineprice-wrap {
        .bight-word {
          line-height: 12px;
        }
      }
      .bight-title {
        margin-top: 14px;
      }
    }
  }
  // 心跳曲线-一行三
  &.#{$prefix}-3,
  &.#{$prefix}-3.#{$prefix}-scrollX {
    .sub-name {
      margin-bottom: 6px;
    }
    .bight-img-box {
      height: 51px;
      margin-bottom: 6px;
      background: url('//storage.360buyimg.com/grass/pic4.png') no-repeat center
        12px;
      background-size: 114px 38px;
      .bight-title {
        color: $red;
      }
      .bight-price-box {
        width: 82px;
        height: 25px;
        line-height: 26px;
        margin-top: 3px;
      }
      .bight-lineprice-wrap {
        .bight-word {
          line-height: 12px;
        }
      }
      /deep/ .bight-price {
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
