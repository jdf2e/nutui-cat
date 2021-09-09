<template>
  <div :class="classes">
    <div class="progress">
      <div class="ladder" v-if="phases.length">
        <div
          class="ladder-item"
          v-for="(item, i) in phases"
          :key="i"
          @click="item.click && item.click(item)"
        >
          <div
            :class="[
              'ladder-value',
              'ladder-value-first',
              percent < item.percent ? '' : 'active'
            ]"
            :style="{ left: `calc(${item.percent}% - 28px)` }"
            ><span>{{ item.desc }}</span></div
          >
        </div>
      </div>
      <div class="bar">
        <div class="bar-bg" ref="bar">
          <span
            :class="{
              active: x
            }"
            v-for="(x, i) in chunkState"
            :key="i"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('progress');

export default create({
  props: {
    name: {
      type: String,
      default: ''
    },
    percentage: {
      type: Number,
      default: 0
    },
    phases: {
      type: Array,
      default: []
    },
    animation: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      percent:0,
      barChunk: 50,
      chunkState:[]
    };
  },
  components: {},
  computed: {
    classes() {
      return {
        [componentName + '-page']: true
      };
    }
  },
  watch: {
      percentage(newValue, oldValue) {
        this.percent = newValue 
      }
    },
  mounted() {
    this.$nextTick(() => {
      
      this.barChunk = this.needChunk()
      this.percent = this.percentage
      if(this.animation){
        
        this.chunkState = Array.from({length:this.barChunk},(val,index)=>{
          return false
        })
        this.animated()
      } else {
        this.chunkState = Array.from({length:this.barChunk},(val,index)=>{
          return index < (this.percentage / 100) * this.barChunk?true:false
        })
      }

    });
  },
  methods: {
    animated() {
     
      let n=0
      while(n<(this.percentage / 100) * this.barChunk){
        this.go(n)
        n++
      }
    },
    go(x){
      setTimeout(()=>{
        this.chunkState[x] = true
        this.$forceUpdate()
      },30*x)
    },
    needChunk(){
        let barDom = this.$refs.bar;
        return ~~(barDom.clientWidth / 7);
    },

    easeOutCubic(pos) {
      return (pos - 1) ** 3 + 1
    }
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
  