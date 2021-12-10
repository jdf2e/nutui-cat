# Video 视频模块

### 介绍

点击跳转至对应的视频详情页。

### 安装

``` javascript
import { createApp } from 'vue';
import { Video } from '@nutui/nutui-cat';

const app = createApp();
app.use(Video);
```

### 代码演示

### 基础用法

`Video` 组件是由原子组件组成，例如图片、名称、利益点、标签等。前端在组件设计的结构层面，也把对应区域内容进行划分和插槽预留，每个区域都是一个插槽，可按照实际逻辑进行区域替换。

<br>

下面是 **feed-1** 类型，一行二个视频布局，上边是视频区域信息，下面包含商品和达人内容。适用于 feed 流。
视频的名称、图片、达人头像等通过 `data` 的属性传的。

#### data

| 属性          | 说明                     | 
|--------------|--------------------------|
| name         | 视频名称                 | String| - |
| desc         | 描述语、利益点、运营语等    | String | - |
| src          | 视频封面图                | String | - |
| label        | 标签                     | String | - |
| authorName   | 达人名字    | String、Number | - |
| authorPic    | 达人头像   | String、Number | - |
| pageView     | 阅读量   | String、Number | - |
| videoDuration| 视频时长   | String、Number | - |
| productName  | 商品名称，用于`feed-1`类型   | String、Number | - |


```html
<NutVideo 
  rowType="flex"
  gutter="3"
  :data="data" 
  col="2"
  type='feed-1'
>
</NutVideo>
```

```javascript
this.data = [
  {
    "name": "TÜV SÜD| 告别三无小龙虾，在小龙虾季助您安心畅",
    "productName": "DYSON戴森吹风机便携家用电吹风负离子智能控温海外版 HD01黑色",
    "authorName": "巴啦啦小魔仙",
    "desc": "好评率: 20%",
    "pageView": "212",
    "label": "源头好物",
    "videoDuration": "73",
    "authorPic": "https://m.360buyimg.com/ceco/jfs/t1/156946/30/4359/12113/5ff40f9dE5659cdfa/4aba7354a3bd8ae2.png",
    "src": "https://m.360buyimg.com/ceco/jfs/t1/184424/21/4916/95423/60a4897bE37bdffd3/cf9a66eb05457d5a.jpg",
  },{
    "name": "内蒙古草原法式小羊排",
    "productName": "DYSON戴森吹风机便携家用电吹风负离子智能控温海外版 HD01黑色",
    "authorName": "巴啦啦小魔仙",
    "desc": "好评率: 20%",
    "pageView": "212",
    "label": "源头好物",
    "videoDuration": "73",
    "authorPic": "https://m.360buyimg.com/ceco/jfs/t1/156946/30/4359/12113/5ff40f9dE5659cdfa/4aba7354a3bd8ae2.png",
    "src": "https://m.360buyimg.com/ceco/jfs/t1/186998/9/3418/331629/60a62dbcE972a9ce2/b011382d9a57830b.jpg",
  }
];
```

## API

### 布局类型

| 参数          | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type    | 类型，可选值有`feed-1`    | String | - |
| col     | 列元素个数（例如设置一行3个，那么col值为3）  | String、Number | - |
| rowType | 布局方式，可选值为`flex`    | String| - |
| gutter  | 列元素之间的间距（单位为px） | String/Number| - |
| scrollX | 是否滑动                  | Boolean| false |

### Props

| 参数         | 说明            | 类型       | 默认值   |
|--------------|----------------|------------------|--|
| data         | 视频数据        | Array、Object | - |
| nameRow      | 名称行数         | String | - |
| descRow      | 视频利益点行数    | String | - |
| tag          | 标签类型         | String | - |

### data

| 属性          | 说明                    | 类型    |  默认值  |
|--------------|-------------------------|--------|---|
| name         | 视频名称                 | String| - |
| desc         | 描述语、利益点、运营语等    | String | - |
| src          | 视频封面图                | String | - |
| label        | 标签                     | String | - |
| authorName   | 达人名字    | String、Number | - |
| authorPic    | 达人头像   | String、Number | - |
| pageView     | 阅读量   | String、Number | - |
| videoDuration| 视频时长   | String、Number | - |
| productName  | 商品名称，用于`feed-1`类型   | String、Number | - |


<!-- ### slot

除了默认插槽，还有以下具名插槽

| 属性          | 说明               | 类型    |  默认值  |
|--------------|--------------------|--------|---|
| tag         | 用于`normal-2`、`lbs`类型     | String | - | -->

<!-- 
### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击时触发 | event: Event | -->
