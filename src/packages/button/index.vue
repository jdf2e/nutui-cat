
<template>
  <nut-button 
    :class="[
      'nutcat-button',
      type ? 'nutcat-button-' + type : '',
      radius ? 'nutcat-button-' + radius : '',
    ]"
    :style="styles" 
  >
    <template v-if="beforeIcon">
      <NutIcon :type="beforeIcon" class="before-icon"></NutIcon>
    </template>
    <span :class="classesButton">
      <slot></slot>
    </span>
    <template v-if="afterIcon">
      <NutIcon :type="afterIcon" class="after-icon"></NutIcon>
    </template>
  </nut-button>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentClass, create } = createComponent('button');

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
    },
    beforeIcon: {
      type: String,
      default: ''
    },
    afterIcon: {
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
    classesButton() {
      return {
        [componentClass+'-content']: true,
      };
    },
    styles() {
      // return {
      //   'background-color': (this as any).bgColor,
      //   'color': (this as any).color,
      //   'border-color': (this as any).borderColor,
      //   'border-width': (this as any).borderColor ? '1px' : '',
      //   'border-style': (this as any).borderColor ? 'solid' : '',
      //   'border-radius': typeof (this as any).radius == 'string' ? (this as any).radius : '50px',
      // }
    }
  },
  methods: {
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
