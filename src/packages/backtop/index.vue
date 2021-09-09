<template>
  <nut-backtop :class="classes" @click="handleClick" :el-id="elId" v-show="showBackTop">
    <slot></slot>
  </nut-backtop>
</template>
<script>

import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('backtop');
import throttle from 'lodash/throttle';

export default create({
  props: {
    elId: {
      type: String,
      default: ''
    }, 
    distance: {
      type: Number,
      default: 200
    }, 
  },
  data() {
    return { 
      showBackTop: false,
      _prevTop: 0
    };
  },
  components: {},
  computed:{
    classes() {
      return {
        [componentName]: true,
      };
    },
  },
  mounted() {
    if (this.elId && document.getElementById(this.elId)) {
      this.scrollEl = document.getElementById(this.elId);
    }
    console.log('this.scrollEl', this.scrollEl);
    console.log('window', window);

    // 滚动监听
    this.scrollEl.addEventListener('scroll', throttle(this._handleInteraction, 300), true)
    this._listenScroll()
  },
  methods: {
    handleClick(){
      this.$emit('click')
    },
    // 上滑
    _scrollUp() {
      // console.log('上滑')
      this.showBackTop = true;
      this.scrollUp && this.scrollUp()
    },
    // 下滑
    _scrollDown() {
      // console.log('下滑')
      this.showBackTop = false;
      this.scrollDown && this.scrollDown()
    },
    // 滑动停止
    _scrollStop() {
      // console.log('滑动停止')
      this.showBackTop = true;
      this.scrollStop && this.scrollStop()
    },
    _handleInteraction() {
      let top = this.scrollEl.pageYOffset || this.scrollEl.scrollTop
      // console.log('distance', this.distance)
      // console.log('top', top)
      if (top >= this.distance) {
        this.showFloat = true;
        if (this._prevTop - top < 0/* && this.slideMenu*/) {
          // 下滚动
          this._scrollDown()
        } else if (this._prevTop - top > 0) {
          // 上滚动
          this._scrollUp()
        }
      }
      this._prevTop = top
    },
    // 监听 手指离开屏幕 和 惯性停止，两者同时满足才说明用户停止滑动，按住也算滑
    _listenScroll() {
      this.scrollEl.addEventListener('touchstart', () => {
        this._scrollTouch = true
      })
      this.scrollEl.addEventListener('touchend', () => {
        this._scrollTouch = false
        this._scrollStop()
      })
      this.scrollEl.addEventListener('scroll', () => {
        this._scrolling = true
        clearTimeout(this._stimer)
        this._stimer = null
        this._stimer = setTimeout(() => {
          this._scrolling = false
          this._scrollStop()
        }, 800)
      })
    }
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
  