<template>
  <div :class="classes" :style="styles" @click="toLink(data)">
    <template v-if="col == '1'">
      <div class="hall-content">
        <slot name="left"></slot>
      </div>
      <slot name="right"></slot>
    </template>
    <template v-else-if="col == '2'">
      <slot name="left"></slot>
      <div class="hall-content">
        <slot name="right"></slot>
      </div>
    </template>
    <template v-else>
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    </template>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('hall');

export default create({
  props: {
    data: {
      type: Object,
      default: {}
    },
    col: {
      type: String,
      default: '1'
    },
    type: {
      type: String,
      default: '1'
    },
    nameRow: {
      type: [String, Number],
      default: '1'
    },
    descRow: {
      type: [String, Number],
      default: '1'
    },
    imgWidth: {
      type: [String, Number],
      default: ''
    },
    imgHeight: {
      type: [String, Number],
      default: ''
    },
    src: {
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
    bgTopColor: {
      type: String,
      default: ''
    },
    bgTopUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  components: {},
  mounted() {},
  computed: {
    classes() {
      return {
        [componentName]: true,
        [`${componentName}-${(this as any).type}`]: (this as any).type,
        [`${componentName}-${(this as any).col}`]: (this as any).col,
        [`${componentName}-scrollX`]: (this as any).scrollX
      };
    },
    styles() {
      if ((this as any).bgUrl) {
        return {
          'background-image': `url(${(this as any).bgUrl})`
        };
      }
      if ((this as any).bgColor) {
        return {
          'background-color': `${(this as any).bgColor}`
        };
      }
    },
    stylesCont() {
      if ((this as any).bgTopUrl) {
        return {
          'background-image': `url(${(this as any).bgTopUrl})`
        };
      }
      if ((this as any).bgTopColor) {
        return {
          'background-color': `${(this as any).bgTopColor}`
        };
      }
    }
  },
  methods: {
    toLink(item) {
      (this as any).$emit('click-hall', item);
    }
  }
});
</script>

<style lang="scss" scoped>
@import './index.scss';
$prefix: nutcat-hall;
.#{$prefix}-free-1 {
  color: red;
  &.nutcat-hall-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    .hall-content {
      text-align: left;
      .sub-name {
        font-size: 18px;
        color: #fff;
      }
      .sub-desc {
        font-size: 14px;
        color: #fff;
      }
    }
    .sub-tag {
      font-size: 12px;
      vertical-align: baseline;
    }
    .nutcat-icon-arrow-go {
      height: 38px;
      vertical-align: middle;
      &::before {
        // vertical-align: middle;
      }
    }
  }
  &.nutcat-hall-2 {
    display: flex;
    width: 100%;
    padding: 9px;
    background: #fff;
    .img-box {
      width: 44px;
      height: 44px;
      margin-right: 18px;
    }
    .hall-content {
      width: calc(100% - 58px - 10px);
      padding-top: 4px;
      text-align: left;
    }
    .sub-name {
      margin-bottom: 2px;
    }
  }
  &.nutcat-hall-3 {
    width: 100%;
    // padding: 9px;
    background: #fff;
    .img-box {
      margin-left: auto;
      margin-right: auto;
    }
    .hall-content {
      // padding-top: 4px;
      // text-align: left;
    }
    .sub-name {
      // margin-bottom: 2px;
    }
  }
}
</style>
