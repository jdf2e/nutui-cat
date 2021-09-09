<template>
  <div class="demo">
    <h2>基础用法</h2>

    <nut-cell title="展示做任务列表" @click.native="show = true"></nut-cell>
    <nut-popup :style="{ padding: '10px 10px' }" v-model="show" position="bottom">
      <nutcat-tasklist :list="data" @clickOperate='clickOperate'></nutcat-tasklist>
    </nut-popup>

    <h2>自定义样式</h2>
    <nut-cell title="展示做任务列表" @click.native="showCustomClass = true"></nut-cell>
    <nut-popup :style="{ padding: '10px 10px' }" v-model="showCustomClass" position="bottom">
      <nutcat-tasklist :list="data" customClass="task-self" ></nutcat-tasklist>
    </nut-popup>

    <h2>自定义右侧按钮</h2>
    <nut-cell title="展示做任务列表" @click.native="showCustomBtn = true"></nut-cell>
    <nut-popup :style="{ padding: '10px 10px' }" v-model="showCustomBtn" position="bottom">
      <nutcat-tasklist :list="data" class="task-self" :renderOpetation='renderOpetation' :renderIcon='renderIcon'></nutcat-tasklist>
    </nut-popup>
    
  </div>
</template>
  
  <script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('tasklist');
export default createDemo({
  props: {},
  data() {
    return {
      show:false,
      showCustomBtn:false,
      showCustomClass:false,
      data:[{
        id:0,
        name:'签到',
        maxTimes:10,
        desc:'每次奖励10星力值',
        icon:'https://img12.360buyimg.com/imagetools/jfs/t1/125272/33/17212/14373/5fa24076Ed6d2cd15/a784ee7b2cc6e9f6.jpg',
        operationMsg:'前往',
        operationStatus:'able',
      },
      {
        id:1,
        name:'关注品牌店铺',
        times:0,
        maxTimes:10,
        desc:'每次奖励10星力值',
        icon:'https://img12.360buyimg.com/imagetools/jfs/t1/125272/33/17212/14373/5fa24076Ed6d2cd15/a784ee7b2cc6e9f6.jpg',
        operationMsg:'前往',
        operationStatus:'able',
      },{
        id:2,
        name:'加入品牌会员',
        times:0,
        maxTimes:10,
        desc:'每次奖励10星力值',
        icon:'https://img12.360buyimg.com/imagetools/jfs/t1/125272/33/17212/14373/5fa24076Ed6d2cd15/a784ee7b2cc6e9f6.jpg',
        operationMsg:'前往',
        operationStatus:'able',
      },{
        id:3,
        name:'邀请好友助力',
        times:0,
        maxTimes:10,
        desc:'每次奖励10星力值',
        icon:'https://img12.360buyimg.com/imagetools/jfs/t1/125272/33/17212/14373/5fa24076Ed6d2cd15/a784ee7b2cc6e9f6.jpg',
        operationMsg:'已完成',
        operationStatus:'unable',
      }]
    };
  },
  methods:{
    clickOperate(data){
      data.status = 'unable'
      data.operationMsg = '已签到'
    },
    renderIcon(h, { node }) {
        return h('nutcat-icon',{
          
          props:{
            color:"#F02B2B", 
            type:"qiang"
          }
        });
    },
    renderOpetation(h, { node,parent }) {
      let that = this
      let classes = `${node.operationStatus?node.operationStatus:''} operation`
      return h('div',{
         'class': classes,
          on: {
            click:(node)=>{
              that.clickOperate(node)
            }
          }
      },[node.operationMsg])
    }
  }
});
</script>
  
<style lang="scss">
.demo{
  .popup-box{
    background: linear-gradient(180deg, rgba(165,158,227,1) 0%,rgba(235,199,255,1) 100%),linear-gradient(rgba(254,255,255,1), rgba(254,255,255,1));
  }
  .nutcat-tasklist-page{
    .task-self{
      background:  linear-gradient(90deg, rgba(255,255,255,1) 0%,rgba(255,255,255,0.65) 100%);
    }
  }
  
  .operation{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 28px;
    background: #FF9920;
    border-radius: 15px;
    font-size: 12px;
    color: rgba(255, 255, 255, 1);

    &.unable{
      background: #FFD929;
      color: #E06913;
    }
  }
}

</style>
  