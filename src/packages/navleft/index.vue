<template>
  <div
    :class="classes"
    :style="styles"
    class="sticky-nav-container"
    v-if="navs && navs.length > 0"
  >
    <div
      :class="{ 'sticky-nav-fixed': sticky && !options.disabled }"
      :style="
        `top:${stickyOptions.stickyTop}px;z-index:${stickyOptions.zIndex};`
      "
    >
      <span
        v-if="stickyOptions.showButton"
        class="stickyNav-expand"
        ref="showAllButton"
        @click="expand"
      >
        <span class="sticky-nav-arrow" :class="{ expand: isShowAll }"></span>
      </span>
      <div v-if="isShowAll" class="sticky-nav-expand-topbar">{{
        stickyOptions.title
      }}</div>
      <div class="sticky-nav" ref="stickyNav">
        <div class="scroll-view" ref="scollView">
          <ul class="sticky-nav-ul">
            <li
              class="sticky-nav-item"
              v-for="(nav, i) in stickyOptions.navs"
              :key="i"
              :class="{ active: activeIndex == i }"
              ref="navitem"
              :index="i"
              @click="change(nav, i)"
            >
              <NutIcon v-show="stickyOptions.showLbs && activeIndex == i" type="lbs"></NutIcon>
              <template class="type == left">
                <div class="title" v-if="i < stickyOptions.navs.length - 1">
                  {{ i + 1 }}F
                  <span class="sub">{{ activeIndex == i ? '到了' : '' }}</span>
                </div>
                <div class="content">{{ nav }}</div>
              </template>
            </li>
            <slot></slot>
          </ul>
        </div>
      </div>
      <div class="sticky-nav-expand-panel" v-show="isShowAll">
        <ul class="sticky-nav-ul">
          <li
            class="sticky-nav-item"
            v-for="(nav, i) in navs"
            :key="i"
            :class="{ active: activeIndex == i }"
            @click="change(nav, i)"
          >
            <NutIcon v-show="stickyOptions.showLbs && activeIndex == i" type="lbs"></NutIcon>
            {{ nav }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('navleft');

import assign from 'lodash/assign';
import throttle from 'lodash/throttle';
import TWEEN from '@tweenjs/tween.js';
const DEFAULT_OPTIONS = {
  zIndex: 101,
  stickyTop: -1,
  threshold: 0,
  disabled: false,
  showLbs: false, // 是否显示定位icon
  showButton: false, // 是否显示展开按钮
  scrollAnimate: true, // 导航滚动是否使用动画
  scrollShow: false, //是否滚动到楼层才展示，默认false
  scrollDownHide: false, // 向下滚不显示
  title: '请选择分类'
};

export default create({
  props: {
    type: {
      type: String,
      default: ''
    },
    options: {
      type: [Object, Array],
      default: ''
    }
  },
  data() {
    return {
      navs: [],
      activeIndex: 0,
      isShowAll: false,
      translateX: 0,
      translateY: 0,
      visable: false,
      sticky: false,
      stickyOptions: {},
      scrollTop: 0,
      scrollHide: false, // 滚动是否隐藏
      scrollTimer: null, // 滚动隐藏定时器,
      isClickScroll: false
    };
  },
  components: {},
  created() {
    this.stickyOptions = assign({}, DEFAULT_OPTIONS, this.options);
    this.navs = this.stickyOptions.navs;
    // console.log('options', this.stickyOptions, this.navs, this.options)
  },
  watch: {
    options: {
      handler(value) {
        assign(this.stickyOptions, value);
      },
      deep: true
    },
    translateX(newValue, oldValue) {
      if (this.stickyOptions.scrollAnimate) {
        this.tween(oldValue, newValue);
      } else {
        this.scrollView.scrollLeft = -newValue;
      }
    },
    translateY(newValue, oldValue) {
      if (this.stickyOptions.scrollAnimate) {
        this.tweenY(oldValue, newValue);
      } else {
        this.scrollView.scrollTop = -newValue;
      }
    },
    activeIndex(value, oldValue) {
      setTimeout(() => {
        if (this.type == 'left') {
          this.navtoY(value);
        } else {
          this.navtoX(value);
        }
      }, 0);
      this.$emit('changed', value);
    },
    scrollTop(value, oldValue) {
      console.log(
        'this.stickyOptions.scrollDownHide',
        this.stickyOptions.scrollDownHide
      );
      if (this.stickyOptions.scrollDownHide) {
        if (this.isClickScroll) {
          setTimeout(() => {
            this.isClickScroll = false;
          }, 10);
        }
        if (this.isClickScroll) return;
        const navshowDelay = 2000;
        const start = this.activeIndex > 0; // 滑过楼层1才生效
        //down
        if (value > oldValue && start) {
          this.scrollHide = true;
          clearTimeout(this.scrollTimer);
          this.scrollTimer = null;
        } else {
          this.scrollHide = false;
        }
        if (!this.scrollTimer) {
          this.scrollTimer = setTimeout(() => {
            this.scrollHide = false;
            this.isClickScroll = false;
          }, navshowDelay);
        }
      }
    },
    scrollHide(state) {
      this.$emit('navState', state);
    },
    isShowAll(state) {
      this.$emit('expand', state);
      let $overlay = this.getOverlay();
      if ($overlay) {
        $overlay.style.display = state ? 'block' : 'none';
      }
    }
  },
  computed: {
    classes() {
      return {
        [componentName + '-content']: true,
        [componentName + '-' + this.type]: this.type,
        // [`${componentName}-${(this as any).col}`]: (this as any).col,
        'hide-stickynav': this.stickyOptions.scrollShow && !this.visable,
        'hide-up': this.scrollHide
      };
    },
    styles() {
      if (this.stickyOptions.scrollShow) {
        return 'height: 0';
      }
    },
    sections() {
      if (this.stickyOptions.sectionSelector) {
        return document.getElementsByClassName(
          this.stickyOptions.sectionSelector
        );
      }
    },
    stickyNav() {
      return this.$refs.stickyNav;
    },
    scrollView() {
      return this.$refs.scollView;
    },
    buttonWidth() {
      return this.$refs.showAllButton.offsetWidth + 'px';
    }
  },
  mounted() {
    this.stickyOptions.threshold =
      this.stickyOptions.threshold +
      this.stickyNav.offsetHeight +
      this.stickyOptions.stickyTop;

    window.addEventListener('scroll', throttle(this.scrollHandle, 100), true);
    // 监听左侧导航滑动
    // this.scrollView.addEventListener("scroll", throttle(this.scrollTip, 100));

    if (this.stickyOptions.showButton) {
      this.insertOverlay();
      this.stickyNav.style.paddingRight = this.buttonWidth;
    }
  },
  methods: {
    /* click event */
    change(item, index) {
      this.isShowAll = false;
      this.scrollTo(index);
      this.$emit('click', item, index);
      this.isClickScroll = true;
    },
    //导航条动画
    tween(startValue, endValue) {
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }
      new TWEEN.Tween({
        number: startValue
      })
        .to(
          {
            number: endValue
          },
          100
        )
        .onUpdate(tween => {
          this.scrollView.scrollLeft = -tween.number;
        })
        .start();
      animate();
    },
    // 左侧导航动画
    tweenY(startValue, endValue) {
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }
      new TWEEN.Tween({
        number: startValue
      })
        .to(
          {
            number: endValue
          },
          100
        )
        .onUpdate(tween => {
          this.scrollView.scrollTop = -tween.number;
        })
        .start();
      animate();
    },
    scrollTo(index) {
      const scrollTop = this.getScrollTopElement(this.sections[index]);
      window.scrollTo(0, scrollTop - this.stickyOptions.threshold);

      // window.scrollTo(0, scrollTop - this.stickyOptions.stickyTop);
    },
    getScrollTopElement($element) {
      var top = 0;
      while (
        $element.offsetParent !== undefined &&
        $element.offsetParent != null
      ) {
        top +=
          $element.offsetTop +
          ($element.clientTop != null ? $element.clientTop : 0);
        $element = $element.offsetParent;
      }
      return top;
    },
    // 滑动侧导航隐藏top提示
    scrollTip() {
      this.showScrollTip = false;
      // this.refs.scrollTip
    },
    scrollHandle() {
      if (this.stickyOptions.disabled) {
        return;
      }
      let scrollTop = (this.scrollTop = window.scrollY);
      console.log('this.scrollTop', this.scrollTop);
      console.log('window.scrollY', window.scrollY);
      console.log('scrollTop', scrollTop);
      const navOffsetTop = this.getScrollTopElement(this.$el);

      // 是否滚动到楼层才显示导航

      if (this.stickyOptions.scrollShow) {
        if (scrollTop >= navOffsetTop) {
          this.visable = true;
        } else {
          this.visable = false;
        }
      }
      console.log('this.sections', this.sections);
      if (this.sections.length) {
        if (scrollTop < navOffsetTop) {
          this.activeIndex = 0;
        }
        //超过最后一个停止吸顶
        let lastSection = this.sections[this.sections.length - 1];
        // console.log('scrollTop', scrollTop)
        // console.log('scroll', this.getScrollTopElement(lastSection) + lastSection.offsetHeight)
        if (
          scrollTop + 200 >
            this.getScrollTopElement(lastSection) + lastSection.offsetHeight ||
          scrollTop < navOffsetTop
        ) {
          this.sticky = false;
        } else {
          this.sticky = true;
        }
        console.log('this.sticky', this.sticky);
      }
      for (let i = 0; i < this.sections.length; i++) {
        let section = this.sections[i];
        let offsetTop = this.getScrollTopElement(section);
        if (
          offsetTop - this.stickyOptions.threshold <= scrollTop &&
          offsetTop + section.offsetHeight > scrollTop
        ) {
          this.activeIndex = i;
        }
      }
    },
    //导航栏移动
    navtoX(index) {
      const activeItem = this.$refs.navitem[index];
      const offsetLeft = activeItem.offsetLeft;
      const touchWidth = this.stickyNav.offsetWidth;
      const buttonWidth = this.stickyOptions.showButton ? this.buttonWidth : 0;
      const scrollWidth =
        this.scrollView.scrollWidth - this.stickyNav.offsetWidth + buttonWidth;

      if (scrollWidth == 0) {
        return;
      }
      const half = (touchWidth - activeItem.offsetWidth) / 2;
      let changeX = 0;
      const absTransX = Math.abs(this.translateX);

      if (offsetLeft <= absTransX + half) {
        // item偏左，需要往右移
        let pageX = offsetLeft + this.translateX;
        changeX = half - pageX;
      } else {
        // item偏右，需要往左移
        changeX = -(offsetLeft - absTransX - half);
      }
      let lastX = changeX + this.translateX;

      // 两种边界情况
      lastX > 0 && (lastX = 0);
      lastX < -scrollWidth && (lastX = -scrollWidth);
      this.translateX = lastX;

      // this.scrollView.scrollLeft = Math.abs(this.translateX)
    },
    // 垂直导航栏移动
    navtoY(index) {
      const activeItem = this.$refs.navitem[index];
      const offsetTop = activeItem.offsetTop; // 距左
      const touchHeight = this.stickyNav.offsetHeight; // 宽度
      // const buttonHeight = this.stickyOptions.showButton ? this.buttonHeight : 0;
      const scrollHeight =
        this.scrollView.scrollHeight - this.stickyNav.offsetHeight;
      // console.log("activeItem", activeItem)
      // console.log("offsetTop", offsetTop)
      // console.log("touchHeight", touchHeight)
      // console.log("this.scrollView.scrollHeight", this.scrollView.scrollHeight)

      if (scrollHeight == 0) {
        return;
      }
      const half = (touchHeight - activeItem.offsetHeight) / 2;
      let changeY = 0;
      const absTransY = Math.abs(this.translateY);
      // console.log("absTransY", absTransY)
      if (offsetTop <= absTransY + half) {
        // console.log('往上移')
        // item偏下，需要往上移
        let pageY = offsetTop + this.translateY;
        changeY = half - pageY;
      } else {
        // console.log('往下移')
        // item偏上，需要往下移
        changeY = -(offsetTop - absTransY - half);
      }
      let lastY = changeY + this.translateY;

      // 两种边界情况
      lastY > 0 && (lastY = 0);
      lastY < -scrollHeight && (lastY = -scrollHeight);
      this.translateY = lastY;

      // this.scrollView.scrollTop = Math.abs(this.translateX)
    },

    //展开分类
    expand() {
      this.isShowAll = this.isShowAll ? false : true;
    },
    //createOverloay
    insertOverlay() {
      if (!this.getOverlay()) {
        var div = document.createElement('div');
        div.className = 'stickyNav-overlay';
        div.addEventListener('touchstart', () => {
          div.style.display = 'none';
          this.isShowAll = false;
        });
        div.addEventListener('click', () => {
          div.style.display = 'none';
          this.isShowAll = false;
        });
        document.body.appendChild(div);
      }
    },
    getOverlay() {
      return document.getElementsByClassName('stickyNav-overlay')[0];
    }
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
