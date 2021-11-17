
<template>
  <div :class="classes" :style="styles">
    <!-- <slot name="icon"></slot> -->
    <span :class="classesText" :style="stylesContent">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('text');

export default create({
  props: {
    row: {
      type: [String, Number],
      default: ''
    },
    color: {
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
        [componentName]: true
      };
    },
    classesText() {
      if( (this as any).row  == "1" ) {
        return {
          [componentName+'-content']: true,
          ['oneline']: true,
        };
      } else {
        return {
          [componentName+'-content']: true,
          ['moreline']: true,
        };
      }
    },
    styles() {
      if( (this as any).color) {
        return {
          'color': (this as any).color
        }
      }
    },
    stylesContent() {
      if( (this as any).row  != "1" ) {
        return {
          '-webkit-line-clamp': (this as any).row
        }
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
