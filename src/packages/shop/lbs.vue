<template>
  <div :class="classes" :style="styles" @click="toShop(data)">
    <nutcat-image class="img-box" :src="data.cImage"></nutcat-image>
    <div class="shop-content">
      <template v-if="data.cName">
        <nutcat-text class="sub-name" row="1">{{data.cName}}</nutcat-text>
      </template>
      <template v-if="data.cDistance">
        <nutcat-text class="sub-distance" row="1"><nutcat-icon type="lbs">618</nutcat-icon>{{data.cDistance}}</nutcat-text>
      </template>
      <div v-if="$slots.tag" class="tag-box">
        <slot name="tag"></slot>
      </div>
      <slot></slot>
    </div>
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

.#{$prefix}-lbs {
  width: 100%;
  width: 148px;
  height: 70px;
  background: #F5F5F5;
  .img-box {
    position: absolute;
    top: 0;
    right: 0;
    width: 87px;
    height: 70px;
    &:after {
      content: "";
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 23.333vw;
        background: -webkit-gradient(linear, left top, right top, color-stop(0, whitesmoke), to(rgba(245, 245, 245, 0.72)));
        background: linear-gradient(90deg, whitesmoke 0, rgba(245, 245, 245, 0.72) 100%);
    }
  }
  .shop-content {
    position: relative;
    padding: 9px;
    text-align: left;
    z-index: 1;
  }
  .sub-name {
    line-height: 1.1;
    margin-bottom: 1px;
    font-size: 14px;
  }
  .sub-distance {
    margin-bottom: 8px;
    line-height: 1.1;
    color: #999;
    font-size: 12px;
    .nutcat-icon-lbs {
      margin-right: 2px;
      vertical-align: top;
    }
  }
  .tag-box {
    
  }
  .sub-tag {
    height: 14px;
    line-height: 15px;
    font-size: 10px;
  }
}
</style>
