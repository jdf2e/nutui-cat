<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div class="progress-demo">
      <nutcat-progress :percentage='40' :phases='phases'></nutcat-progress>
    </div>

    <h2>动态用法</h2>
    <div class="progress-demo">
      <nutcat-progress :percentage='50' :phases='phases' animation></nutcat-progress>
    </div>
    
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('progress');
export default createDemo({
  props: {},
  data() {
    return {
      num:40,
      phases:[
        {
          desc:'300W',
          percent:'45',
          click:(item)=>{
            console.log(item)
          }
        }
      ]
    };
  },

  mounted() {}
});
</script>

<style lang="scss" scoped>
.progress-demo {
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  align-items: center;
  background: #7b74f6;

}
</style>
  