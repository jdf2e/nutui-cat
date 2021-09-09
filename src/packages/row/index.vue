<template>
  <div :class="getClasses">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('row');

export default create({
  props: {
    type: {
      type: String,
      default: ''
    },
    gutter: {
      type: [String, Number],
      default: ''
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'flex-start'
    },
    wrap: {
      type: String,
      default: 'nowrap'
    },
    scrollX: {
      type: Boolean,
      default: false
    }
  },
  // 父组件中返回要传给下级的数据
  provide () {
    return {
      gutter: this.gutter
    }
  },
  
  computed: {
    getClasses() {
      return `
        ${(this as any).getClass('', (this as any).type)}
        ${(this as any).getClass('justify', (this as any).justify)}
        ${(this as any).getClass('align', (this as any).align)}
        ${(this as any).getClass('flex', (this as any).wrap)}
        ${(this as any).scrollX ? 'nutcat-row-scroll-x' : ''}
        ${componentName}
        `;
    }
  },
  methods: {
    getClass(prefix: string, type: string) {
      return prefix
        ? type
          ? `nutcat-row-${prefix}-${type}`
          : ''
        : `nutcat-row-${type}`;
    }
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
