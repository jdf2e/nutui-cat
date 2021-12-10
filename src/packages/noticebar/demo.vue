<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div class="interstroll-list">
      <NutNoticebar direction="vertical" :list="horseLamp1" :speed='10' :standTime='1000' :showIcon='true' @go='go' color='#14100D' background='transparent'></NutNoticebar>
    </div>

    <h2>复杂滚动动画</h2>
    <div class="interstroll-list">
      <NutNoticebar direction="vertical" :list="horseLamp2" :speed='10' :standTime='2000' :complexAm='true' color='#14100D' background='transparent'></NutNoticebar>
    </div>

    <h2>自定义滚动内容</h2>
    <div class="interstroll-list">
      <nut-noticebar direction="vertical" :height='50' :speed='10' :standTime='1000' :list="[]" :showIcon='true'  @goIcon='go' color='#14100D' background='transparent'>
        <div class="custom-item" :data-index='index' v-for="(item,index) in horseLamp3" :key="index">{{item}}</div>
      </nut-noticebar>
    </div>

    <h2>自定义右侧标识</h2>
    <div class="interstroll-list">
      <nut-noticebar direction="vertical" :list="horseLamp1" :speed='10' :standTime='1000' :showIcon='true' color='#14100D' background='transparent'>
        <template v-slot:rightIcon>
          <NutIcon style="font-size: 20px;" color="#F02B2B" type="qiang"></NutIcon>
        </template>
      </nut-noticebar>
    </div>
  </div>
</template>
  
<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('noticebar');
export default createDemo({
  props: {},
  data() {
    return {
      horseLamp1: ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆'],
      horseLamp2: ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆'],
      horseLamp3: ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆'],
    };
  },

  mounted() {},

  methods:{
    go(item){
      console.log(item)
    }
  }
});
</script>
  
<style lang="scss">
#app {
  .demo {
  }
}
.interstroll-list{
  padding: 0 10px;
  color:#14100D ;
  background: linear-gradient(180deg, rgba(255,203,132,1) 0%,rgba(255,230,196,1) 100%);
  border-radius: 10px;
  border: 1px solid #eee;
}
.custom-item{
  display: flex;
  align-items: center;
  height: 50px;
  
}
</style>
  