<template>
  <div :class="classes" :style="styles" @click="toLink(data)">
    <template v-if="col == '1'">
      <div class="hall-content">
        <template v-if="data.cName">
          <NutText class="sub-name" :color="nameColor" row="1">{{ data.cName }}</NutText>
        </template>
        <template v-if="data.cDesc">
          <NutText class="sub-desc" :color="descColor" :row="descRow">
            {{ data.cDesc }}
            <template v-if="tag">
              <NutIcon class="sub-tag" :type="tag"></NutIcon>
            </template>
          </NutText>
        </template>
      </div>
      <NutImage v-if="data.cImage"
        class="img-box"
        :src="data.cImage"
        :width="imgWidth"
        :height="imgHeight"
      >
      </NutImage>
    </template>
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

.#{$prefix}-normal-2 {
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
    .nutcat-image {
      // width: 70px;
      // height: 44px;
      // margin: 9px auto 3px;
    }
    .img-box {
      height: 50px;
    }
  }
</style>
