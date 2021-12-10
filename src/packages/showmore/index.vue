<template>
  <div :class="classes" :style="styleWH" @click="handleClick()">
    <span class="showmore-text">{{ text }}</span>
    <NutIcon
      :style="{ fontSize: size }"
      :color="iconColor"
      :type="iconName"
    ></NutIcon>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('showmore');

export default create({
  props: {
    text: {
      type: String,
      default: '查看更多'
    },
    // 传过来的宽高
    width: {
      type: String,
      default: '320'
    },
    height: {
      type: String,
      default: '36'
    },
    size: {
      type: String,
      default: '16px'
    },
    background: {
      type: String,
      default: 'red'
    },
    iconName: {
      type: String,
      default: 'arrow-down'
    },
    iconColor: {
      type: String,
      default: '#FFFFFF'
    }
  },
  data() {
    return {};
  },
  components: {},
  computed: {
    classes() {
      return {
        [componentName + '-page']: true
      };
    },
    styleWH() {
      return {
        width: (this as any).width + 'px',
        height: (this as any).height + 'px',
        'background-color': (this as any).background
      };
    }
  },
  mounted() {},
  methods: {
    handleClick() {
      (this as any).$emit('moreClick');
    }
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
