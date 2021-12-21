<template>
  <div :class="classes" :style="styles" @click="toLink(data)">
    <div class="hall-content">
      <template v-if="data.cName">
        <NutText class="sub-name" :color="nameColor" :row="nameRow">{{
          data.cName
        }}</NutText>
      </template>
      <template v-if="data.desc">
        <NutText class="sub-desc" :color="descColor" :row="descRow">{{
          data.desc
        }}</NutText>
      </template>
    </div>
    <NutImage
      class="img-box"
      :src="data.cImage"
      :width="imgWidth"
      :height="imgHeight"
    >
    </NutImage>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentClass, create } = createComponent('hall');

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
    nameColor: {
      type: String,
      default: ''
    },
    desc: {
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
        [componentClass]: true,
        [`${componentClass}-${(this as any).type}`]: (this as any).type,
        [`${componentClass}-${(this as any).col}`]: (this as any).col,
        [`${componentClass}-scrollX`]: (this as any).scrollX
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

.#{$prefix}-normal-7 {
  padding: 12px;
    .sub-name {
      line-height: 1;
      color: #fff;
    }
    .sub-desc {
      margin-top: 3px;
      line-height: 1;
      color: #fff;
    }
    .img-box {
      margin: 10px auto 5px;
    }
}
</style>
