<template>
  <div class="demo">
    <h2>普通tab - 一行文字</h2>

    <NutTab
      class="navtab"
      :data="[list1,{cName:['title']}]"
      :activeIndex='activeIndex'
      @click="(data,i)=>{activeIndex = i}"
    ></NutTab>


    <NutTab
      class="navtab"
      :data="[list2,{cName:['title']}]"
      :activeIndex='activeIndex1'
      @click="(data,i)=>{activeIndex1 = i}"
    ></NutTab>

    <NutTab
      class="navtab"
      :data="[list2,{cName:['title']}]"
      :activeIndex='activeIndex2'
      :showLine='false'
      @click="(data,i)=>{activeIndex2 = i}"
    ></NutTab>


    <h2>重场景tab - 一行文字</h2>
    <NutTab
      class="navtab1"
      :data="[list3,{cName:['title']}]"
      :activeIndex='activeIndex3'
      :showLine='false'
      @click="(data,i)=>{activeIndex3 = i}"
      type='simple'
    ></NutTab>

    <h2>重点突出选中态 - 两行文字</h2>
    <NutTab
      class="navtab2"
      :data="[list4,{cName:['title'],cDesc:['desc']}]"
      :showLine='false'
      :activeIndex='activeIndex4'
      @click="(data,i)=>{activeIndex4 = i}"
      type='complex'
    ></NutTab>

    <h2>秒杀导航</h2>
    <NutTab
      class="navtab3"
      customClass="navtabitem"
      activeClass='navtabactive'
      :activeIndex='activeIndex5'
      :data="[list5,{cName:['title']}]"
      :showLine='false'
      @click="(data,i)=>{activeIndex5 = i}"
      type='complex'
    ></NutTab>

    <h2>带有图片</h2>
    <NutTab
      customClass="navtabitem"
      :activeIndex='activeIndex5'
      :data="[list6,{cName:['title'],cImage:['pictureUrl']}]"
      @click="(data,i)=>{activeIndex5 = i}"
      type='image'
    ></NutTab>

  </div>
</template>
  
<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('tab');

export default createDemo({
  data() {
    return {
      list: [
        {
          id: 0,
          title: '日用品'
        },
        {
          id: 1,
          title: 'tab2'
        },
        {
          id: 2,
          title: 'tab3'
        },
        {
          id: 3,
          title: 'tab4'
        },
        {
          id: 4,
          title: 'tab5'
        },
        {
          id: 5,
          title: 'tab5'
        },
        {
          id: 6,
          title: 'tab5'
        }
      ],
      list1: [
        {
          id: 0,
          title: 'O元预约'
        },
        {
          id: 1,
          title: '好货预售'
        },
      ],
      list2: [
        {
          id: 0,
          title: '日用品'
        },
        {
          id: 1,
          title: 'tab2'
        },
        {
          id: 2,
          title: 'tab3'
        }
      ],
      list3: [
        {
          id: 0,
          title: '京东家电'
        },
        {
          id: 1,
          title: '京东美妆'
        },
        {
          id: 2,
          title: '京东生鲜'
        },
        {
          id: 3,
          title: '生活服务'
        },{
          id: 4,
          title: '京东生鲜'
        },
        {
          id: 5,
          title: '生活服务'
        }
      ],
      list4: [
        {
          id: 0,
          title: '预售推荐',
          desc:'猜你喜欢'
        },
        {
          id: 1,
          title: '美妆预售',
          desc:'精华乳液'
        },
        {
          id: 2,
          title: '超市预售',
          desc:'日用百货'
        },
        {
          id: 3,
          title: '家电预售',
          desc:'家用电器'
        }
      ],
      list5: [
        {
          id: 0,
          title: '8:00',
          desc:'已结束'
        },
        {
          id: 1,
          title: '14:00',
          desc:'抢购中'
        },
        {
          id: 2,
          title: '16:00',
          desc:'即将开始'
        },
        {
          id: 3,
          title: '18:00',
          desc:'即将开始'
        },
        {
          id: 4,
          title: '20:00',
          desc:'即将开始'
        }
      ],

      list6: [
        {
          id: 0,
          title: '牛奶乳品',
          pictureUrl:'//m.360buyimg.com/babel/s205x159_jfs/t1/186244/2/17927/78464/610cdfbeE46ff28b6/e42bcf4b58920eb4.png'
        },
        {
          id: 1,
          title: '牛奶乳品',
          pictureUrl:'//m.360buyimg.com/babel/s205x159_jfs/t1/186244/2/17927/78464/610cdfbeE46ff28b6/e42bcf4b58920eb4.png'
        },
        {
          id: 2,
          title: '牛奶乳品',
          pictureUrl:'//m.360buyimg.com/babel/s205x159_jfs/t1/186244/2/17927/78464/610cdfbeE46ff28b6/e42bcf4b58920eb4.png'
        },
        {
          id: 3,
          title: '牛奶乳品',
          pictureUrl:'//m.360buyimg.com/babel/s205x159_jfs/t1/186244/2/17927/78464/610cdfbeE46ff28b6/e42bcf4b58920eb4.png'
        },
        {
          id: 4,
          title: '牛奶乳品',
          pictureUrl:'//m.360buyimg.com/babel/s205x159_jfs/t1/186244/2/17927/78464/610cdfbeE46ff28b6/e42bcf4b58920eb4.png'
        },
        {
          id: 4,
          title: '牛奶乳品',
          pictureUrl:'//m.360buyimg.com/babel/s205x159_jfs/t1/186244/2/17927/78464/610cdfbeE46ff28b6/e42bcf4b58920eb4.png'
        },
        {
          id: 4,
          title: '牛奶乳品',
          pictureUrl:'//m.360buyimg.com/babel/s205x159_jfs/t1/186244/2/17927/78464/610cdfbeE46ff28b6/e42bcf4b58920eb4.png'
        }
      ],

      activeIndex:0,
      activeIndex1:0,
      activeIndex2:0,
      activeIndex3:0,
      activeIndex4:0,
      activeIndex5:1
    };
  },
  mounted() {},
  methods: {
  }
});
</script>
  
<style lang="scss" scoped>
.navtab {
  height: 40px;
  margin-bottom:30px;
  background: #fff;
}
.navtab1 {
  height: 30px;
}
.navtab2 {
  height: 45px;
}

.navtab3 {
  height: 42px;
  background: #820C00;
  color: #fff;

  
}

</style>

<style lang="scss">
.navtabactive{
  background: #FDEDEC;
  color: #2E2D2D;
}
</style>
  