<template>
  <div :class="classes" :style="styles" @click="toShop(data)">
    <div class="shop-content">
        <NutImage class="logo-box" :src="data.logo"></NutImage>
        <template v-if="data.name">
          <NutText class="sub-name" row="1">{{data.name}}</NutText>
        </template>
        <slot name="tag"></slot>
      </div>
      <template v-if="data.desc">
        <NutText class="sub-desc" :row="descRow">{{data.desc}}</NutText>
      </template>
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

.#{$prefix}-normal-2 {
  width: 100%;
  padding: 12px;
  text-align: left;
  .shop-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    margin-bottom: 6px;
  }
  .logo-box {
    width: 87px;
    height: 30px;
    margin-right: 10px;
    border-radius: 20px;
  }
  .sub-name {
    width: 165px;
    margin-bottom: 2px;
    line-height: 1.1;
    font-size: 14px;
    color: #fff;
  }
  .sub-desc {
    line-height: 1.1;
    font-size: 18px;
    color: #fff;
  }
  .tag-go {
    height: 21px;
    padding: 0 7px;
    line-height: 22px;
  }
  .tag-box {
    margin-top: 5px;
    font-size: 0;
    .nutcat-tag {
      margin-right: 4px;
    }
  }
}
</style>
