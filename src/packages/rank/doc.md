# Rank 榜单模块

### 介绍

点击跳转至对应的榜单落地页.

### 安装

``` javascript
import { createApp } from 'vue';
import { Rank } from '@nutui/nutui-cat';

const app = createApp();
app.use(Rank);
```

## 代码演示

### 基础用法

`Rank` 组件可以大致划分为下面几个区域：

<br>

<img src="https://storage.360buyimg.com/imgtools/37fdadd542-7bb0da00-0989-11ec-93ed-e5d3448c4b8d.png" width="750" />

<br>

| 属性             | 说明            | 
|-----------------|-----------------|
| cName           | 名称  |
| cDesc           | 利益点 |
| cImage          | 图片  |
| cLabel          | 标签，通常用于左上角，一般只有一个 | 
| cTag            | 标签，通常用于内容区，个数可能不止一个 | 

## API

### 布局类型

| 参数          | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type    | 类型，可选值有`normal-1`、`normal-2`、`normal-3`、`normal-4`、`feed-1`    | String | - |
| col     | 列元素个数（例如设置一行3个，那么col值为3）  | String、Number | - |
| rowType | 布局方式，可选值为`flex`    | String| - |
| gutter  | 列元素之间的间距（单位为px） | String/Number| - |
| scrollX | 是否滑动                  | Boolean| false |

### Props

| 参数         | 说明            | 类型   | 默认值           |
|--------------|----------------|--------|------------------|
| data         | 榜单数据        | Array、Object | - |
| productData  | 商品数据        | Array、Object | - |
| imgWidth     | 主图片宽度      | String | - |
| imgHeight    | 主图片高度      | String | - |
| nameRow      | 名称行数        | String | - |
| descRow      | 榜单利益点行数   | String | - |
| tag          | 标签类型        | String | - |
| bgColor      | 背景颜色        | String | - |
| bgUrl        | 背景图片链接     | String | - |

### data

| 属性          | 说明                    | 类型    |  默认值  |
|--------------|-------------------------|--------|---|
| name         | 名称                     | String| - |
| desc         | 描述语、利益点、运营语等    | String | - |
| src          | 图片                     | String | - |
| label        | 标签                     | String | - |

<!-- 
### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击时触发 | event: Event | -->
