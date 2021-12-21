<template>
  <div :class="classes" :style="styles" @click="toRank(data)">
    <NutImage class="img-box" :src="data.cImage"></NutImage>
    <template v-if="data.cName">
      <NutText class="sub-name" :row="nameRow">{{data.cName}}</NutText>
    </template>
    <template v-if="data.cDesc">
      <NutText class="sub-desc" :row="descRow">{{data.cDesc}}</NutText>
    </template>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentClass, create } = createComponent('rank');

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
    distance: {
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
      if((this as any).bgUrl) {
        return {
          'background-image': `url(${(this as any).bgUrl})`,
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-size': '100% 100%'
        };
      } 
      if ((this as any).bgColor) {
        return {
          'background-color': `${(this as any).bgColor}`,
        };
      } 
    }
  },
  methods: {
    toRank(item) {
      (this as any).$emit('click-rank', item);
    }
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
$prefix: nutcat-rank;

.#{$prefix}-normal-4 {
  width: 100%;
  height: 161px;
  padding: 0;
  // &:first-child {
  //   border-bottom-left-radius: 8px;
  // }
  // &:last-child {
  //   border-bottom-right-radius: 8px;
  // }
  .nutcat-image {
    margin: 9px;
    // margin-bottom: 22px;
    height: 100px;
  }
  .sub-name {
    width: 100px;
    height: 18px;
    margin: 0 auto 4px;
    line-height: 18px;
    font-size: 14px;
    color: rgba(255,255,255,1);
    background: rgba(202,145,73,1);
    border-radius: 9px;
  }
  .sub-desc {
    font-size: 10px;
    color: rgba(156,91,10,1);
  }
}
</style>
