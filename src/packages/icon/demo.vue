<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nutcat-nav
      :options="stickyOptions"
    />
    <div class="floor-box">
      <div class="nav-floor">
        <div class="nav-floor-box">
          <h3>基础用法</h3>
          <div class="icon-box">
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="heart"></nutcat-icon>
            </nutcat-col>
          </div>
          <h3>图标大小</h3>
          <div class="icon-box">
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="heart" size="16px"></nutcat-icon>
            </nutcat-col>
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="heart" size="24px"></nutcat-icon>
            </nutcat-col>
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="heart" size="36px"></nutcat-icon>
            </nutcat-col>
          </div>
          <h3>图标颜色</h3>
          <div class="icon-box">
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="heart" color="#fa2c19"></nutcat-icon>
            </nutcat-col>
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="heart" color="#64b578"></nutcat-icon>
            </nutcat-col>
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="heart" color="rgb(25, 137, 250)"></nutcat-icon>
            </nutcat-col>
          </div>
        </div>
      </div>
      <div class="nav-floor">
        <div class="nav-floor-box">
          <h3>箭头类</h3>
          <div class="icon-box">
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="arrow-normal"></nutcat-icon>
              <span>arrow-normal</span>
            </nutcat-col>
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon style="font-size: 30px; height: 12px;" type="arrow-go"></nutcat-icon>
              <span>arrow-go</span>
            </nutcat-col>
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="arrow-full"></nutcat-icon>
              <span>arrow-full</span>
            </nutcat-col>
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="triangle-arrow"></nutcat-icon>
              <span>triangle-arrow</span>
            </nutcat-col>
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="circle-arrow"></nutcat-icon>
              <span>circle-arrow</span>
            </nutcat-col>
          </div>
          <h3>加购类</h3>
          <div class="icon-box cart">
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="qiang"></nutcat-icon>
              <span>qiang</span>
            </nutcat-col>
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="cart"></nutcat-icon>
              <span>cart</span>
            </nutcat-col>
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="cart-rect"></nutcat-icon>
              <span>cart-rect</span>
            </nutcat-col>
            <nutcat-col span="6" class="copy-box">
              <nutcat-icon type="cart-full"></nutcat-icon>
              <span>cart-full</span>
            </nutcat-col>
          </div>
        </div>
      </div>
      <div class="nav-floor">
        <div class="nav-floor-box">
          <h3>基础图标</h3>
          <div class="icon-box">
            <nutcat-col v-for="(item, index) in icons.glyphs" :key="index" span="6" class="copy-box">
              <nutcat-icon :type="item.name"></nutcat-icon>
              <span>{{ item.name }}</span>
            </nutcat-col>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('icon');
import icons from './fonts/yuanzi.js';
// import copy from 'clipboard';
import { Toast } from '@nutui/nutui';

const _toast: any = Toast;

export default createDemo({
  data() {
    return {
      icons: [],
      stickyOptions: {
        navs: [
          '用法示例',
          '基础图标',
          '全部图标'
        ],
        sectionSelector: 'nav-floor',
        stickyTop: 57,
        // showLbs: false, // 是否显示定位icon
        // showButton: false
      }
    }
  },
  mounted() {
    this.icons = icons
    // console.log('icons', icons)
    // let copys = new copy('.copy-box', {
    //   text: function(trigger) {
    //     console.log('trigger', trigger.textContent)
    //     return `nutcat-icon-${trigger.textContent}`;
    //   }
    // });
    // copys.on('success', (e) => {
    //   this.$toast.success('操作成功');
    // });
    // 解决第一次点击不生效的问题，如果没有，第一次点击会不生效
    // copys.onClick(e);

    // let copySize = new copy('.copy-box-size', {
    //   text: function(trigger) {
    //     return `<nutcat-icon type="${trigger.textContent}" size="40px"></nutcat-icon>`;
    //   }
    // });
    // copySize.on('success', e => {
    //   this.tip();
    // });
    // let copyColor = new copy('.copy-box-color', {
    //   text: function(trigger) {
    //     return `<nutcat-icon type="${trigger.textContent}" color="#f0250f"></nutcat-icon>`;
    //   }
    // });
    // copyColor.on('success', e => {
    //   this.tip();
    // });
    // let copySelf = new copy('.copy-box-self', {
    //   text: function(trigger) {
    //     return `<nutcat-icon type="self" :url="require('../../assets/svg/${trigger.textContent}.svg')"></nutcat-icon>`;
    //   }
    // });
    // copySelf.on('success', e => {
    //   this.tip();
    // });
  },
  methods: {
    // tip() {
    //   console.log('_toast', _toast)
    //   console.log('Toast', Toast)
    //   this.$toast.success('操作成功！');
    //   this.$toast.success('复制成功', { duration: 1000 });
    // }
  }
});
</script>

<style lang="scss" scoped>
#app {
  .demo {
    padding: 0;
    // padding-right: 9px;
    overflow-x: visible;
    overflow-y: visible;
  }
}

.nut-cell {
  /deep/ .nut-cell-box {
    justify-content: flex-start;
    .nut-cell-left {
      flex: revert;
    }
  }
  .nutcat-icon {
    font-size: 20px;
    margin-right: 15px;
  }
}
.nutcat-nav {
  /deep/ .nutcat-nav-ul {
    justify-content: space-around;
  }
}
.floor-box {
  // margin-top: 27px;
  margin-bottom: 20px;
}

.nav-floor {
  // margin: 20px 0;
  padding: 20px 20px 0;
  // margin-top: 40px;
  // padding-top: 40px;
  // padding-top: 20px;
  
}
.nav-floor-box {
  background-color: #fff;
  border-radius: 12px;
}
.icon-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.copy-box {
  text-align: center;
  vertical-align: middle;
  .nutcat-icon {
    margin: 16px 0 16px;
    color: #323233;
    min-height: 20px;
    // font-size: 32px;
  }
  span {
    display: block;
    height: 36px;
    margin: -4px 0 4px;
    padding: 0 5px;
    color: #646566;
    font-size: 12px;
    line-height: 18px;
  }
}
.cart {
  .nutcat-icon {
    font-size: 28px;
    color: #F02B2B
  }
}
</style>
