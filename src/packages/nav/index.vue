<template>
  <div :class="classes" :style="styles" v-if="navs && navs.length > 0">
    <div
      :class="{ 'nutcat-nav-fixed': sticky && !options.disabled }"
      :style="stylesFixed"
    >
      <span
        v-if="stickyOptions.showButton"
        class="nutcat-nav-expand"
        ref="showAllButton"
        @click="expand"
        :style="stylesExpand"
      >
        <span class="nutcat-nav-arrow" :class="{ expand: isShowAll }"></span>
      </span>
      <div
        v-if="isShowAll"
        class="nutcat-nav-expand-topbar"
        :style="stylesTopBar"
        >{{ stickyOptions.title }}</div
      >
      <div class="nutcat-nav-bar" ref="stickyNav" :style="stylesBar">
        <div class="scroll-view" ref="scollView">
          <ul class="nutcat-nav-ul">
            <template v-if="type == 'left'">
              <li
                class="nutcat-nav-item"
                :style="{
                  'font-size': stickyOptions.fontSize,
                  color:
                    activeIndex == i
                      ? stickyOptions.activeColor
                      : stickyOptions.color,
                  'background-color':
                    activeIndex == i
                      ? stickyOptions.activeBgColor
                      : stickyOptions.bgColor,
                  height: stickyOptions.navItemHeight
                }"
                v-for="(nav, i) in stickyOptions.navs"
                :key="i"
                :class="{ active: activeIndex == i }"
                ref="navitem"
                :index="i"
                @click="change(nav, i)"
              >
                <!-- <div class="title" v-if="i < stickyOptions.navs.length - 1">
                  {{ i + 1 }}F
                  <span class="sub">{{ activeIndex == i ? '到了' : '' }}</span>
                </div> -->
                <div class="item-content">{{ nav }}</div>
              </li>
            </template>
            <template v-else>
              <li
                class="nutcat-nav-item"
                :style="{
                  'font-size': stickyOptions.fontSize,
                  color:
                    activeIndex == i
                      ? stickyOptions.activeColor
                      : stickyOptions.color
                }"
                v-for="(nav, i) in stickyOptions.navs"
                :key="i"
                :class="{ active: activeIndex == i }"
                ref="navitem"
                :index="i"
                @click="change(nav, i)"
              >
                <template v-if="stickyOptions.icon">
                  <NutIcon
                    v-show="stickyOptions.showLbs && activeIndex == i"
                    :type="stickyOptions.icon"
                  ></NutIcon>
                </template>
                <span class="content">{{ nav }}</span>
                <!-- <span class="item-content">activeIndex:{{activeIndex}}</span> -->
              </li>
            </template>
            <slot></slot>
          </ul>
        </div>
      </div>
      <div
        class="nutcat-nav-expand-panel"
        v-show="isShowAll"
        :style="{
          top: stickyOptions.navHeight,
          'background-color': stickyOptions.expendBgColor
        }"
      >
        <ul class="nutcat-nav-ul">
          <li
            class="nutcat-nav-item"
            :style="{
              'font-size': stickyOptions.fontSize,
              color:
                activeIndex == i
                  ? stickyOptions.expandActiveColor
                  : stickyOptions.expendColor
            }"
            v-for="(nav, i) in navs"
            :key="i"
            :class="{ active: activeIndex == i }"
            @click="change(nav, i)"
          >
            <template v-if="stickyOptions.icon">
              <NutIcon v-show="stickyOptions.showLbs && activeIndex == i" :type="stickyOptions.icon"></NutIcon>
            </template>
            {{ nav }}
          </li>
        </ul>
      </div>
    </div>


    <div class="mask" v-if="isShowAll" @click="isShowAll = false">

    </div>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('nav');
