<template>
  <div :class="classes">
    <div class="star-list" v-for="(item, index) of list" :class="'star-list-'+(index+1)" :key="'start-barnd'+index">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide star-item"
          v-for="(item2, index2) in item"
          :key="index2"
        >
          <img class="swiper-img" :src="item2.pictureUrl" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/utils/create';
import Swiper from '../utils/swiper';
const { componentClass, create } = createComponent('starbrand');

export default create({
  props: {
    brandList: {
      type: Array,
      default: []
    },
  },
  watch: {
    brandList: {
      handler(val) {
        (this as any).list = val;
        (this as any).initSwiper();
      },
      deep: true
    }
  },
  data() {
    return {
      list: []
    };
  },
  components: {},
  computed: {
    classes() {
      return {
        [componentClass+'-page']: true,
      };
    }
  },
  mounted() {
    this.list = this.brandList;
    this.initSwiper()
  },
  methods: {
    handle(item) {
      (this as any).$emit("callback", item);
    },
    initSwiper() {
      let that:any = this;
      (this as any).list.forEach((item, index) => {
        Swiper('.star-list-'+(index+1), {
          direction: 'horizontal',
          autoplay: {
            disableOnInteraction: false
          },
          grabCursor: true,
          loop: true, // 是否循环
          speed: 300, // 过度时间
          // centeredSlides: true, // 当前居中
          slidesPerView: 'auto', // 同时显示多少个
          slidesOffsetBefore: index % 2 ? 50 : 0,
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          slideToClickedSlide: false, // 点击过渡到该slide
          freeMode: false,
          freeModeMomentum: false, // 取消惯性
          on: {
            click(swiper:any) {
              that.$emit("callback", item[index]);
            }
          }
        });
      });
    }
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
  