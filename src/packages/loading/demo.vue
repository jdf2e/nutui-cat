<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-button @click="show">点击显示loading，2秒后隐藏</nut-button>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('loading');
import Loading from './index.js';
export default createDemo({
  props: {},
  data() {
    return {};
  },
  methods: {
    show() {
      Loading.show();
      setTimeout(() => {
        Loading.hide();
      }, 2000);
    }
  }
});
</script>

<style lang="scss" scoped></style>
