<template>
    <div class="demo">
      <h2>基础用法</h2>
      
      <NutCart @cartClik='fn'></NutCart>
       <h2>使用图片</h2>
      
      <NutCart :imgUrl='imgurl' @cartClik='fn'></NutCart>
    </div>
  </template>
  
  <script>
  import { createComponent } from '@/utils/create';
  const { createDemo } = createComponent('cart');
  export default createDemo({
    props: {},
    data() {
      return {
        imgurl:"https://img12.360buyimg.com/imagetools/jfs/t1/183220/38/18884/667/61137422Edba95c67/75c5342a875eface.png"
      };
    },
    methods:{
      fn(){
        alert("加入购物车")
      }
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .NutCart {
  }
  </style>
  