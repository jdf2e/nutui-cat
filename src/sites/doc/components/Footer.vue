<template>
  <div class="doc-footer" :class="{'narrow': width}">
    <div class="doc-footer-content">
      <div class="doc-footer-list">
        <img class="doc-footer-logo" src="https://storage.360buyimg.com/imgtools/b1e0d112fc-c0d22710-e922-11eb-8e5c-0da9e18a13b1.png">
      </div>
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">设计资源</h4>
        <div class="doc-footer-item"><a href="http://relay.jd.com/" target="_blank">设计稿管理平台</a></div>
        <div class="doc-footer-item"><a href="https://relay.jd.com/web" target="_blank">大促团队原子设计稿</a></div>
        <!-- <div class="doc-footer-item"><a href="https://docs.qq.com/doc/DTkJBWG96RGtaTlZn" target="_blank">大促团队原子设计规范</a></div> -->
        <div class="doc-footer-item"><a href="https://docs.jd.com/sites/cr21aLm2/6U8fPq4G/_layouts/15/WopiFrame.aspx?sourcedoc={E89191E8-830B-4234-8957-24191E3972CA}&file=%E5%A4%A7%E4%BF%83%E5%9B%A2%E9%98%9F%E5%8E%9F%E5%AD%90%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83.docx&action=default" target="_blank">大促团队原子设计规范</a></div>
      </div>
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">素材与开发</h4>
        <div class="doc-footer-item"><a href="http://ace.jd.com/launch/#/" target="_blank">投放平台</a></div>
        <div class="doc-footer-item"><a href="https://babel.m.jd.com/active/babelCommon/index.html" target="_blank">通天塔</a></div>
        <div class="doc-footer-item"><a href="http://deco.jd.com/" target="_blank">Deco - 设计稿转代码平台</a></div>
      </div>
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">埋点测试工具</h4>
        <div class="doc-footer-item"><a href="http://track.jd.com/#/index" target="_blank">track平台</a></div>
        <div class="doc-footer-item"><a href="https://cf.jd.com/pages/viewpage.action?pageId=142400131" target="_blank">通天塔无线端埋点规范</a></div>
      </div>
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">提测与测试</h4>
        <div class="doc-footer-item"><a href="http://vms.jd.com/Integration" target="_blank">vms提测系统</a></div>
        <div class="doc-footer-item"><a href="http://cyber.test.jd.com/#/devices" target="_blank">赛博云测平台</a></div>
      </div>
    </div>
    <!-- <p class="doc-footer-desc">2022 京东零售 - 基础业务体验部. All Rights Reserved.</p> -->
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';


@Component
export default class Footer extends Vue {
  @Prop({ type: Boolean, default: false }) readonly width!: any;

  mounted() {
  }
};
</script>

<style lang="scss">
.doc {
  &-footer {
    position: relative;
    min-width: 1300px;
    padding: 30px 180px 20px 200px;
    text-align: center;
    background: #1D1D21;
    // border-top: 1px solid $theme-white-footer-border;
    z-index: 2;
    &.narrow {
      // margin-right: 400px;
      padding: 30px 450px 20px 50px;
      .doc-footer-content {
        justify-content: space-between;
        margin-right: 0;
        .doc-footer-list {
          &:first-child {
            margin-right: 20px;
          }
        }
      }
    }
    &-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-right: 50px;
    }
    &-list {
      position: relative;
      text-align: left;
      &:first-child {
        margin-right: 30px;
      }
    }
    &-title {
      margin-bottom: 24px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
    &-item {
      margin-bottom: 14px;
      line-height: 17px;
      font-size: 12px;
      color: #f5f5f5;
      a {
        color: #f5f5f5;
        &:hover {
          color: #ff1c65;
        }
      }
    }
    &-logo {
      height: 46px;
    }
    &-desc {
      margin-top: 30px;
      font-size: 12px;
      color: $theme-white-footer-word4;
    }
    .icon-color {
      display: inline-block;
      width: 12px;
      height: 10px;
      margin-right: 10px;
      background: url('../../assets/images/icon-color.png') no-repeat
        center/100%;
    }
    .circle-red,
    .circle-black,
    .circle-white {
      position: relative;
      top: -1px;
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 10px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
}
</style>
