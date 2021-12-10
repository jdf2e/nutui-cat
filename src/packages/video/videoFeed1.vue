<template>
  <div :class="classes" :style="styles" @click="toVideo(data)">
    <template v-if="col == '2'">
      <NutImage :src="data.src" class="img-box">
        <NutTag class="video-time" type="video-time">{{getVideoTime(data.videoDuration)}}</NutTag>
        <NutText class="sub-name" :row="nameRow">{{data.name}}</NutText>
      </NutImage>
      <div class="video-content">
        <NutText class="sub-name" row="2">
          <NutTag class="icon-618" type="618">618</NutTag>
          {{data.productName}}
        </NutText>
        <div class="video-bottom">
          <div class="user-box">
            <NutImage class="user-img" :src="data.authorPic"></NutImage>
            <NutText class="user-name" row="2">{{data.authorName}}</NutText>
          </div>
          <div class="zan-box" @click.stop="toZan(data)" :class="{'zan': data.isZan}">
            <NutIcon class="icon-zan" type="good"></NutIcon>
            <NutText class="sub-num" row="1">{{data.pageView}}</NutText>
          </div>
        </div>
      </div>
      </template>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('video');

export default create({
  props: {
    data: {
      type: [Array, Object],
      default: function() {
        return [];
      }
    },
    col: {
      type: [String, Number],
      default: '1'
    },
    type: {
      type: String,
      default: ''
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    nameRow: {
      type: [String, Number],
      default: '2'
    },
    descRow: {
      type: [String, Number],
      default: '1'
    },
    tag: {
      type: String,
      default: ''
    },
    // bgColor: {
    //   type: String,
    //   default: ''
    // },
    // bgUrl: {
    //   type: String,
    //   default: ''
    // },
    // imgWidth: {
    //   type: [String, Number],
    //   default: ''
    // },
    // imgHeight: {
    //   type: [String, Number],
    //   default: ''
    // }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    classes() {
      return {
        [componentName]: true,
        [`${componentName}-${(this as any).col}`]: (this as any).col,
        [`${componentName}-${(this as any).type}`]: (this as any).type,
        [`${componentName}-scrollX`]: (this as any).scrollX
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
    }
  },
  methods: {
    getVideoTime(duration: any) {
      if (['number', 'string'].includes(typeof duration)) {
        duration = parseInt(duration, 10)
        const mimute = ('0' + Math.floor(duration / 60)).slice(-2)
        const second = ('0' + Math.floor(duration % 60)).slice(-2)
        return `${mimute}:${second}`
      }
      return '00:00'
    },
    toZan(item: any) {
      // console.log('item', item)
      console.log('item', item)
      if(item.isZan) {
        // item.isZan = !item.isZan;
        (this as any).$set(item, 'isZan', !item.isZan);
        if(item.extension && item.extension.pageView) {
          item.extension.pageView = item.extension.pageView - 1
          // this.$set(item.extension, 'pageView', item.extension.pageView - 1);
        }
        console.log('item 0', item.extension.pageView)
      } else {
        // item.isZan = !item.isZan;
        (this as any).$set(item, 'isZan', !item.isZan);
        if(item.extension && item.extension.pageView) {
          item.extension.pageView = item.extension.pageView + 1
          // this.$set(item.extension, 'pageView', item.extension.pageView + 1);
        }
        console.log('item 1', item.extension.pageView)
      }
      (this as any).$forceUpdate()
    }
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
$prefix: nutcat-video;

.#{$prefix}-feed-1 {
  width: 100%;
  height: 395px;
  margin-top: 3px;
  background: #fff;
  border-radius: 8px;
  .img-box {
    height: 314px;
    .video-time {
      position: absolute;
      top: 9px;
      left: 9px;
    }
    .sub-name {
      position: absolute;
      bottom: 6px;
      left: 9px;
      width: 150px;
      height: 30px;
      font-size: 12px;
      color: #fff;
      text-align: left;
    }
  } 
  .video-content {
    padding-top: 9px;
    .sub-name {
      margin-bottom: 6px;
      padding: 0 12px;
      height: 30px;
      font-size: 12px;
      color: #2E2D2D;
      text-align: left;
    }
  }
  .video-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 12px;
    padding-right: 6px;
    font-size: 0;
  }
  .user-img {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 3px;
    vertical-align: middle;
    border-radius: 50%;
  }
  .user-name {
    display: inline-block;
    font-size: 12px;
    color: #999999;
    vertical-align: middle;
  }
  .zan-box {
    color: #9C9C9C;
    &.zan {
      color: #FF1313;
    }
  }
  .icon-zan {
    font-size: 12px;
    margin-right: 3px;
    vertical-align: middle;
  }
  .sub-num {
    display: inline-block;
    font-size: 10px;
    vertical-align: middle;
  }
}

</style>
