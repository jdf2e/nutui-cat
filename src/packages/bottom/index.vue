<template>
  <div :class="classes" @click="handleClick" v-if="data">
    <div class="bottom-box" :style="styles">
      <template v-for="(item, index) in data">
        <div
          class="bottom-item"
          :key="index"
          :class="{
            backtop: showBackTop && index == 2,
            active: item.name == activeName
          }"
        >
          <div class="bottom-item-img first" :style="styleImg" @click="handleClick(item)">
            <img
              :src="
                item.name == activeName
                  ? item.comments[0]
                  : item.pictureUrl
              "
            />
          </div>
          <div
            class="bottom-item-img" :style="styleImg"
            v-if="index == 2"
            :key="index"
            @click="handleTop(item)"
          >
            <img :src="backTopImg" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentClass, create } = createComponent('bottom');
import throttle from 'lodash/throttle';

export default create({
  props: {
    data: {
      type: [Array, Object],
      default: function() {
        return [];
      }
    },
    elId: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '50px'
    },
    screenNum: {
      type: Number,
      default: 3
    },
    bgUrl: {
      type: String,
      default: ''
    },
    activeBgUrl: {
      type: String,
      default: ''
    },
    current: {
      type: [String, Number],
      default: ''
    },
    activeName: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: ''
    },
    backTopImg: {
      type: String,
      default: '//storage.360buyimg.com/grass/top.png'
    },
    type: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      scrollEl: window as HTMLElement | Window,
      showNa: false,
      bottomData: {},
      asyncData: {},
      showBackTop: false,
      curTop: ''
    };
  },
  components: {},
  computed: {
    classes() {
      return {
        [componentClass]: true,
        [`${componentClass}-${(this as any).type}`]: (this as any).type,
      };
    },
    styles() {
      if ((this as any).bgUrl) {
        return {
          'background-image': `url(${(this as any).bgUrl})`,
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-size': '100% 100%'
        };
      }
      if ((this as any).bgColor) {
        return {
          'background-color': `${(this as any).bgColor}`
        };
      }
      return {
        'height': `calc(${(this as any).height} + constant(safe-area-inset-bottom)) !important`,
        // @ts-ignore: Unreachable code error
        'height': `calc(${(this as any).height} + env(safe-area-inset-bottom)) !important`
      };
    },
    styleImg() {
      return {
        'width': `${(this as any).height}`,
        'height': `${(this as any).height}`
      };
    }
  },
  mounted() {
    if ((this as any).elId && document.getElementById((this as any).elId)) {
      (this as any).scrollEl = document.getElementById((this as any).elId) as
        | HTMLElement
        | Window;
    }
    console.log('(this as any).scrollEl', (this as any).scrollEl);
    console.log('window', window);
    (this as any).scrollEl.addEventListener('scroll', throttle((this as any).checkScroll, 300, 1), true)

    // window.addEventListener('scroll', throttle(this.scrollHandle, 100), true);
  },
  methods: {
    handleClick(item: any) {
      // console.log('click')
      (this as any).$emit('onClick');
      if (item.name != (this as any).activeName) {
        // this.$jump.toUrl(item.link);
      }
    },

    checkScroll(e: any) {
      e && e.stopPropagation();
      if ((this as any).scrollEl instanceof Window) {
        (this as any).curTop = (this as any).scrollEl.pageYOffset;
      } else {
        (this as any).curTop = (this as any).scrollEl.scrollTop;
      }
      // const curTop =
      //   document.documentElement.scrollTop || document.body.scrollTop;
      if ((this as any).curTop >= window.innerHeight * (this as any).screenNum) {
        if (!(this as any).showBackTop) {
          (this as any).showBackTop = true;
        }
      } else if ((this as any).showBackTop) {
        (this as any).showBackTop = false;
      }
    },
    handleTop(item: any) {
      (this as any).$emit('backTop');
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
});
</script>

<style lang="scss">
@import 'index.scss';


</style>
