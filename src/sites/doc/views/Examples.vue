<template>
  <div class="doc-wrap">
    <Header />
    <div class="examoles-main">
      <div class="examoles-main-content">
        <h3 class="sub-title">活动模板</h3>
        <p class="sub-desc">这里汇集了各个大促模板，助力大促业务成长</p>
      </div>
    </div>
    <div class="examoles-content">
      <!-- 社区文章 -->
      <div class="examoles-block">
        <div class="article-box">
          <div class="article-item" ref="refItem" v-for="(item,index) in moudleData" :key="index+100"  :style="{zIndex:`calc(${moudleData.length - index})`}">
            <div :class="['article-title',curIndex==index?'show-desc':'']"  @click='handleClick(index)'>
              <span>{{ item.title }}</span>
              <img :src="upArrow" :class="curIndex==index?'down-normal':'go-up'" alt="">
            </div>
            <div class="article-content" :class="curIndex==index?'show':''" ref="allRef">
              <div class="content-title" ref="refTitle">
                会场回顾扫描二维码预览
                <div class="code-contain">
                  <img :src="qrCode" alt="" class="qr-code" @click="handleCode">
                  <div class="enlarge-code">
                    <div class="code">
                      <img :src="item.codeImg" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="content-content" ref="refContent">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>
        <div class="article-show">
          <iframe 
            :src="moudleData[curIndex]?moudleData[curIndex].url:'https://h5.m.jd.com/babelDiy/Zeus/3HyExPxpzmGV1pKcvRDfFLAZnhTa/index.html'" 
            frameborder="0"
          ></iframe>
        </div>

      </div>
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
    Footer
  }
})
export default class Exapmles extends Vue {
  curIndex:any= 0;
  upArrow:String = require('./../../assets/images/icon-select-gray-up.png');
  qrCode:String = require('./../../assets/images/qr-code.png');
  showQRCode:Boolean = false;
  moudleData: Array<any> = [
    {
      title: '20年618产业带会场',
      desc: '产业带做为集团和零售近两年来最为非常关心的话题，经调研发现目前产业带已覆盖零售的大部分品类。因此，产业带从供给侧带给京东的价值不容小觑，21年公司将重点在产业带方面发力。那此次年货节会场就以产业带为抓手，品质低价为主线策略，添加短视频、直播等新式玩法。',
      codeImg: 'https://storage.360buyimg.com/imgtools/bf319f66cb-443e7320-03da-11ec-9ed0-bbbd35f44908.png',
      url: 'https://h5.m.jd.com/babelDiy/Zeus/3HyExPxpzmGV1pKcvRDfFLAZnhTa/index.html',
    }, {
      title: '2021-618星店长',
      desc: '618星店长结合明星与品牌，撬动粉丝经济流量转化，配合站内外强势曝光，以明星专属推荐商品等维度赋能品牌曝光。',
      codeImg: 'https://storage.360buyimg.com/imgtools/00d1eac82a-875fd040-03da-11ec-bcde-691752635113.png',
      url: 'https://h5.m.jd.com/babelDiy/Zeus/FzNYQaxn6BtmS48NjuBP1Q74cRe/index.html',
    }, {
      title: '2020年货节焕新会场',
      desc: '焕新会场作为本次年货节拉动POP销售增长的重要抓手，赋能POP商家，将从POP店铺维度打造焕新概念。',
      codeImg: 'https://storage.360buyimg.com/imgtools/7eac4b9cb0-76f1ba70-03da-11ec-bcde-691752635113.png',
      url: 'https://h5.m.jd.com/babelDiy/Zeus/2yeraV5Eo3NM9DG8zwNLsb8DiT5U/index.html',
    }, {
      title: '2020双十一大牌制躁厂',
      desc: 'IP+游戏+综艺打造泛娱乐二次元生态，拥抱“后浪”文化，通过1+N的形式覆盖年轻用户更加多元化的兴趣圈层，“每个用户都能找到自己热爱的兴趣”，多元IP权益、玩法，让年轻用户玩起来，助力京东与品牌商声量共振。',
      codeImg: 'https://storage.360buyimg.com/imgtools/08369e1723-635f8140-03da-11ec-9ed0-bbbd35f44908.png',
      url: 'https://h5.m.jd.com/babelDiy/Zeus/mvJN8T2Ge86ebATLxbgcquRYfHD/index.html',
    }, {
      title: '2021年中秋节主会场',
      desc: '2021年京东超市中秋节活动会场，活动会场个性化开发需求，根据品类目标用户画像精准分析，结合品类业务策略，设计全新的视觉及页面框架，精准营销，深耕品类用户，提高品类的销售转化。',
      codeImg: 'https://img11.360buyimg.com/imagetools/jfs/t1/205618/36/5384/2108/6137243cE83ee698c/f54ba54e695c80a3.png',
      url: 'https://h5.m.jd.com/babelDiy/Zeus/TXDQvgrFsw6fhXPMyGCdPoE3rFh/index.html',
    }
  ];

