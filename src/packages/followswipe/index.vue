<template>
  <div class="idle-container">
    <!-- 顶部列表 -->
    <div class="lucida-list">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide lucida-item"
          v-for="i in list"
          :key="i.advertId"
        >
          <img :src="i.sImg" alt="" />
        </div>
      </div>
    </div>
    <!-- 底部列表 -->
    <div class="shop-list">
      <div class="swiper-wrapper">
        <div class="swiper-slide shop-item" v-for="i in list" :key="i.advertId">
          <img :src="i.bImg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { create } = createComponent('followswipe');
import Swiper from '../utils/swiper';
export default create({
  props: {
    value: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      list: [],
      lucidaSwiper: null,
      shopSwiper: null
    };
  },
  watch: {
    value(newValue, oldValue) {
      if (Object.keys(newValue).length) {
        this.list = newValue;
        console.log('newValue', newValue);
        this.initLucidaSwiper();
        this.initShopSwiper();
      }
    }
  },
  methods: {
    initLucidaSwiper() {
      Swiper(`.lucida-list`, {
        direction: 'horizontal',
        grabCursor: true,
        loop: true, // 是否循环
        speed: 300, // 过度时间
        centeredSlides: true, // 当前居中
        slidesPerView: 'auto', // 同时显示多少个
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        slideToClickedSlide: true, // 点击过渡到该slide
        freeMode: false,
        runCallbacks: true,
        freeModeMomentum: false, // 取消惯性
        spaceBetween: 10,
        on: {
          touchEnd: () => {}
        }
      }).then(res => {
        this.lucidaSwiper = res;
        this.$nextTick(() => {
          this.lucidaSwiper.controller.control = this.shopSwiper;
        });
      });
    },
    initShopSwiper() {
      Swiper(`.shop-list`, {
        effect: 'coverflow',
        direction: 'horizontal',
        grabCursor: true,
        loop: true, // 是否循环
        speed: 300, // 过度时间
        centeredSlides: true, // 当前居中
        slidesPerView: 'auto', // 同时显示多少个
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        slideToClickedSlide: true, // 点击过渡到该slide
        freeMode: false,
        freeModeMomentum: false, // 取消惯性
        coverflowEffect: {
          rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
          stretch: -15, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
          depth: 75, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          modifier: 1.5, //depth和rotate和stretch的倍率，相当于  depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          slideShadows: false //开启slide阴影。默认 true。
        },
        on: {
          touchEnd: () => {}
        }
      }).then(res => {
        this.shopSwiper = res;
        this.$nextTick(() => {
          this.shopSwiper.controller.control = this.lucidaSwiper;
        });
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
