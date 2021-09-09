<template>
  <div
    :class="classes"
    :style="`background:url(${data.indexImage}) center/100% 100% no-repeat`"
  >
    <img class="normal-item-status" :src="getStatusSrc(data.status)" alt="" />
    <div class="normal-item-desc">
      <div class="ellips">{{ data.desc }}</div>
    </div>
    <div class="normal-item-label">
      <nutcat-text class="normal-item-title" row="1">
        {{ data.title }}
      </nutcat-text>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('live');
export default create({
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  computed: {
    classes() {
      return {
        [componentName]: true,
        [`${componentName}-normal`]: true
      };
    }
  },
  methods: {
    getStatusSrc(status: number) {
      return [
        'https://img12.360buyimg.com/imagetools/jfs/t1/161047/25/3929/3416/60094716Eade1e772/005ac5dbcc1ab7f1.png',
        'https://img14.360buyimg.com/imagetools/jfs/t1/146145/22/8523/11862/5f620db2Eefb11979/16b247c06b647763.gif',
        'https://img11.360buyimg.com/imagetools/jfs/t1/160849/40/3846/3645/6009472dEe80d3772/65023953a103c647.png'
      ][status];
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/sites/assets/styles/common.scss';

.nutcat-live {
  position: relative;
  &-normal {
    width: 100%;
    height: 155px;
    margin-top: 1.5px;
    background: #fff;
  }
  &-room {
    width: 100%;
    height: 85px;
  }
}

.normal-item-status {
  width: 26px;
  height: 16px;
  position: absolute;
  top: 6px;
  left: 6px;
}
.normal-item-desc {
  color: rgba(255, 255, 255, 1);
  max-width: 50%;
  height: 15px;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 4px 6px;
  background: linear-gradient(
    135deg,
    rgba(242, 20, 12, 1) 0%,
    rgba(232, 34, 14, 1) 70%,
    rgba(242, 77, 12, 1) 100%
  );
  border-radius: 7px 7px 7px 7px;
  position: absolute;
  left: 9px;
  bottom: 30px;
  > div {
    font-family: PingFangSC-Medium;
    font-size: 10px;
  }
}
.normal-item-label {
  max-width: 60%;
  position: absolute;
  left: 9px;
  bottom: 9px;
  z-index: 1;
  display: flex;
  .normal-item-title {
    max-width: 100%;
    display: inline;
    line-height: 12px;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: rgba(255, 255, 255, 1);
  }
  .normal-item-right {
    width: 12px;
    height: 12px;
    margin-left: 3px;
  }
}
</style>
