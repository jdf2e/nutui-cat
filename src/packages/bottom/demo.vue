<template>
  <div class="demo" id="page1">
    <div class="floor-box">
      <div class="nav-floor">今日优惠</div>
      <div class="nav-floor">热门活动</div>
      <div class="nav-floor">拼购</div>
      <div class="nav-floor">大牌服饰</div>
      <div class="nav-floor">猜你想看</div>
      <div class="nav-floor">6F</div>
      <div class="nav-floor">7F</div>
      <div class="nav-floor">8F</div>
      <div class="nav-floor">9F</div>
      <div class="nav-floor">10F</div>
    </div>
    <h2>普通选中</h2>
    <NutBottom :data="data1" el-id="page1" activeName="年货攻略" @onClick="handClick" @backTop="backTop"></NutBottom>
    <!-- <h2>普通选中</h2> -->
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('bottom');
export default createDemo({
  props: {},
  data() {
    return {
      data1: []
    };
  },
  mounted() {
    this.data1 = [
      {
        pictureUrl:
          '//m.360buyimg.com/babel/s150x150_jfs/t1/156603/27/5710/22920/5ffe65eeEacf97f00/f580e2d1862cb2d6.png',
        name: '主会场',
        comments: [
          'https://img14.360buyimg.com/imagetools/jfs/t1/159079/25/3113/17414/5ffe6607Ec8ed3a1e/8a6ef7e5d879abe8.png'
        ],
        link:
          '//h5.m.jd.com/babelDiy/Zeus/3xkqxo2L3ZqV66nYTFjuVp4Yt7tG/index.html?babelChannel=ttt18'
      },
      {
        pictureUrl:
          '//m.360buyimg.com/babel/s150x150_jfs/t1/156765/16/5783/19735/5ffe66ffE870f6044/2d16b5455d1a487f.png',
        name: '全城购',
        comments: [
          'https://img11.360buyimg.com/imagetools/jfs/t1/148156/9/11398/5901/5f8dbb27Ed532c469/2e1dfbd502cd1f8c.png'
        ],
        link: '//m.jd.com'
      },
      {
        pictureUrl:
          '//m.360buyimg.com/babel/s150x150_jfs/t1/157710/37/2992/20360/5ffe6685E34992da7/731fb335a8b33e2d.png',
        name: '源头好物',
        comments: [
          'https://img10.360buyimg.com/imagetools/jfs/t1/160087/12/3066/14877/5ffe6607E476e43dd/b9589e39aa85bcea.png'
        ],
        link:
          '//h5.m.jd.com/babelDiy/Zeus/3hhgqjj5rLjZFbi8UtaD2uex21ky/index.html?babelChannel=ttt11'
      },
      {
        pictureUrl:
          '//m.360buyimg.com/babel/s150x150_jfs/t1/157750/29/3168/19560/5ffe66bbE8130b148/a3ad8220120ca22f.png',
        name: '年货攻略',
        comments: [
          'https://img11.360buyimg.com/imagetools/jfs/t1/168245/19/2372/14914/5ffe6606E150120e6/c22632590ee8b847.png'
        ],
        link:
          '//h5.m.jd.com/babelDiy/Zeus/fd5vHS8CxSjGvLKDsSFz2GiTpMN/index.html?babelChannel=ttt8'
      },
      {
        pictureUrl:
          '//m.360buyimg.com/babel/s150x150_jfs/t1/152400/25/14556/20330/5ffe665bE883a3d1d/84a99c5fe1882001.png',
        name: '头号爆品',
        comments: [
          'https://img11.360buyimg.com/imagetools/jfs/t1/155240/3/14336/14706/5ffe6607Ef2833091/641a6fdfd307df43.png'
        ],
        link:
          '//h5.m.jd.com/babelDiy/Zeus/4VA9nehqw3ZijJHLDAsGoXy6jQ5m/index.html?babelChannel=ttt1'
      }
    ];
  },
  methods: {
    handClick() {
      console.log('click 0')
    },
    backTop() {
      console.log('top')
    }
  }
});
</script>

<style lang="scss" scoped>
#app {
  .demo {
  }
}
.nav-floor {
  height: 350px;
  margin-bottom: 20px;
  line-height: 350px;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  &:nth-child(4n + 1) {
    color: #ff004a;
    background-color: #fecedc;
  }
  &:nth-child(4n + 2) {
    color: #b86e00;
    background-color: #fcd59b;
  }
  &:nth-child(4n + 3) {
    color: #2710ff;
    background-color: #bcc0f9;
  }
  &:nth-child(4n + 4) {
    color: #82581b;
    background-color: #ffc695;
  }
}
</style>
