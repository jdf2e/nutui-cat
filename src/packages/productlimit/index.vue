<template>
  <div :class="classes" @click="handleClick">
    <div>{{ name }}</div>
  </div>
</template>
<script>

import { createComponent } from '@/utils/create';
const { componentClass, create } = createComponent('productlimit');

export default create({
  props: {
    name: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
    };
  },
  components: {},
  computed:{
    classes() {
      return {
        [componentClass+'-page']: true,
      };
    },
  },
  mounted() {},
  methods: {
    handleClick(){
    
    }
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
  