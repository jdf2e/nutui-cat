#  tab组件

### 介绍

不同场景的楼层导航 Tab

### 安装

```
import { createApp } from 'vue';
import { tab } from '@nutui/nutui-cat';

const app = createApp();
app.use(tab);
```

## 代码演示

### 普通 Tab - 一行文字

```html
<nutcat-tab class="navtab" :data="[list1,{cName:['title']}]" :activeIndex='activeIndex' @click="(data,i)=>{activeIndex = i}" :showLine='true'></nutcat-tab>
```
```javascript
data() {
    return {
        list:{
          id: 0,
          title: 'O元预约'
        },
        {
          id: 1,
          title: '好货预售'
        },
    }
}
```

### 重场景 Tab - 一行文字

```html
<nutcat-tab class="navtab" :data="[list,{cName:['title']}]" :activeIndex='activeIndex3' @click="(data,i)=>{activeIndex3 = i}" type='simple'></nutcat-tab>
```
```javascript
data() {
    return {
        list:[{
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
        }]
    }
}
```

### 重点突出选中态 - 两行文字

```html
<nutcat-tab class="navtab" :data="[list4,{cName:['title'],cDesc:['desc']}]" :activeIndex='activeIndex4' @click="(data,i)=>{activeIndex4 = i}" type='complex'></nutcat-tab>
```
```javascript
data() {
    return {
        list:[{
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
        }]
    }
}
```

### 秒杀导航

```html
<nutcat-tab customClass="tabGroup" activeClass='tabActive' :data="[list5,{cName:['title']}]" :showLine='false' @click="(data,i)=>{activeIndex5 = i}" type='complex'></nutcat-tab>
```

```css
.tabGroup{
  height: 42px;
  background: #820C00;
  color: #fff;
}
.tabActive{
  background: #FDEDEC;
  color: #2E2D2D;
}
```

```javascript
data() {
    return {
        list: [
        {
          id: 0,
          title: '8:00',
          desc:'已结束',
        },
        {
          id: 1,
          title: '14:00',
          desc:'抢购中',
        },
        {
          id: 2,
          title: '16:00',
          desc:'即将开始',
        },
        {
          id: 3,
          title: '18:00',
          desc:'即将开始',
        },
        {
          id: 4,
          title: '20:00',
          desc:'即将开始',
        }
      ]
    }
}
```


### 带有图片

```html
<nutcat-tab customClass="navtabitem" :activeIndex='activeIndex5' :data="[list6,{cName:['title'],cImage:['pictureUrl']}]" @click="(data,i)=>{activeIndex5 = i}" type='image'></nutcat-tab>
```

```javascript
data() {
    return {
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
      ]
    }
}
```
## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| list         | 页签的详情               | Array | []                |
| type        | 导航的类型，可选：base、simple、complex      | String | base               |
| scroll         | 是否可以横向滑动，页签超多5个，自动滑动 | Boolean | false                |
| showLine | 是否展示页签之间的分割线，simple 类型默认展示     | Boolean | false |
| showDesc          | 是否展示副标题    | Boolean | true             |


### list

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| title         | 页签的标题               | String | -                |
| subtitle        | 页签的副标题      | String | -               |
| active         | 当前页签是否选中 | Boolean | -                |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击页签时触发 | 当前页签对象 |
    