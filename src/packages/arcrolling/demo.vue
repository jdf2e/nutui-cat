<template>
  <div class="demo">
    <h2>弧形轮播</h2>
    <NutArcrolling
      class="demo1"
      :list="starList"
      :leftDistance="size"
      @callback="cbClick"
    >
    </NutArcrolling>

    <h2>水平轮播</h2>
    <NutArcrolling
      class="demo2"
      directionType="horizontal"
      :list="starList"
      :leftDistance="size"
      @callback="cbClick"
    >
    </NutArcrolling>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('arcrolling');
import { star } from './data';

export default createDemo({
  props: {},
  data() {
    return {
      starList: [],
      size: ['240', '300', '410']
    };
  },
  mounted() {
    this.starList = star;
  },
  methods: {
    cbClick(item) {
      console.log(item);
    }
  }
});
</script>

<style lang="scss" scoped>
#app .demo {
  padding-left: 0;
  padding-right: 0;
}
.demo1 {
  background: url('https://storage.360buyimg.com/imgtools/75888bf8b9-c2ff0780-e614-11eb-8e5c-0da9e18a13b1.png')
    no-repeat;
  background-size: 100% 100%;
}
.demo2 {
  background: url('https://storage.360buyimg.com/imgtools/0a2ca7d032-83edbef0-e615-11eb-b377-57572a0b6c4d.png')
    no-repeat;
  background-size: 100% 100%;
}
</style>
