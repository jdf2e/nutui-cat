<template>
  <div id="doc">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import '../../styles/font/iconfont.css';
::selection {
  background: $doc-default-color;
  color: #fff;
}
#doc {
  font-family: PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: 100%;
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: $doc-header-height;
}
.nut-icon {
  svg {
    vertical-align: top;
    width: 100%;
    height: 100%;
    fill: currentColor
  }
}
</style>
