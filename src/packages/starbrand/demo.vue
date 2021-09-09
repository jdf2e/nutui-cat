<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nutcat-starbrand :brand-list="list" @callback="handleClick"></nutcat-starbrand>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('starbrand');
import {brand} from "./data";
export default createDemo({
  props: {},
  data() {
    return {
      initData: [],
      list: []
    };
  },
  mounted(){
    this.initData = brand.data.t3_xcx.list;
    this.init()
  },
  methods: {
    handleClick(item) {
      console.log(item);
    },
    init() {
      let length = this.initData.length;
      let dataList = [];
      
      let len = Math.floor(Number(length) / 3);
      let lens = Math.floor(Number(length) % 3);

      for (let i = 0; i < len * 3; i += len) {
        dataList.push(this.initData.slice(i, i + len));
      }
      if (lens != 0) {
        dataList[2] = [...dataList[2].concat(this.initData.slice(-lens))];
      }
      this.list = dataList;
    }
  }
})
</script>

<style lang="scss" scoped>
#app .demo {
  background: url("https://storage.360buyimg.com/imgtools/562460c4ae-fc12db50-e83f-11eb-a00e-39bc57cd582d.png") no-repeat;
  background-size: 100% 100%;
  h2 {
    color: #fff;
  }
}
.nutcat-starbrand {
}
</style>
  