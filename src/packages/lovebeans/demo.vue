<template>
    <div class="demo">
      <h2>基础用法</h2>
      
      <NutLovebeans name="wifi"></NutLovebeans>
      <NutLovebeans name="mail" txt="test txt"></NutLovebeans>
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
  .NutLovebeans {
  }
  </style>
  