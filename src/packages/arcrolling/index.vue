<template>
  <div class="nutcat-arcrolling-page">
    <div
      :class="
        directionType == 'vertical'
          ? 'star-person-list-v'
          : 'star-person-list-h'
      "
    >
      <div
        class="swiper-wrapper"
        :class="
          directionType == 'vertical' ? ' star-wrapper-v' : 'star-wrapper-h'
        "
        ref="starWrapper"
        v-if="starList.length"
      >
        <div
          class="swiper-slide star-item"
          v-for="(item, index) of starList"
          :key="'huxing' + index"
        >
          <div class="star-box">
            <img :src="item.pictureUrl" class="star_head" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('arcrolling');
import Swiper from '../utils/swiper';

export default create({
  props: {
    list: {
      type: Array,
      default: []
    },
    leftDistance: {
      type: Array,
      default: ['210', '280', '410']
    },
    directionType: {
      type: String,
      default: 'vertical'
    }
  },
  watch: {
    list: {
      handler(val) {
        (this as any).starList = val;
        (this as any).initSwiperStar();
      },
      deep: true
    }
  },
  data() {
    return {
      swiperStarHot: null,
      starList: []
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
  mounted() {
    this.initSwiperStar();
  },
  methods: {
    initSwiperStar() {
      let that: any = this;
      if (that.starList.length == 0) {
        return;
      }
      if (that.directionType == 'horizontal') {
        that.swiperStarHot = Swiper('.star-person-list-h', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          slideToClickedSlide: true, // 点击过渡到该slide
          spaceBetween: 10,
          coverflowEffect: {
            rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
            stretch: 1, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
            depth: 130, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier: 1, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows: false //开启slide阴影。默认 true。
          },
          speed: 1000,
          loop: true,
          autoplay: {
            delay: 2000,
            stopOnLastSlide: false, // 切换到最后一个时不停止
            disableOnInteraction: false //用户操作swiper之后 不停止autoplay
          },
          on: {
            init() {
              let _index = (this as any).activeIndex;
              that.getRealList(_index);
            },
            slideChange() {
              let _index = (this as any).activeIndex;
              that.getRealList(_index);
            },
            touchEnd: function(swiper: any) {
              that.$emit('callback', swiper);
            },
            onSlideChangeEnd: function(swiper: any) {
              swiper.update();
            }
          }
        });
      } else {
        that.swiperStarHot = Swiper('.star-person-list-v', {
          direction: 'vertical',
          loop: true, // 是否循环
          loopAdditionalSlides: 3,
          loopedSlides: 5,
          slidesPerView: 'auto', // 同时显示多少个
          slideToClickedSlide: true, // 点击过渡到该slide
          spaceBetween: 30,
          // autoplay: {
          //   delay: 3000,
          //   stopOnLastSlide: false, // 切换到最后一个时不停止
          //   disableOnInteraction: false //用户操作swiper之后 不停止autoplay
          // },
          // enteredSlides: true,
          centeredSlides: true,
          grabCursor: true,
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          freeMode: false,
          freeModeMomentum: false, // 取消惯性
          effect: 'coverflow',
          coverflowEffect: {
            rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
            stretch: 0, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
            depth: 300, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier: 1, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows: false //开启slide阴影。默认 true。
          },
          on: {
            init() {
              let _index = (this as any).activeIndex;
              that.setPrevSize(_index);
            },
            slideChange() {
              let _index = (this as any).activeIndex;
              that.setPrevSize(_index);
            },
            touchEnd: function(swiper: any) {
              that.$emit('callback', swiper);
            },
            onSlideChangeEnd: function(swiper: any) {
              swiper.update();
            }
          }
        });
      }
    },
    setPrevSize(midIndex: number) {
      const that: any = this;
      const realList = [
        midIndex - 2,
        midIndex - 1,
        midIndex,
        midIndex + 1,
        midIndex + 2
      ];
      const realListStartIndex = realList[0];
      const realListendIndex = realList[realList.length - 1];
      const children = (this as any).$refs.starWrapper.children;
      children.forEach((element: any, idx: number) => {
        if (children[idx]) {
          if (idx < realListStartIndex || idx > realListendIndex) {
            children[idx].style.left = '1000px';
            element.style.visibility = 'hidden';
          }
        }
      });
      realList.forEach((idx: number) => {
        if (children[idx]) {
          if (Math.abs(idx - midIndex) == 1) {
            children[idx].style.left = `${that.leftDistance[1] + 'px'}`;
          } else if (Math.abs(idx - midIndex) == 2) {
            children[idx].style.left = `${that.leftDistance[2] + 'px'}`;
          } else {
            children[idx].style.left = `${that.leftDistance[0] + 'px'}`;
          }
          children[idx].style.visibility = 'visible';
        }
      });
    },
    getRealList(midIndex: number) {
      // 屏幕上能看见的图片的索引
      const realList = [
        midIndex - 4,
        midIndex - 3,
        midIndex - 2,
        midIndex - 1,
        midIndex,
        midIndex + 1,
        midIndex + 2,
        midIndex + 3,
        midIndex + 4
      ];
      const realListStartIndex = realList[0];
      const realListendIndex = realList[realList.length - 1];
      const children = (this as any).$refs.starWrapper.children;
      realList.forEach((idx: number) => {
        if (idx < midIndex) {
          children[idx].style.top = `-${Math.pow(2, midIndex - idx) * 10}px`;
        } else if (idx > midIndex) {
          children[idx].style.top = `-${Math.pow(2, idx - midIndex) * 10}px`;
        } else {
          children[idx].style.top = 0;
        }
      });
      children.forEach((element: any, idx: number) => {
        if (idx <= realListStartIndex || idx >= realListendIndex) {
          element.style.top = '-60px';
        }
      });
      (this as any).$refs.starWrapper.style.visibility = 'visible';
    }
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
