# Shop 店铺模块

### 介绍

点击跳转至对应的店铺落地页.

### 安装

``` javascript
import { createApp } from 'vue';
import { Shop } from '@nutui/nutui-cat';

const app = createApp();
app.use(Shop);
```

## 代码演示

### 基础用法

`Shop` 组件可以大致划分为下面几个区域：

<br>

<img src="https://storage.360buyimg.com/imgtools/ceaeeaf9d6-634db7d0-0989-11ec-93ed-e5d3448c4b8d.png" width="750" />

<br>
<br>

<img src="https://storage.360buyimg.com/imgtools/6556baa93d-6406cea0-0989-11ec-8882-df742f2b18dd.png" width="750" />

#### data

| 属性             | 说明            | 
|-----------------|-----------------|
| cName           | 名称  |
| cDesc           | 利益点 |
| cLogo           | logo图片  |
| cImage          | 图片  |
| cTag            | 标签，通常用于内容区，个数可能不止一个 | 
| cDistance       | 距离，通常用于 LBS | 


## API

### 布局类型

| 参数          | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type    | 类型，可选值有`normal-1`、`normal-2`、`normal-3`、`normal-4`、`normal-5`、`lbs`、`feed-1`    | String | - |
| col     | 列元素个数（例如设置一行3个，那么col值为3）  | String、Number | - |
| rowType | 布局方式，可选值为`flex`    | String| - |
| gutter  | 列元素之间的间距（单位为px） | String/Number| - |
| scrollX | 是否滑动                  | Boolean| false |

### Props

| 参数         | 说明            | 类型       | 默认值   |
|--------------|----------------|------------------|--|
| data         | 店铺数据        | Array、Object | - |
| imgWidth     | 主图片宽度       | String | - |
| imgHeight    | 主图片高度       | String | - |
| nameRow      | 名称行数         | String | - |
| descRow      | 店铺利益点行数    | String | - |
| tag          | 标签类型         | String | - |
| bgColor      | 背景颜色         | String | - |
| bgUrl        | 背景图片链接      | String | - |

### data

| 属性          | 说明                    | 类型    |  默认值  |
|--------------|-------------------------|--------|---|
| name         | 名称                     | String| - |
| desc         | 描述语、利益点、运营语等    | String | - |
| logo         | logo图片                 | String | - |
| src          | 图片                     | String | - |
| label        | 标签                     | String | - |
| price        | 价格，用于`feed-1`类型    | String、Number | - |
| linePrice    | 划线价，用于`feed-1`类型   | String、Number | - |
| distance     | 距离，用于`lbs`类型   | String、Number | - |

### slot

除了默认插槽，还有以下具名插槽

| 属性          | 说明               | 类型    |  默认值  |
|--------------|--------------------|--------|---|
| tag         | 利益点标签，用于`normal-2`、`lbs`类型     | String | - |


### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click-shop  | 点击时触发 | event: Event |

