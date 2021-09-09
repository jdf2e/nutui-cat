<template>
  <div class="doc-header" v-if="hdData[0]">
    <div class="header-logo">
      <a class="logo-link" href="#/">
        <img src="https://storage.360buyimg.com/imgtools/b1e0d112fc-c0d22710-e922-11eb-8e5c-0da9e18a13b1.png" />
        <!-- <span>- CAT -->
      </a>
      <span class="logo-border"></span>
    </div>
    <div class="header-nav">
      <Search />
      <div class="nav-box">
        <ul class="nav-list">
          <li class="nav-item" :class="{ active: hdData[0].name == routerPath }" @click="toClick">
            <router-link :to="hdData[0].name">
              {{hdData[0].cName}}
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: hdData[1].name == routerPath }" @click="toClick">
             <a href="http://storage.jd.local/jdc-activity/Nutui-Cat/1.0.0/demo.html#/">
              {{hdData[1].cName}}
            </a>
          </li>
          <li class="nav-item" :class="{ active: hdData[2].name == routerPath }" @click="toClick">
           
            <router-link :to="hdData[2].name">
              {{hdData[2].cName}}
            </router-link>
          </li>
          <!-- <li class="nav-item" :class="{ active: hdData[3].name == routerPath }" @click="toClick">
            <router-link :to="hdData[3].name">
              {{hdData[3].cName}}
            </router-link>
          </li> -->
          <li class="nav-item">
            <a class="user-link" target="_blank" href="https://github.com/jdf2e/nutui-cat"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
// import { RefData } from '@/sites/assets/util/ref';
import { header } from '@/config';
import Search from './Search.vue';
@Component({
  components: {
    Search
  }
})
export default class DocHeader extends Vue {
  hdData: any = [];
  routerPath: any = [];
  mounted() {
    this.hdData = header;
    this.routerPath = this.$route.name;
    // console.log('this.hdData', this.hdData)
    // console.log('this.$route.name', this.$route.name)
  }
  toClick() {
    this.routerPath = this.$route.name;
  }
};
</script>

<style lang="scss">
.doc {
  &-header {
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    min-width: 1300px;
    background-size: cover;
    background-position: center;
    height: $doc-header-height;
    line-height: $doc-header-height;
    text-align: left;
    padding: 0 50px;
    font-size: 20px;
  }
}
.header {
  &-logo {
    position: relative;
    display: inline-block;
    width: 240px;
    height: 64px;
    .logo-link {
      display: flex;
      align-items: center;
      width: 120px;
      height: 64px;
      vertical-align: middle;
      color: #fa2729;
      // position: absolute;
      // top: 50%;
      // margin-top: -23px;
      img {
        display: block;
        height: 46px;
        flex-grow: 0;
        flex-shrink: 0;
        margin: 0 10px 0 0;
      }
    }
    .logo-border {
      display: inline-block;
      width: 1px;
      height: 26px;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -13px;
    }
  }
  &-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
    width: calc(100% - 240px);
    min-width: 900px;
    padding: 0 40px;
    .nav-box {
      margin-right: 140px;
      .nav-list {
        // min-width: 445px;
        min-width: 345px;
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: space-around;
      }
      .nav-item {
        position: relative;
        margin-right: 30px;
        font-size: 14px;
        height: 63px;
        line-height: 63px;
        text-align: center;
        cursor: pointer;
        a {
          display: inline-block;
          line-height: 64px;
        }
        // overflow: hidden;
        &.active {
          font-weight: bold;
          &:after {
            content: '';
            display: inline-block;
            width: 18px;
            height: 12px;
            position: absolute;
            bottom: 14px;
            right: -10px;
            background: url('../../assets/images/item-active.png') no-repeat right bottom/100%;
          }
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
      .user-link {
        display: inline-block;
        width: 26px;
        height: 26px;
        vertical-align: middle;
        background: url('../../assets/images/icon-user.png') no-repeat;
        background-size: 100%;
      }
    }
  }
}
.header-select {
  &-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    outline: 0;
  }
  &-hd {
    min-width: 77px;
    height: 28px;
    padding: 0 30px 0 15px;
    line-height: 26px;
    font-size: 14px;
    color: $theme-red-word;
    background-position: right 15px top 12px;
    background-size: 8px 5px;
    background-repeat: no-repeat;
    border-radius: 14px;
  }
  &-bd {
    position: absolute;
    top: 30px;
    border-radius: 3px;
    overflow: hidden;
  }
  &-item {
    width: 77px;
    height: 28px;
    padding: 0 12px;
    line-height: 26px;
    font-size: 14px;
    border-width: 0px 1px 1px;
    border-style: solid;
    cursor: pointer;
    &:first-of-type {
      border-top-width: 1px;
    }
  }
}
// 颜色
.doc-header {
  background: $white;
  background: #1D1D1D;
  color: #1a1a1a;
  color: #CCCCCC;
  // border-bottom: 1px solid $theme-white-box-border;
  .header {
    &-logo {
      .logo-link {
        // background: url('../../assets/images/logo-header-red.png') no-repeat
        //   center/100%;
      }
      .logo-border {
        background: $theme-white-border;
      }
    }
    &-nav {
      .search-box {
        position: relative;
        min-width: 300px;
        height: 22px;
        line-height: 22px;
        .search-input {
          height: 22px;
          padding-left: 42px;
          font-size: 14px;
          vertical-align: middle;
          background-color: transparent;
          background-image: url(data:image/png;base64,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);
          background-repeat: no-repeat;
          font-size: 14px;
          color: #fff;
          // color: #1a1a1a;
          background-position: 0 -22px;
          &::-webkit-input-placeholder {
            color: $theme-white-input;
          }
        }
      }
      .nav-box {
        .nav-item {
          color: #CCCCCC;
          // color: #1a1a1a;
          a {
            color: #CCCCCC;
            // color: #1a1a1a;
          }
          &.active {
            color: #fff;
            &:after {
              // background-position: 0 -13px;
            }
            a {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .header-select {
    &-box {
      &.select-down {
        .header-select-hd {
          background-image: url('../../assets/images/icon-select-gray-down.png');
        }
      }
      &.select-up {
        .header-select-hd {
          background-image: url('../../assets/images/icon-select-gray-up.png');
        }
      }
    }
    &-hd {
      color: $theme-white-select-word;
      border: 1px solid $theme-white-select-border;
    }
    &-bd {
      color: $theme-white-select-word;
    }
    &-item {
      border-color: $theme-white-select-border;
      background-color: $theme-white-select-bg;
      &:hover {
        color: $theme-white-actice;
      }
    }
  }
}
// 下拉列表选择动画效果
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
