<template>
  <div class="mod">
    <div class="cnt_row">
      <img :src="data.indexImage" class="main_img" />
      <div class="cnt_col">
        <div class="cnt_row1">
          <div class="icon_wrap">
            <img
              src="//img14.360buyimg.com/img/jfs/t1/192948/3/13098/312/60eea91cE4a03ceeb/ff411631754c3f94.png"
              class="icon"
            />
          </div>
          <span class="tag">{{ data.watchNumber }}</span>
        </div>
        <div class="cnt_row2">
          <div class="cnt_col1">
            <div class="txt_wrap"
              ><span class="txt">{{ data.name }}</span></div
            >
            <div class="txt_wrap1"
              ><span class="txt1">{{ data.desc }}</span></div
            >
          </div>
          <div class="cnt_row3">
            <div class="price_wrap"
              ><span class="price">￥{{ data.price }}</span></div
            >
            <img
              :src="data.sImg"
              class="img"
            />
          </div>
          <img
            src="//img12.360buyimg.com/img/jfs/t1/179691/12/14075/808/60eea91bE2a630bd2/5346dc102a448880.png"
            class="img1"
          />
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
  height: 96px;
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
  height: 96px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin-top: 0px;
}
.main_img {
  width: 100%;
  height: 96px;
  display: inline-block;
  z-index: 3;
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.cnt_col {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 15%,
    rgba(0, 0, 0, 0.61) 100%
  );
  width: 100%;
  height: 96px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 6px;
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.cnt_row1 {
  width: 61px;
  height: 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 6px;
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
.tag {
  text-align: left;
  color: rgb(255, 255, 255);
  font-weight: 400;
  font-family: PingFangSC-Regular;
  font-size: 10px;
  line-height: 1.4;
  width: 30px;
  height: 14px;
  display: inline;
  margin-left: 3px;
  margin-top: 0px;
}
.cnt_row2 {
  width: 100%;
  height: 55px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 0px;
  margin-top: 13px;
  padding-left: 6px;
}
.cnt_col1 {
  width: 112px;
  height: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0px;
  padding-top: 25px;
}
.txt_wrap {
  width: 112px;
  height: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0px;
}
.txt {
  text-align: left;
  line-height: 1;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  width: 112px;
  height: 14px;
  display: inline;
  margin-top: 0px;
}
.txt_wrap1 {
  width: 112px;
  height: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0px;
  margin-top: 3px;
}
.txt1 {
  text-align: left;
  line-height: 1;
  color: rgb(255, 255, 255);
  font-weight: 400;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  width: 73px;
  height: 12px;
  display: inline;
  margin-top: 0px;
}
.cnt_row3 {
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  width: 52px;
  height: 52px;
  position: absolute;
  z-index: 16;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  right: 6px;
  bottom: 0px;
}
.price_wrap {
  background: linear-gradient(135deg, #f2140c 0%, #e8220e 70%, #f24d0c 100%);
  width: 52px;
  height: 13px;
  z-index: 18;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
  position: relative;
}
.price {
  text-align: center;
  line-height: 1;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-family: PingFangSC-Medium;
  font-size: 10px;
  width: 27px;
  height: 10px;
  display: inline;
  margin-top: 0px;
}
.img {
  width: 46px;
  height: 46px;
  display: inline-block;
  z-index: 17;
  position: absolute;
  right: 3px;
  bottom: 3px;
}
.img1 {
  width: 48px;
  height: 48px;
  display: inline-block;
  margin-left: 3px;
  margin-top: 0px;
}
</style>
