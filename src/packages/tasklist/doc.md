#  tasklist组件

### 介绍

用于展示活动列表

### 安装
```
import { createApp } from 'vue';
import { TaskList } from '@nutui/nutui-cat';

const app = createApp();
app.use(TaskList);
```
## 代码演示

### 基础用法
```html
<nut-popup :style="{ padding: '10px 10px' }" v-model="show" position="bottom">
  <NutTasklist :list="options"  @clickOperate='clickOperate'></NutTasklist>
</nut-popup>
```

### 自定义样式
```html
<nut-popup :style="{ padding: '10px 10px' }" v-model="show" position="bottom">
  <NutTasklist :list="options" customClass="task-self" ></NutTasklist>
</nut-popup>

```

```css
<style lang="scss">
.nutcat-tasklist-page{
  .task-self{
    background:  linear-gradient(90deg, rgba(255,255,255,1) 0%,rgba(255,255,255,0.65) 100%);
  }
}
</style>
```

### 自定义右侧按钮
可以通过 renderOpetation 和 renderIcon 分别自定义右侧按钮和左侧图标。使用 renderOpetation 或 renderIcon 指定渲染函数，该函数返回需要的节点区内容即可。
```html
<nut-popup :style="{ padding: '10px 10px' }" v-model="show" position="bottom">
  <NutTasklist :list="options" class="task-self" :renderOpetation='renderOpetation' :renderIcon='renderIcon'></NutTasklist>
</nut-popup>
```
```javascript
methods:{
  clickEvnt(data){
    data.status = 'unable'
    data.operationMsg = '已签到'
  },
  renderIcon(h, { node }) {
      return h('NutIcon',{
          
        props:{
          color:"#F02B2B", 
          type:"qiang"
        }
      });
  },
  renderOpetation(h, { node }) {
    let that = this
    let classes = `${node.status?node.status:''} operation`
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
```


### demo 中统一的 options 
```javascript
data(){
  return {
    options:[{
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
  }
}

```





## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| list         | 每一列任务的内容               | Array | -                |
| customClass        | 自定义每一列的 class 值                         | String | ''                |
| renderOpetation         | 自定义渲染右侧按钮内容 | Function | -                |
| renderIcon | 自定义渲染左侧图标内容     | Function | - |

### list API
| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| name         | 任务名称               | string | -                |
| times         | 已任务完成次数 | number|string | -                |
| maxTimes        | 任务完成的最大次数                         | number|string | ''                |
| desc         | 任务描述 | string | -                |
| icon | 左侧图标链接，默认使用 img 标签展示     | string | - |
| operationMsg | 右侧按钮文案     | string | - |
| operationStatus | 右侧按钮状态，可选：'able'、'unable'     | string | - |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击每一列任务时触发 | 返回当前列对象 |
| clickOperate  | 点击每一列右侧按钮时触发 | 返回当前列对象 |
    