  handleCode(){
    this.showQRCode = !this.showQRCode;
  }

    
  handleClick(index){
    if(this.curIndex == index){
      this.curIndex = null;
    }else if(this.curIndex == null){
      this.curIndex = index;
    }else{
      this.curIndex = index;
    }  
  }
  mounted(){}

};
</script>

<style lang="scss" scoped>
$mainRed: #fa685d;
.examoles {
  &-main {
    /* height:199px ; */
    background:url('./../../assets/images/title-back.png') no-repeat;
    background-size:auto 199px;
    &-content {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 48px;
      padding-bottom: 53px;
      .sub-title {
        margin-left: 8px;
        margin-bottom: 40px;
        line-height: 36px;
        font-size: 40px;
        color: $white;
        position: relative;
        &:after {
            content: '';
            display: inline-block;
            width: 34px;
            height: 26px;
            position: absolute;
            bottom: -22px;
            left: 146px;
            background: url('./../../assets/images/icon-slope.png') no-repeat;
            background-size: cover;
          }
      }
      .sub-desc {
        line-height: 22px;
        font-size: 16px;
        color: $white;
      }
    }
  }
  &-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 34px 0 32px;
  }
  &-block {
    display: flex;
  }
}
.article{
  &-box {
    /* display:inline-block; */
    width:758px;
    .article-item{
      margin-bottom: 32px;
      position: relative;
      .article-title{
        width: 100%;
        height: 53px;
        cursor: pointer;
        background: rgba(247,248,250,1);
        border-radius: 4px;
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 600;
        color: rgba(0,0,0,1);
        padding:0 21px 0 24px;
        box-sizing:border-box;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .down-normal{
          height:10px;width:16px;
          transform:rotate(0deg);
          transition: .3s;
        }
        .go-up{
          height:10px;width:16px;
          transform:rotate(180deg);
          transition: .3s;
        }
      }
      .article-content{
        padding:0 24px;
        width:100%;
        /* height:0px; */
        height: auto;
        display: none;
        /* will-change: height; */
        box-sizing: border-box;
        /* overflow: hidden; */
        /* transition: height 1s;
        transition-timing-function: ease-in-out; */
        /* transition: height .3s ease-in-out; */
        .content-title{
          height: 71px;
          line-height:71px;
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: normal;
          color: rgba(0,0,0,1);
          .code-contain{
            margin-left:15px;
            position: relative;
            display: inline-block;
            .qr-code{
              height:23px;width:23px;
              vertical-align: text-bottom;
              cursor: pointer;
            }
            .enlarge-code{
              display: none;
              position: absolute;
              z-index: 5;
              top:47px;left:10px;
              transform: translateX(-50%);
              width: 140px;
              height: 140px;
              padding:21px 20px 17px;
              box-sizing: border-box;
              /* background: rgba(255,255,255,1);
               */
               background: url(./../../assets/images/code-back.png) no-repeat;
               background-size: 100% 100%;
              /* border: 1px solid rgba(229,229,229,1);
              border-radius: 3px;
              box-shadow:  0 2px 4px 0 rgba(116,116,116,0.31); */
              .code{
                height:100px;width:100px;
                img{
                  height:100%;width:100%;
                }
              }
            }
            /* .showCode{
              display: block;
            } */
            .qr-code:hover +.enlarge-code{
              display: block;
            }
          }

        }
        .content-content{
          font-size: 18px;
          font-family: PingFangSC;
          font-weight: normal;
          color: rgba(128,128,128,1);
          line-height: 33px;
        }
      }
      .show-desc{
        color:#FA2C19;
      }
      .show{
        display: block;
      }
    }
    .article-item:last-child{
      margin-bottom: 0px;
    }
  }
  &-show{
    /* display:inline-block; */
    height: 667px;
    width: 375px;
    margin-left:93px;
    background:url(./../../assets/images/phone.png) no-repeat;
    background-size: 100% 100%;
    border: 1px solid rgba(178,178,178,0.31);
    border-radius: 30px;
    box-shadow:  0 4px 7px 0 rgba(116,116,116,0.31);
    padding:0 auto;
    box-sizing: border-box;
    iframe{
      height:584px;
      width:336px;
      position:relative;
      top:41px;left:13px;
    }
  }
}
</style>
