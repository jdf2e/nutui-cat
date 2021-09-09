<template>
    <div class="demo">
      <h2>基础用法</h2>
      
      <nutcat-cart @cartClik='fn'></nutcat-cart>
       <h2>使用图片</h2>
      
      <nutcat-cart :imgUrl='imgurl' @cartClik='fn'></nutcat-cart>
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
  .nutcat-cart {
  }
  </style>
  