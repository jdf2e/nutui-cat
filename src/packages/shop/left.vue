<template>
  <div :class="classes" :style="styles" @click="toShop(data)">
    <template v-if="col == '1'">
      <NutImage class="logo-box" :src="data.cLogo"></NutImage>
      <div class="shop-content">
        <template v-if="data.cName">
          <NutText class="sub-name" row="1">{{data.cName}}</NutText>
        </template>
        <template v-if="data.cDesc">
          <NutText class="sub-desc" row="1">{{data.cDesc}}</NutText>
        </template>
      </div>
      <template v-if="tag">
        <NutTag type="go">{{tag}}</NutTag>
      </template>
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
    src: {
      type: String,
      default: ''
    },
    logo: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    nameRow: {
      type: [String, Number],
      default: '2'
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

.#{$prefix}-normal-1 {
  display: flex;
  width: 100%;
  padding: 12px;
  .logo-box {
    width: 87px;
    height: 39px;
    // margin-top: 3px;
    margin-right: 12px;
    border-radius: 20px;
  }
  .shop-content {
    width: calc(100% - 145px);
    text-align: left;
  }
  .sub-name {
    margin-bottom: 2px;
    line-height: 1.1;
    font-size: 14px;
    color: #fff;
  }
  .sub-desc {
    line-height: 1.1;
    font-size: 18px;
    color: #FFF000;
  }
}
</style>
