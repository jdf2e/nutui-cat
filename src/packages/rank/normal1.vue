<template>
  <div :class="classes" :style="styles" @click="toRank(data)">
    <div :class="classesCont">
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
const { componentClass, create } = createComponent('rank');

export default create({
  props: {
    data: {
      type: [Array, Object],
      default: function() {
        return [];
      }
    },
    productData: {
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
    classesCont() {
      return {
        [`${componentClass}-cont`]: true
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

.#{$prefix}-normal-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px;
  .nutcat-rank-cont {
    width: 156px;
    padding: 5px 0;
  }
  .sub-name {
    margin-bottom: 0;
    line-height: 1.2;
    font-size: 18px;
    text-align: left;
    color: #fff;
  }
  .sub-desc {
    line-height: 1.2;
    font-size: 14px;
    text-align: left;
    color: #fff;
  }
  .nutcat-rank-list {
    display: flex;
  }
  .nutcat-rank-item {
    position: relative;
    width: 55px;
    height: 55px;
    margin-left: 3px;
    padding: 0;
    text-align: center;
  }
  .nutcat-tag-rank-1 {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
