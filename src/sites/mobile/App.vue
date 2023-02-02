<template>
  <div id="app">
    <div v-if="title != '/'" id="nav">
      <div class="back" @click="goBack">
        <nut-icon type="left" class="nutui-iconfont"></nut-icon>
      </div>
      {{ title }}
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      title: ''
    };
  },
  watch: {
    $route(newValue, oldValue) {
      // console.log(newValue);

      this.title = newValue && newValue.name && newValue.name.charAt(0).toUpperCase() + newValue.name.slice(1);
      // if (!isMobile && newValue.hash != hash) {
      //   this.title = newValue.name;
      // } else {
      //   this.title = newValue.name;
      // }
    }
  },
  mounted() {

    this.title = this.$route && this.$route.name && this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1);
    // if (!isMobile && this.$route.hash != hash) {
    //   this.title = this.$route.name;
    // } else {
    //   this.title = this.$route.name;
    // }
  },
  methods: {
    //返回demo页
    goBack() {
      this.$router.back();
    }
  }
  
}
</script>

<style lang="scss">
@import '../../styles/font/iconfont.css';
#app {
  font-family: PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: 100%;
  background: #fff;
  // height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  #nav {
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    height: 57px;
    line-height: 57px;
    text-align: center;
    background: $white;
    font-weight: bold;
    font-size: 20px;
    color: rgba(51, 51, 51, 1);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
    .back {
      position: absolute;
      left: 0;
      height: 100%;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  .demo {
    min-height: 100vh;
    background: #f7f8fa;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 57px 9px 0 9px;
    // padding-left: 9px;
    // padding-right: 9px;
    &.full {
      padding: 57px 0 0 0;
      h2 {
        padding-left: 25px;
      }
    }
    &.cell {
      padding-left: 18px;
      padding-right: 18px;
    }

    &.bg-w {
      background: #fff;
    }

    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    h2 {
      // height: 56px;
      margin-top: 30px;
      margin-bottom: 15px;
      line-height: 23px;
      font-size: 16px;
      color: $title-color2;
      font-weight: 500;
      + .type {
        margin-top: -5px;
      }
    }
    h3 {
      padding: 20px 16px 16px;
      line-height: 23px;
      font-size: 14px;
      color: $title-color2;
      font-weight: 500;
    }
    .type {
      // margin-top: -5px;
      margin-top: 15px;
      margin-bottom: 15px;
      line-height: 20px;
      color: #909CA4;
      font-size: 14px;
    }
    .card {
      padding: 25px 18px;
      background: rgba(255, 255, 255, 1);
    }
  }
}
.nut-icon {
  width: $icon-width;
  height: $icon-height;
  line-height: $icon-line-height;
  text-align: right;

  &__img {
    width: $icon-width;
    height: $icon-height;
    object-fit: contain;
  }
}
</style>
