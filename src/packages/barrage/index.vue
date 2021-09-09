<template>
  <div :class="classes" class="nutcat-barrage-page">
    <!-- 轨道 -->
    <div
      class="marquee"
      :key="index"
      v-for="(_list, index) in dmList"
      ref="marquee"
    >
      <template v-for="(item, _index) in _list">
        <div
          :key="item + index + _index"
          ref="marqueeItem"
          class="dmitem"
          v-html="item"
        >
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('barrage');

export default create({
  props: {
    list: {
      type: Array,
      default: []
    },
    speed: {
      type: Number,
      default: 70
    }
  },
  watch: {
    list: {
      handler(val) {
        (this as any).dmList = [...val];
        (this as any).start();
      },
      deep: true
    }
  },
  data() {
    return {
      dmList: [],
      index: 1
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
    // 弹幕启动
    this.start();
  },
  methods: {
    start() {
      const that: any = this;
      that.dmList = that.list;
      setTimeout(() => {
        const res = that.$refs.marquee as HTMLElement[];
        res.forEach(el => {
          that.beginMarquee(el, that.speed);
        });
      }, 100);
    },
    beginMarquee(el: HTMLElement, speed: number) {
      const that: any = this;
      const exec = () => {
        // 滚动速率 (px/s)
        el.style.transitionTimingFunction = 'linear';
        el.style.transitionDuration = `${el.scrollWidth / speed}s`;
        el.style.transform = el.scrollWidth
          ? `translateX(-${el.scrollWidth}px)`
          : '';
      };
      el.addEventListener('transitionend', () => {
        el.style.transitionDuration = `0s`;
        el.style.transform = `translateX(0px)`;
        exec();
      });
      exec();
    }
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
