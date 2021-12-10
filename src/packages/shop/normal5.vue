<template>
  <div :class="classes" :style="styles" @click="toShop(data)">
    <NutImage class="img-box" :src="data.cImage"></NutImage>
      <template v-if="data.cLogo">
        <NutImage class="logo-box" :src="data.cLogo"></NutImage>
      </template>
      <div class="shop-content">
        <template v-if="data.cName">
          <NutText class="sub-name" row="1">{{data.cName}}</NutText>
        </template>
        <template v-if="data.cDesc">
          <NutText class="sub-desc" row="1">{{data.cDesc}}</NutText>
        </template>
      </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('shop');

export default create({
  props: {
    data: {
      type: [Array, Object],
      default: function() {
        return [];
      }
    },
    col: {
      type: [String, Number],
      default: '1'
    },
    type: {
      type: String,
      default: ''
    },
    nameRow: {
      type: [String, Number],
      default: '1'
    },
    descRow: {
      type: [String, Number],
      default: '1'
    },
    tag: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: ''
    },
    bgUrl: {
      type: String,
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
    }
  },
  methods: {
    toShop(item) {
      (this as any).$emit('click-shop', item);
    }
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
$prefix: nutcat-shop;

.#{$prefix}-normal-5 {
  width: 100%;
  padding-bottom: 5px;
  // height: 95px;
  background: #fff;
  .img-box {
    width: 100%;
    height: 105px;
    text-align: center;
    font-size: 0;
  }
  .logo-box {
    position: absolute;
    top: 90px;
    left: 50%;
    margin-left: -44px;
    width: 87px;
    height: 30px;
    text-align: center;
    font-size: 0;
    background: #fff;
    border: 2px solid #F2F2F2;
    border-radius: 15px;
    img {
      border-radius: 15px;
    }
  }
  .shop-content {
    padding: 18px 4px 4px;
  }
  .btn-follow {
    width: 90%;
    height: 33px;
    margin: 0 auto;
    line-height: 33px;
    font-size: 13px;
    color: #fff;
    background: linear-gradient(to right, #F2140C 0%, #E8220E 70%, #F24D0C 100%);
  }
  &.nutcat-shop-2 {
    width: 177px;
    height: 258px;
    /deep/ .img-box {
      height: 156px;
    }
    /deep/ .logo-box {
      position: absolute;
      top: 138px;
      margin-left: -52.5px;
      width: 105px;
      height: 33px;
      border: none;
      border-radius: 15px;
    }
  }
  &.nutcat-shop-3 {
    // width: 117px;
    /deep/ .img-box {
      height: 105px;
    }
    /deep/ .logo-box {
      position: absolute;
      top: 90px;
      margin-left: -43.5px;
      width: 87px;
      height: 30px;
      border: none;
      border-radius: 15px;
    }
    .btn-follow {
      width: 90%;
      height: 21px;
      line-height: 21px;
      font-size: 12px;
    }
  }
  &.nutcat-shop-3.nutcat-shop-scrollX {
    width: 100%;
    // height: 149px;
    background: #fff;
    .shop-content {
      padding: 4px;
    }
    .img-box {
      width: 84px;
      height: 84px;
      margin: 12px auto 3px;
      text-align: center;
      font-size: 0;
    }
    .sub-name {
      margin-bottom: 2px;
    }
  }
}
</style>
