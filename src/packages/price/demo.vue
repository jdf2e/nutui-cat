<template>

    <div class="demo">
      <h2>基础用法</h2>
    <nut-cell>
      <span slot="title">基础样式-整数</span>
      <span slot="desc">
         <NutPrice :price="888" :prop-class="'myPrice'" :need-symbol="false"></NutPrice>
      </span>
    </nut-cell>
     <nut-cell>
      <span slot="title">基础样式-小数</span>
      <span slot="desc">
         <NutPrice :price="888.88"  :need-symbol="false"></NutPrice>
      </span>
    </nut-cell>
     <nut-cell>
      <span slot="title">基础样式-小数</span>
      <span slot="desc">
         <NutPrice :price="0.89"  :need-symbol="false"></NutPrice>
      </span>
    </nut-cell>
      <nut-cell>
      <span slot="title">添加单位</span>
      <span slot="desc">
         <NutPrice :price="888.88" :need-symbol="true" symbol="$"></NutPrice>
      </span>
    </nut-cell>
   <h2>控制小数位数</h2>
    <nut-cell>
      <span slot="title">小数位数-0</span>
      <span slot="desc">
        <NutPrice :price="888.88" :decimal-digits="0" :rounding="false" ></NutPrice>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">小数位数-0-支持四舍五入</span>
      <span slot="desc">
        <NutPrice :price="888.88" :decimal-digits="0" :rounding="true" ></NutPrice>
      </span>
    </nut-cell>
 <nut-cell>
      <span slot="title">小数位数-2</span>
      <span slot="desc">
        <NutPrice :price="666.66666" :decimal-digits="2" :rounding="false" ></NutPrice>
      </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">小数位数-2-支持四舍五入</span>
      <span slot="desc">
        <NutPrice :price="6666.6666" :decimal-digits="2" :rounding="true" ></NutPrice>
      </span>
    </nut-cell>
 <h2>千位分割</h2>
    <nut-cell>
      <span slot="title">千位分割</span>
      <span slot="desc">
         <NutPrice :price="123456.88" :thousands="true"></NutPrice>
      </span>
    </nut-cell>
       <h2>异步展示</h2>
    <nut-cell>
      <span slot="title">异步展示</span>
      <span slot="desc">
         <NutPrice :price="price" :thousands="true" :decimal-digits="2" ></NutPrice>
      </span>
    </nut-cell>
    </div>
  </template>
  
  <script>
  import { createComponent } from '@/utils/create';
  const { createDemo } = createComponent('price');
  export default createDemo({
    props: {},
    data() {
      return {
        price:""
      };
    },
    mounted(){
      setInterval(() => {
      this.price = Math.random() * 10000000;
    }, 2000);
    }
  });
  </script>
  
  <style lang="scss" scoped>
 
  </style>
  