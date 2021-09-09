<template>
  <div :class="classes" :style="style">
    <slot></slot>
  </div>
</template>
<script lang="ts">

import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('col');
export default create({
  props: {
    span: {
      type: [String, Number],
      default: '24'
    },
    offset: {
      type: [String, Number],
      default: '0'
    }
  },
  data() {
		return {
      state: '',
    };
	},
  inject: ['gutter'],
  components: {},
  mounted() {
  },
  computed: {
    classes() {
      return {
        [componentName]: true,
        [`${componentName}-${(this as any).gutter}`]: (this as any).gutter,
        [`${componentName}-${(this as any).span}`]: true,
        [`${componentName}-offset-${(this as any).offset}`]: true,
      };
    },
    style() {
      return {
        paddingLeft: (this as any).gutter / 2 + 'px',
        paddingRight: (this as any).gutter / 2 + 'px'
      };
    }
  },
  methods: {
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
