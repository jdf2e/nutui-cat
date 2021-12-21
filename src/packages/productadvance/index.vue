<template>
  <div :class="classes" >
    <div class="triangle">

      <div class="circle"></div>

      <div class="circle2"></div>
    </div>

    
  </div>
</template>
  <script>
import { createComponent } from '@/utils/create';
const { componentClass, create } = createComponent('productadvance');

export default create({
  props: {
    name: {
      type: String,
      default: ''
    },  },
  data() {
    return {};
  },
  components: {},
  computed: {
    classes() {
      return {
        [componentClass + '-page']: true
      };
    }
  },
  mounted() {},
  methods: {
    handleClick() {}
  }
});
</script>
  
<style lang="scss">
@import 'index.scss';
</style>
  