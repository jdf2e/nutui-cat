<template>
    <div class="demo">
      <h2>基础用法</h2>
      
      <nutcat-lovebeans name="wifi"></nutcat-lovebeans>
      <nutcat-lovebeans name="mail" txt="test txt"></nutcat-lovebeans>
    </div>
  </template>
  
  <script lang="ts">
  import { createComponent } from '@/utils/create';
  const { createDemo } = createComponent('lovebeans');
  export default createDemo({
    props: {},
    setup() {
      return {};
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .nutcat-lovebeans {
  }
  </style>
  