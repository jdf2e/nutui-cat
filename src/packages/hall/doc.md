# Hall 会场组件

### 介绍

点击跳转至对应的会场落地页。

### 安装

``` javascript
import { createApp } from 'vue';
import { Hall } from '@nutui/nutui-cat';

const app = createApp();
app.use(Hall);
```

## 代码演示

### 基础用法



`Hall` 组件可以大致划分为下面几个区域：

<br>

<img src="https://storage.360buyimg.com/imgtools/37fdadd542-7bb0da00-0989-11ec-93ed-e5d3448c4b8d.png" width="750" />

| 属性             | 说明            | 
|-----------------|-----------------|
| cName           | 名称  |
| cDesc           | 利益点 |
| cImage          | 图片  |
| cTag            | 标签，通常用于内容区，个数可能不止一个 | 


## API

### 布局类型

| 参数          | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type    | 类型，可选值有`normal-1`、`normal-2`、`normal-3`、`normal-4`、`normal-5`、`normal-6`、`normal-7`、`normal-8`、`free-1`      | String | - |
| col     | 列元素个数（例如设置一行3个，那么col值为3）  | String、Number | - |
| rowType | 布局方式，可选值为`flex`    | String| - |
| gutter  | 列元素之间的间距（单位为px） | String/Number| - |
| scrollX | 是否滑动                  | Boolean| false |

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| data         | 会场数据         | Array、Object | - |
| imgWidth     | 主图片宽度       | String | - |
| imgHeight    | 主图片高度       | String | - |
| nameRow      | 名称行数    | String | - |
| descRow      | 利益点行数    | String | - |
| tag          | 标签类型          | String | - |
| bgColor      | 背景颜色          | String | - |
| bgUrl        | 背景图片链接       | String | - |
| bgTopColor   | `normal-8`上边的背景颜色 | String、Number | - |
| bgTopUrl     | `normal-8`上边的背景图片       | String、Number | - |
| leftSpan     | `left-1`类型左边会场的`span`   | String | - |

### slot

除了默认插槽，还有以下具名插槽

| 属性          | 说明                | 类型    |  默认值  |
|--------------|--------------------|--------|---|
| left         | 用于`free-1`类型     | String | - |
| right        | 用于`free-1`类型     | String | - |
| top          | 用于`free-1`类型     | String | - |
| bottom       | 用于`free-1`类型     | String | - |


### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click-hall  | 点击时触发 | event: Event |

