<template>
  <div :class="classes" :style="styles" @click="toRank(data)">
   <div class="rank-content">
      <template v-if="data.cName">
        <NutText class="sub-name" row="1">{{data.cName}}</NutText>
      </template>
      <template v-if="data.cDesc">
        <NutText class="sub-desc" row="1">{{data.cDesc}}</NutText>
      </template>
      <template v-if="tag">
        <NutIcon class="sub-tag" :type="tag"></NutIcon>
      </template>
    </div>
    <NutImage :src="data.cImage"></NutImage>
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

.#{$prefix}-feed-1 {
  // width: 100%;
  width: 177px;
  height: 286px;
  padding: 0;
  border-radius: 8px;
  &:nth-of-type(2n+1) {
    margin-left: 0;
  }
  .rank-content {
    width: 100%;
    height: 109px;
    padding: 12px;
    background-image: url('//img12.360buyimg.com/imagetools/jfs/t1/178860/3/8410/22297/60c09124E376c8df3/a8241b0fcf6f7831.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
  .sub-name {
    width: 150px;
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
  .nutcat-image {
    height: 177px;
    text-align: center;
    font-size: 0;
    background-color: #fff;
  } 
}
</style>
