
<template>
    <i 
      :class="classes" 
      :style="styles"
    >
      <template v-if="src">
        <NutImage :src="src"></NutImage>
      </template>
    </i>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentClass, create } = createComponent('icon');

export default create({
  props: {
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    src: {
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
    classes() {
      return {
        [componentClass]: true,
        [`${componentClass}-${(this as any).type}`]: true,
      }
    },
    styles() {
      return {
        'color': (this as any).color,
        'font-size': (this as any).size,
        'background-image': (this as any).src
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
