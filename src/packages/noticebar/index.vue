<template>
  <nut-noticebar
    :direction="direction"
    :list="list"
    :speed="speed"
    :standTime="standTime"
    :complexAm="complexAm"
    :height="height"
    :text="text"
    :closeMode="closeMode"
    :wrapable="wrapable"
    :leftIcon="leftIcon"
    :color="color"
    :background="background"
    :delay="delay"
    :scrollable="scrollable"
    v-on="$listeners"
  >
    <slot></slot>
  </nut-noticebar>
</template>
  <script>
import { createComponent } from '@/utils/create';
// import ScrollItem from './item'
const { componentClass, create } = createComponent('noticebar');

export default create({
  props: {
    // 滚动方向  across 横向 vertical 纵向
    direction: {
      type: String,
      default: 'across'
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    standTime: {
      type: Number,
      default: 1000
    },
    complexAm: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 40
    },
    text: {
      type: String,
      default: ''
    },
    closeMode: {
      type: Boolean,
      default: false
    },
    wrapable: {
      type: Boolean,
      default: false
    },
    leftIcon: { 
      type: String, 
      default: '' 
    },
    color: {
      type: String,
      default: '#F9911B'
    },
    background: {
      type: String,
      default: 'rgba(254,250,216,1)'
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
    };
  },
  components: {
    // ScrollItem:ScrollItem
  },
  computed: {
    classes() {
      return {
        [componentClass + '-page']: true
      };
    },

    horseLampStyle(){
      
      let styles = {}
      if(this.complexAm){
        styles = {
          'transform':`translateY(${this.distance}px)`
        }
      } else {
        if(this.animate){
          styles = {
            'transition': `all ${~~(this.height/this.speed/4)}s`,
            'margin-top': `-${this.height}px`
          }
        } 
      }
      return styles
    }
  },
  watch: {
    list(newValue, oldValue) {
      this.scrollList = [].concat(newValue) 
    }
  },
  mounted() {
    console.log(this.$slots)
    if(this.$slots.default){
      this.scrollList = [].concat(this.$slots.default)
    } else {
        this.scrollList = [].concat(this.list) 
    } 
    
    setTimeout(()=>{
      this.complexAm?this.startRoll():this.startRollEasy();
    },this.standTime)

  },
  methods: {
    /**
     * 利益点滚动方式一
     */
    startRollEasy(){
      this.showhorseLamp()
      this.timer = setInterval(this.showhorseLamp,~~(this.height/this.speed/4)*1000+this.standTime)
    },
    showhorseLamp () {
      this.animate = true;
      setTimeout(() => {
        this.scrollList.push(this.scrollList[0]);
        this.scrollList.shift();
        this.animate = false;
      }, ~~(this.height/this.speed/4)*1000);
    },
    /**
     * 利益点滚动方式一
     */
    startRoll(){
      
      this.timer = setInterval(()=>{
        let chunk = 100
        for(let i=0;i<chunk;i++){
          this.scroll(i,i<(chunk-1)?false:true)
        }
      },this.standTime+100*this.speed)
    },
    scroll(n,last){
      setTimeout(()=>{
        this.distance -= this.height/100
        if(last){
          this.scrollList.push(this.scrollList[0]);
          this.scrollList.shift();
          this.distance = 0
        }
      },n*this.speed)
    },


    /**
     * 点击滚动单元
     */
    go(item){
      this.$emit('go',item)
    },

    handleClickIcon(){
      console.log('go')
      this.$emit('goIcon',this.scrollList[0])
    },

    activated() {
      if (this.keepAlive) {
        this.keepAlive = false;
      }
    },

    deactivated() {
      this.keepAlive = true;
      clearInterval(this.timer)
    },

    destroyed() {
      clearInterval(this.timer)
    }
  }
});
</script>
  
  <style lang="scss">
@import 'index.scss';
</style>
  