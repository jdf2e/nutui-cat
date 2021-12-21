
<template>
  <div 
    :class="[
      'nutcat-tag',
      type ? 'nutcat-tag-' + type : ''
    ]"
    :style="styles" 
  >
    <div class="nutcat-tag-box">
      <template v-if="beforeIcon">
        <NutIcon  class="before-icon" :type="beforeIcon"></NutIcon>
      </template>
      <template v-if="tagType">
        <NutIcon :type="tagType"></NutIcon>
      </template>
      <template v-if="$slots.preSlot">
        <span :class="classesPre">
          <slot name="preSlot"></slot>
        </span>
      </template>
      <span :class="classesTag">
        <slot></slot>
      </span>
      <template v-if="afterIcon">
        <NutIcon class="after-icon" :type="afterIcon"></NutIcon>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentClass, create } = createComponent('tag');

export default create({
  props: {
    type: {
      type: String,
      default: ''
    },
    radius: {
      type: [Boolean, String, Number],
      default: false
    },
    beforeIcon: {
      type: String,
      default: ''
    },
    afterIcon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: ''
    }
  },
  data() {
		return {
    };
	},
  components: {},
  mounted() {
    
  },
  computed: {
    tagType() {
      switch((this as any).type) {
        case 'video-time':
          return 'triangle-arrow';
        case 'live-pre':
          return 'live-pre';
        case 'live-on':
          return 'live-on';
        case 'live-back':
          return 'live-back';
        case 'video-time':
          return 'triangle-arrow';
        case 'fire-1':
          return 'huo';
        case 'fire-2':
          return 'huo';
        case 'pin':
          return 'pin';
        case 'rank-hot':
          return 'rank-hot';
          case 'lbs':
          return 'lbs'
        default:
          break
      }
      
    },
    classesTag() {
      return {
        [componentClass+'-content']: true,
      };
    },
    classesPre() {
      return {
        [componentClass+'-pre']: true,
      };
    },
    styles() {
      return {
        'background-color': (this as any).bgColor,
        'color': (this as any).color,
        'border-color': (this as any).borderColor,
        'border-width': (this as any).borderColor ? '1px' : '',
        'border-style': (this as any).borderColor ? 'solid' : '',
        'border-radius': (this as any).radius
      }
    }
  },
  methods: {
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
