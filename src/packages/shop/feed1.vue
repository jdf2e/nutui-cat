<template>
  <div :class="classes" :style="styles" @click="toShop(data)">
    <div class="shop-content">
      <NutImage class="logo-box" :src="data.cLogo"></NutImage>
      <template v-if="data.cName">
        <NutText class="sub-name" row="1">{{data.cName}}</NutText>
      </template>
      <template v-if="data.cDesc">
        <NutText class="sub-desc">{{data.cDesc}}</NutText>
      </template>
      <template v-if="tag">
        <NutIcon class="sub-tag" :type="tag"></NutIcon>
      </template>
    </div>
    <NutImage class="img-box" :src="data.cImage">
      <div class="price-wrap">
        <div class="price-box">
          预估到手价
          <NutPrice :price="data.price" :thousands="true" class="price" />
        </div>
      </div>
    </NutImage>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentClass, create } = createComponent('shop');

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

.#{$prefix}-feed-1 {
  width: 100%;
  height: 307px;
  border-radius: 4px;
  .shop-content {
    width: 100%;
    height: 130px;
    padding: 12px;
    background: url('//img10.360buyimg.com/imagetools/jfs/t1/183682/13/8278/27802/60c0911dEe8dd628d/f357ac014827bb6a.jpg') no-repeat center top 100%;
  }
  .logo-box {
    width: 90px;
    height: 30px;
    margin: 0 auto 3px;
    text-align: center;
    font-size: 0;
    background: #fff;
    // border: 1px solid #F2F2F2;
    border-radius: 15px;
    img {
      border-radius: 15px;
    }
  }
  .sub-name {
    margin-bottom: 2px;
    font-size: 20px;
    color: #fff;
  }
  .sub-desc {
    margin-bottom: 6px;
    font-size: 14px;
    color: #fff;
  }
  .sub-tag {
    margin: 0 auto;
    font-size: 38px;
    color: #fff;
  }
  .img-box {
    height: 177px;
    text-align: center;
    font-size: 0;
    background-color: #fff;
  } 
  .price-wrap {
    position: absolute;
    bottom: 9px;
    width: 100%;
    z-index: 1;
  }
  .price-box {
    display: inline-block;
    font-size: 12px;
    color: #fff;
    height: 24px;
    line-height: 24px;
    padding: 0 9px;
    background: linear-gradient(117.64deg, rgba(255,14,135,1) 0%,rgba(255,30,30,1) 61%,rgba(255,100,11,1) 100%),linear-gradient(rgba(130,12,0,1), rgba(130,12,0,1));
    border-radius: 12px;
  }
}
</style>
