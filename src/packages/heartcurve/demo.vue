<template>
  <div class="demo">
    <h2>心跳曲线</h2>

    <h3 class="sub-title">一行三</h3>

    <NutRow :gutter="8">
      <NutCol :span="8" v-for="(item, index) in [1,2,3]" :key="index" >
        <div class="heartcurve-demo-box">
          <nutcat-heartcurve :top='topInfo' :centerPrice='centerPrice' :bottom='bottomInfo' size='small'></nutcat-heartcurve> 
        </div>
      </NutCol>
    </NutRow>

    <h3 class="sub-title">一行二</h3>

    <NutRow :gutter="10">
      <NutCol :span="12" v-for="(item, index) in [1,2]" :key="index">
        <nutcat-heartcurve :top='topInfo1' :centerPrice='centerPrice1' :bottom='bottomInfo1' ></nutcat-heartcurve>  
      </NutCol>
    </NutRow>

    <h3 class="sub-title">一行一</h3>

    <div class="goods">
      <img class="goods-img" src="//img14.360buyimg.com/imagetools/jfs/t1/136318/2/17914/253972/5fbcb355E73dd171e/7afebc86dec494e4.png" alt="">
   
      <div class="goods-info">
        <div class="title">商品名称商品名称商品名称商品名称商品名称商品名称</div>
        <nutcat-heartcurve :top='topInfo2' :centerPrice='centerPrice2' :bottom='bottomInfo2' size='big'></nutcat-heartcurve>  
      </div>
    </div>

    <h2>心跳折线</h2>
    <h3 class="sub-title">一行三</h3>
    <NutRow :gutter="8">
      <NutCol :span="8" v-for="(item, index) in [1,2,3]" :key="index">
        <div style="padding:10px 0px;background:#fff">
          <nutcat-heartcurve :top='topInfo3'  :bottom='bottomInfo3' size='small' type='broken' ></nutcat-heartcurve>  
        </div>
      </NutCol>
    </NutRow>

    <h3 class="sub-title">一行二</h3>
    <NutRow :gutter="10">
      <NutCol :span="12" v-for="(item, index) in [1,2]" :key="index">
        <nutcat-heartcurve :top='topInfo4'  type='broken'></nutcat-heartcurve>  
      </NutCol>
    </NutRow>

    <h3 class="sub-title">一行一</h3>
    <div class="goods">
      <img class="goods-img" src="//img14.360buyimg.com/imagetools/jfs/t1/136318/2/17914/253972/5fbcb355E73dd171e/7afebc86dec494e4.png" alt="">
      <div class="goods-info">
        <div class="title">商品名称商品名称商品名称商品名称商品名称商品名称</div>
        <nutcat-heartcurve :top='topInfo5'  size='big' type='broken'></nutcat-heartcurve>  
      </div>
    </div>

  </div>
</template>
  
  <script>
import { createComponent } from "@/utils/create";
const { createDemo } = createComponent("heartcurve");
export default createDemo({
  props: {},
  data() {
    return {
      topInfo:{
        center:'预估到手价'
      },
      centerPrice:'99.00',
      bottomInfo:{
        left:'<i class="line">￥99.00</i>',
      },

      topInfo1:{
        left:'<i class="line">￥99.00</i>',
        right:'即将恢复'
      },
      centerPrice1:'999.00',
      bottomInfo1:{
        center:'N 天最低价'
      },

      topInfo2:{
        center:'N 天最低价'
      },
      centerPrice2:'999.00',
      bottomInfo2:{
        left:'￥99.00',
        right:'即将恢复'
      },

      topInfo3:{
        center:'预售价'
      },
      bottomInfo3:{
        left:'￥99.00',
      },

      topInfo4:{
        left:'日常价 <i class="line">￥999.00</i>'
      },

      topInfo5:{
        left:'日常价 ￥999.00'
      },
    };
  },
});
</script>
  
<style lang="scss" scoped>

.goods{
    display: flex;
    background: #fff;
    padding: 10px;
    font-size: 12px;

    .goods-img{
      margin-right: 20px;
      width: 120px;
      height: 120px;
    }

  }
.sub-title{
  font-size: 12px;
  margin: 8px 0;
}
.line{
  text-decoration: line-through;
}
</style>
  