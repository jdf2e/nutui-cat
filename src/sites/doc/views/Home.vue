<template>
  <div style="height:100%;">
    <Header />
    <div class="home">
      <div class="home-tit">NutUI 大促场景组件</div>
      <div class="home-desc">基于 NutUI 的大促场景组件库</div>
      <div class="start-use-and-git-hub">
        <div class="start-use" @click="$router.push({path:'/intro'})">开始使用</div>
        <a class="git-hub" target="_blank" href="//github.com/jdf2e/nutui-cat.git">GitHub</a>
      </div>
      <div class="home-banner"></div>
      <div class="left-banner"></div>
      <div class="bottom-banner"></div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/sites/doc/components/Header.vue';
import Footer from '@/sites/doc/components/Footer.vue';
@Component({
  components: {
    Header,
    Footer,
  }
})
export default class Home extends Vue {
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'JDLangZhengTi';
    src: url('~@/sites/assets/styles/fonts/JDLangZhengTi.woff') format('woff'),
        url('~@/sites/assets/styles/fonts/JDLangZhengTi.TTF') format('truetype');
  }

.home {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 1300px;
  min-height: 100%;
  align-items: center;
  padding-top: 6%;
  font-family: JDLangZhengTi;
  background: linear-gradient(135deg, #F8C5D3 0%,#F6EFF7 33%, #ECEFF4 66%, #BFE6E7 100%);

  * {
    line-height: 100%;
  }

  .home-tit {
    font-size: 48px;
    color: #1A1A1A;
  }
  .home-desc {
    font-size: 36px;
    color: #FF1C65;
    margin: {
      top: 20px;
      bottom: 29px;
    }
  }
  .start-use-and-git-hub {
    font-size: 28px;
    display: flex;
    margin-bottom: 10px;

    .start-use,
    .git-hub {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 188px;
      height: 50px;
      border-radius: 25px;
      cursor: pointer;
    }

    .start-use {
      color: #fff;
      background: linear-gradient(135deg, rgba(255,28,101,1) 0%,rgba(255,133,202,1) 67.83430752051981%,rgba(255,142,155,1) 87.35307751528254%,rgba(255,169,151,1) 100%);
      margin-right: 50px;
    }

    .git-hub {
      color: #FF0496;
      border: 2px solid #FF2CA0;

      &:hover {
        color: #fff;
        background: linear-gradient(135deg, rgba(255,28,101,1) 0%,rgba(255,133,202,1) 67.83430752051981%,rgba(255,142,155,1) 87.35307751528254%,rgba(255,169,151,1) 100%);
        border: 0;
      }
    }
  }

  .home-banner {
    width: 689px;
    height: 432px;
    background: url('//img11.360buyimg.com/imagetools/jfs/t1/193394/33/19373/159279/6121adecEf9cb7c94/539e76a61abe1960.png');
    background-size: 100%;
    z-index: 2;
  }

  .left-banner {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 38px;
    height: 100%;
    background: url('//img11.360buyimg.com/imagetools/jfs/t1/188199/15/19617/23337/61231a40E0c864149/ef910910e69ddd4c.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .bottom-banner {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 436px;
    background: left bottom url('//img12.360buyimg.com/imagetools/jfs/t1/184988/18/20601/173487/61231a40Ed09300dc/6a3964f9f36d7c97.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
}
</style>

