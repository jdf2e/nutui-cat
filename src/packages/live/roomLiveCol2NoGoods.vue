<template>
  <div class="mod">
    <div class="cnt_row">
      <img :src="data.indexImage" class="main_img" />
      <div class="cnt_col">
        <div class="btn_watch_wrap">
          <div class="icon_wrap">
            <img
              src="//img11.360buyimg.com/img/jfs/t1/191254/34/12227/312/60e6cf2cEd3f67a37/6ae4917db02770f3.png"
              class="icon"
            />
          </div>
          <span class="btn_watch">{{ data.watchNumber }}观看</span>
        </div>
        <div class="tit_wrap">
          <span class="tit">
            {{ data.name }}
          </span>
          <div class="desc">{{ data.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  }
};
</script>
<style lang="scss" scoped>
.mod {
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0px;
}
.cnt_row {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 85px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  margin-top: 0px;
}
.main_img {
  width: 107.5px;
  height: 85px;
  display: inline-block;
  margin-top: 0px;
}
.cnt_col {
  background: linear-gradient(
    270deg,
    #ffffff 53%,
    rgba(255, 255, 255, 0.54) 65%,
    rgba(255, 255, 255, 0) 78%
  );
  width: 100%;
  height: 85px;
  z-index: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 6px;
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.btn_watch_wrap {
  width: 81px;
  height: 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: -84px;
}
.icon_wrap {
  border-radius: 8px 0px 8px 8px;
  background: linear-gradient(180deg, #ff6047 0%, #f70024 100%);
  width: 22px;
  height: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
}
.icon {
  width: 12px;
  height: 12px;
  display: inline-block;
  margin-top: 0px;
}
.btn_watch {
  text-align: left;
  color: rgb(255, 255, 255);
  font-weight: 400;
  font-family: PingFangSC-Regular;
  font-size: 10px;
  line-height: 1.4;
  width: 50px;
  height: 14px;
  display: inline;
  margin-left: 3px;
  margin-top: 0px;
}
.tit_wrap {
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 0px;
  margin-top: 4px;
  padding-left: 80px;
}
.tit {
  text-align: left;
  line-height: 1.1;
  color: rgb(46, 45, 45);
  font-weight: 500;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  width: 84.5px;
  height: 32px;
  display: inline;
  margin-top: 0px;
}
.desc {
  font-size: 10px;
  font-weight: normal;
  color: rgba(232, 34, 14, 1);
  text-align: left;
  margin-top: 6px;
}
</style>
