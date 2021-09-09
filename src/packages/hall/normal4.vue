<template>
  <div :class="classes" :style="styles" @click="toLink(data)">
    <nutcat-image
      class="img-box"
      :src="data.cImage"
      :width="imgWidth"
      :height="imgHeight"
    >
    </nutcat-image>
    <div class="hall-content">
      <template v-if="data.cName">
        <nutcat-text class="sub-name" :color="nameColor" :row="nameRow">{{
          data.cName
        }}</nutcat-text>
      </template>
      <template v-if="data.cDesc">
        <nutcat-text class="sub-desc" :color="descColor" :row="descRow">{{
          data.cDesc
        }}</nutcat-text>
      </template>
      <template v-if="tag">
        <nutcat-icon class="sub-tag" :type="tag"></nutcat-icon>
      </template>
    </div>
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
    nameColor: {
      type: String,
      default: ''
    },
    descColor: {
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

.#{$prefix}-normal-4 {
  padding: 12px;
  .img-box {
    width: 57px;
    height: 57px;
    margin-right: 15px;
  }
  .hall-content {
    padding-top: 2px;
  }
  .sub-name {
    margin-bottom: 4px;
  }
  /deep/.sub-tag {
    margin-top: 3px;
  }
}
</style>
