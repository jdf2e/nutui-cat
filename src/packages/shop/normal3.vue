<template>
  <div :class="classes" :style="styles" @click="toShop(data)">
    <NutImage class="logo-box" :src="data.cLogo"></NutImage>
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

.#{$prefix}-normal-3 {
  display: flex;
  width: 100%;
  padding: 12px 10px;
  background: #fff;
  .logo-box {
    width: 56px;
    height: 28px;
    margin-top: 3px;
    margin-right: 10px;
  }
  .shop-content {
    width: calc(100% - 58px - 10px);
    text-align: left;
  }
  .sub-name {
    margin-bottom: 2px;
    line-height: 1.2;
    // font-size: 12px;
  }
  .sub-desc {
    line-height: 1.2;
    // font-size: 14px;
  }
  &.nutcat-shop-2 {
    width: 178px;
  }
}
</style>