import assign from 'lodash/assign';
import throttle from 'lodash/throttle';
import TWEEN from '@tweenjs/tween.js';
const DEFAULT_OPTIONS = {
  title: '请选择分类', // 导航栏展开面板上的标题
  stickyTop: -1, // 导航栏距离吸顶的top值
  disabled: false, // 导航栏是否禁止开启吸顶
  showLbs: false, // 是否显示定位icon
  showButton: false, // 是否显示展开按钮
  scrollAnimate: true, // 导航滚动是否使用动画
  scrollShow: false, // 是否滚动到楼层才展示，默认false
  scrollDownHide: false, // 向下滚不显示
  zIndex: 101,
  icon: 'lbs',
  threshold: 0,

  navWidth: '51px', // 导航栏宽度，用于左侧导航
  navHeight: '44px', // 导航栏高度
  navItemHeight: '58px', // 导航栏高度，用于左侧导航
  fontSize: '14px', // 导航栏上的文字字号
  bgColor: '#fff', // 导航栏背景色
  color: '#2E2D2D', // 导航栏文字颜色
  activeColor: '#FD0000', // 导航栏选中字体颜色
  activeBgColor: '#fff', // 导航栏当前选项的背景颜色
  expendColor: '#2E2D2D', // 导航栏展开面板字体颜色
  expendTitleColor: '#8c8c8c', // 导航栏展开面板标题颜色
  expandActiveColor: '#FD0000', // 导航栏展开面板选中字体颜色
  expendBgColor: '#e5e5e5' // 导航栏展开面板背景色
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
    },
    navMoudle: {
      type: [Object, String],
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
  components: {
  },
  created() {
    // console.log('this.type', this.type);
    this.stickyOptions = assign({}, DEFAULT_OPTIONS, this.options);
    this.navs = this.stickyOptions.navs;
  },
  watch: {
    options: {
      handler(value) {
        assign(this.stickyOptions, value);
        this.stickyOptions.threshold =
          // this.stickyOptions.threshold +
          this.stickyNav.offsetHeight +
          this.stickyOptions.stickyTop;
        console.log('watch threshold 2', this.stickyOptions.threshold)
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
      if(state){
        this.isShowAll = false
      }
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
        [componentName]: true,
        [componentName + '-' + this.type]: this.type,
        // [`${componentName}-${(this as any).col}`]: (this as any).col,
        'hide-nutcat-nav': this.stickyOptions.scrollShow && !this.visable,
        'hide-up': this.scrollHide
      };
    },
    styles() {
      if (this.stickyOptions.scrollShow) {
        return 'height: 0';
      } else {
        if (this.type == 'left') {
          return {
            width: this.stickyOptions.navWidth
          };
        }
        return {
          height: this.stickyOptions.navHeight
        };
      }
    },
    stylesFixed() {
      if (this.type == 'left') {
        return {
          width: this.stickyOptions.navWidth
        };
      }
      return {
        top: this.stickyOptions.stickyTop + 'px',
        'z-index': this.stickyOptions.zIndex
      };
    },
    stylesExpand() {
      return {
        height: this.stickyOptions.navHeight
      };
      // return {
      //   'background-image': `this.bgUrl})`,
      //   'background-repeat': 'no-repeat',
      //   'background-position': 'center',
      //   'background-size': '100% 100%'
      // };
    },
    stylesBar() {
      return {
        height: this.stickyOptions.navHeight,
        'line-height': this.stickyOptions.navHeight,
        background: this.stickyOptions.bgColor
      };
    },
    stylesTopBar() {
      return {
        height: this.stickyOptions.navHeight,
        'line-height': this.stickyOptions.navHeight,
        'font-size': this.stickyOptions.fontSize,
        color: this.stickyOptions.expendTitleColor,
        background: this.stickyOptions.bgColor
      };
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
      // this.stickyOptions.threshold +
      this.stickyNav.offsetHeight +
      this.stickyOptions.stickyTop;

    // console.log('mounted', this.stickyOptions.stickyTop)

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
      console.log('item', index)
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
      const dis = this.stickyNav.offsetHeight +
                                      this.stickyOptions.stickyTop
      // window.scrollTo(0, scrollTop - dis);
      // window.scrollTo(0, scrollTop - this.stickyOptions.threshold);

      window.scrollTo(0, scrollTop - this.stickyOptions.threshold);
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
      // console.log('this.scrollTop', this.scrollTop);
      // console.log('window.scrollY', window.scrollY);
      // console.log('scrollTop', scrollTop);
      const navOffsetTop = this.getScrollTopElement(this.$el);

      // 是否滚动到楼层才显示导航

      if (this.stickyOptions.scrollShow) {
        if (scrollTop >= navOffsetTop) {
          this.visable = true;
        } else {
          this.visable = false;
        }
      }
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
        div.className = 'nutcat-nav-overlay';
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
      return document.getElementsByClassName('nutcat-nav-overlay')[0];
    }
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>



<style scoped>
.mask{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>