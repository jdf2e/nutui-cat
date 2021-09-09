<template>
    <div class="demo">
      <h2>两行入口</h2>
      
      <nutcat-hallcapsule 
        :lists="lists1"
      ></nutcat-hallcapsule>
      <br />
      <nutcat-hallcapsule 
        :lists="partialLists2" 
        :hasChangeBtn="true"
        @change="handleChange"
      ></nutcat-hallcapsule>

      <h2>一行入口</h2>
      <nutcat-hallcapsule 
        :lists="lists1"
        :lines="1"
      ></nutcat-hallcapsule>
      <br />
      <nutcat-hallcapsule 
        :lists="lists1"
        :lines="1"
        :width="90"
      ></nutcat-hallcapsule>
      <br />
      <nutcat-hallcapsule 
        :lists="lists3"
        :lines="1"
        :width="90"
      ></nutcat-hallcapsule>
    </div>
  </template>
  
  <script>
  import { createComponent } from '@/utils/create';
  const { createDemo } = createComponent('hallcapsule');
  export default createDemo({
    props: {},
    data() {
      return {
        lists1: [
          {
            id:1,
            name: '巴黎欧莱雅'
          },
          {
            id:2,
            name: '超值抢购'
          },
          {
            id:3,
            name: '全球进口1'
          },
          {
            id:4,
            name: '全球进口2'
          },
          {
            id:5,
            name: '全球进口3'
          },
          {
            id:6,
            name: '全球进口4'
          },
          {
            id:7,
            name: '最多五个字'
          }
        ],
        lists2: [
          {
            id:1,
            name: '巴黎欧莱雅巴黎欧莱雅巴黎欧莱雅'
          },
          {
            id:2,
            name: '超值抢购'
          },
          {
            id:3,
            name: '全球进口1'
          },
          {
            id:4,
            name: '全球进口2'
          },
          {
            id:5,
            name: '全球进口3'
          },
          {
            id:6,
            name: '全球进口4'
          },
          {
            id:7,
            name: '全球进口5'
          },
          {
            id:8,
            name: '全球进口6'
          },
          {
            id:9,
            name: '全球进口7'
          },
          {
            id:10,
            name: '全球进口8'
          },
          {
            id:11,
            name: '全球进口9'
          },
          {
            id:12,
            name: '全球进口10'
          }
        ],
        lists3: [
          {
            id: 1,
            name: '#宅家看电影 >'
          },
          {
            id: 2,
            name: '#宅家看电影'
          },
          {
            id: 3,
            name: '#宅家看电影'
          },
          {
            id: 4,
            name: '#宅家看电影'
          },
          {
            id: 5,
            name: '#宅家看电影'
          },
          {
            id: 6,
            name: '#宅家看电影'
          },
          {
            id: 7,
            name: '#宅家看电影'
          }
        ],
        isFirstPartial: true,
        partialLists2: []
      };
    },
    mounted(){
      this.partialLists2 = this.lists2.slice(0, 6)
    },
    methods: {
      handleChange() {
        this.isFirstPartial = !this.isFirstPartial;
        if(this.isFirstPartial) {
          this.partialLists2 = this.lists2.slice(0, 6)
        } else {
          this.partialLists2 = this.lists2.slice(6)
        }
      }
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .nutcat-hallcapsule {
  }
  
  #app {
    .demo {
      padding-left: 9px;
      padding-right: 9px;
    }
  }
  </style>
  