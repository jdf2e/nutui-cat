<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nutcat-barrage :list="list"></nutcat-barrage>
    <button @click="addDm" class="add">随机添加</button>
  </div>
</template>

<script lang="ts">
import { danmus } from './danmu.js';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('barrage');

export default createDemo({
  name: 'App',
  components: {},
  data() {
    return {
      list: []
    };
  },
  created() {
    this.list.push(danmus.splice(0, 5));
    this.list.push(danmus.splice(6));
  },
  methods: {
    addDm() {
      (this as any).list[0].push('XXXXXX');
    }
  }
});
</script>

<style lang="scss" scoped>
.nutcat-barrage {
}
.add {
  display: block;
  padding: 5px 30px;
  margin: 20px auto;
  border-radius: 15px;
  background: #949494;
  color: white;
  font-size: 12px;
}
</style>
