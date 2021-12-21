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
      <template v-if="$slots.content">
        <slot name="content"></slot>
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

.#{$prefix}-normal-4 {
  width: 100%;
  padding: 9px 5px;
  background: #fff;
  .logo-box {
    width: 70px;
    height: 35px;
    margin: 0 auto 4px;
  }
  .sub-name {
    line-height: 1.1;
    margin-bottom: 1px;
    // font-size: 12px;
  }
  .sub-desc {
    line-height: 1.1;
    // font-size: 14px;
  }
  &.nutcat-shop-4 {
    .logo-box {
      width: 58px;
      height: 29px;
    }
    .sub-name {
      font-size: 10px;
    }
    .sub-desc {
      font-size: 12px;
    }
  }
}
</style>
