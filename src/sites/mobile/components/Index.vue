<template>
  <div class="index">
    <div class="index-header">
      <img src="//storage.360buyimg.com/imgtools/8999904a32-c0dc3930-e922-11eb-a009-9768a1d6c451.png" alt="" srcset="" />
      <div class="info">
        <h1>NutUI CAT</h1>
        <p>基于 NutUI 的大促业务组件库</p>
      </div>
    </div>
    <div class="index-components">
      <ol v-for="(_nav, index) in navData" :key="index">
        <li>{{ _nav.name }}</li>
        <ul>
          <template v-for="(_package, i) in _nav.packages">
            <!-- <li v-if="_package.show" :key="i"> -->
              <template v-if="!_package.child && !_package.father">
                <li v-if="_package.show" :key="i">
                  <router-link :to="{name: _package.name.toLowerCase()}"
                    >{{ _package.name }}&nbsp;&nbsp;{{
                      _package.cName
                    }}</router-link
                  >
                  <nut-icon size="14px" color="#979797" type="right"></nut-icon>
                </li>
              </template>
              <template v-else-if="_package.father || _package.child">
                <li v-if="_package.show && _package.father" :key="i" @click="onshowChild(showChild, _package.name)">
                  <span>{{ _package.name }}&nbsp;&nbsp;{{
                    _package.cName
                  }}</span>
                  <template v-if="showChild && _package.name.toLowerCase() == name">
                    <nut-icon size="14px" color="#979797" type="right" class="arrow-bottom"></nut-icon>
                  </template>
                  <template v-else>
                    <nut-icon size="14px" color="#979797" type="right" class="arrow-top"></nut-icon>
                  </template>
                </li>
                <transition name="fade" :key="i">
                  <li v-if="_package.show && _package.child" v-show="showChild && _package.child == name" class="child">
                    <router-link :to="{path: '/'+_package.child.toLowerCase()+'/'+_package.name.toLowerCase()}">
                      {{ _package.name }}&nbsp;&nbsp;<b>{{ _package.cName }}</b>
                    </router-link>
                  </li>
                </transition>
              </template>
              <!-- <transition name="fade" :key="i">
                <ul v-if="_package.show && _package.child" v-show="showChild">
                  <template
                    :class="{ active: isActive(_package.name) }"
                  >
                    <li>
                      <router-link :to="{path: '/'+_package.child.toLowerCase()+'/'+_package.name.toLowerCase()}">
                        {{ _package.name }}&nbsp;&nbsp;<b>{{ _package.cName }}</b>
                      </router-link>
                    </li>
                  </template>
                </ul>
              </transition> -->
            <!-- </li> -->
          </template>
        </ul>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { nav } from '@/config';

@Component
export default class Doc extends Vue {
  navData: any = [];
  showChild: boolean = false;
  name: string = '';
  mounted() {
    console.log('demo页')
    this.navData = nav;
  }
  onshowChild(showChild: any, name: any) {
    this.showChild = !showChild;
    this.name = name.toLowerCase();
    // console.log('22', this.showChild, this.name)
  }
};
</script>
<style lang="scss" scoped>
.index {
  height: 100%;
  width: 100%;
  padding-top: 30px;

  &-header {
    display: flex;
    align-items: center;
    padding: 0 34px;
    height: 117px;
    > img {
      width: 67px;
      height: 67px;
      margin-right: 18px;
      flex-shrink: 0;
    }
    .info {
      display: flex;
      flex-direction: column;
      h1 {
        height: 48px;
        line-height: 48px;
        font-size: 34px;
        color: rgba(51, 51, 51, 1);
      }
      p {
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        color: rgba(154, 155, 157, 1);
      }
    }
  }
  &-components {
    background: #f7f8fa;
    border-radius: 30px 30px 0 0;
    overflow: hidden;
    padding: 30px 25px;
    > ol {
      margin-bottom: 17px;
      > li {
        line-height: 20px;
        font-size: 14px;
        color: rgba(144, 156, 164, 1);
        margin-bottom: 10px;
      }
      > ul {
        li {
          display: flex;
          align-items: center;
          padding: 0 24px;
          // width: 100%;
          height: 45px;
          line-height: 45px;
          background: rgba(255, 255, 255, 1);
          border-radius: 22px;
          box-shadow: 0px 1px 4px 0px rgba(102, 102, 102, 0.06);
          margin-bottom: 13px;
          &.child {
            margin-left: 20px;
          }
          .nut-icon-right {
            line-height: 16px;
          }
          .arrow-top {
            margin-top: 15px;
            margin-right: -15px;
            transform: rotate(90deg);
          }
          .arrow-bottom {
            margin-right: 17px;
            margin-top: 15px;
            transform: rotate(-90deg);
          }
          a, span {
            width: 100%;
            height: 100%;
            font-size: 15px;
            font-weight: bold;
            display: block;
            color: rgba(51, 51, 51, 1);
          }
        }
      }
    }
  }
}
// 下拉列表选择动画效果
%common1 {
  opacity: 1;
  -ms-transform: scaleY(1);
  transform: scaleY(1);
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0.1s,
  opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0.1s;
  -ms-transform-origin: center top;
  transform-origin: center top;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  // @extend %common1;
  // transform-origin: center bottom;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  // opacity: 0;
  // -ms-transform: scaleY(0);
  // transform: scaleY(0);
}
</style>
