<template>
  <div :class="classes" :style="styles">
    <template v-if="lazy">
      <img
        :class="classesImg"
        v-lazy="
          cut ?
          ImgSetFunction(src, {
            width: width,
            height: height
          }) :
          src
        "
      />
      <slot></slot>
    </template>
    <template v-else>
      <img
        :class="classesImg"
        :src="
          cut ?
          ImgSetFunction(src, {
            width: width,
            height: height
          }) :
          src
        "
      />
      <slot></slot>
    </template>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('image');
interface imgParams {
  width?: number;
  height?: number;
  postfix?: string | undefined;
  host?: string | undefined;
}

export default create({
  props: {
    src: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    },
    radius: {
      type: String,
      default: ''
    },
    cut: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  components: {},
  mounted() {},
  computed: {
    classes() {
      return {
        [componentName]: true
      };
    },
    classesImg() {
      return {
        [componentName + '-img']: true
      };
    },
    styles() {
      return {
        width: (this as any).width + 'px',
        height: (this as any).height + 'px',
        'border-radius': (this as any).radius + 'px'
      };
    }
  },
  methods: {
    //图片前缀域名处理
    hostStatus(status?: string) {
      let host = '';
      switch (status + '') {
        case '1':
          host = this.mainStationHost();
          break;
        case '2':
          host = 'm.360buyimg.com';
          break;
        case '3':
          host = 'img10.jd.id';
          break;
        case '4':
          host = 'img10.360buyimg.local';
          break;
        default:
          host = this.mainStationHost();
      }
      return host;
    },
    //主站域名处理
    mainStationHost() {
      const imgArray = [10]; //域名有多种
      return (
        'img' +
        imgArray[Math.floor(Math.random() * imgArray.length)] +
        '.360buyimg.com'
      );
    },
    /**
     *
     *
     * @param {*} url
     * @param {*} params
     * @returns
     * @memberof ImgSet
     */
    ImgSetFunction(url: string, params: imgParams = {}) {
      if (!url) {
        return null;
      }
      if (url.indexOf('jfs') != 0) {
        if (url.indexOf('jfs') == -1) {
          // 链接中没有jfs，直接返回
          return url;
        } else {
          if (url.indexOf('_jfs') != -1) {
            // 链接已经被压缩过了
            return url;
          } else {
            // 有jfs，但不在开头，拼接压缩
            if (params.width && params.height) {
              const flag = url.indexOf('jfs');
              const len = url.length;
              return (
                url.substring(0, flag) +
                's' +
                params.width +
                'x' +
                params.height +
                '_' +
                url.substring(flag, len)
              );
            } else {
              return url;
            }
          }
        }
      } else {
        // jfs开头的链接
        const isDebug = window.location.href.indexOf('debug') > -1;
        const IP = isDebug ? 'http://' : 'https://';

        const business = 'n12';
        const postfix = params.postfix || '';
        const width = params.width;
        const height = params.height;
        let imgUrl = IP + this.hostStatus(params.host) + '/' + business;
        if (width && height) {
          imgUrl += '/s' + width + 'x' + height + '_' + url;
        } else {
          imgUrl += '/' + url;
        }
        return imgUrl + postfix;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
