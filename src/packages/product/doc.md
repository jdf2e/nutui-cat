# Product 商品模块

### 介绍

点击跳转至对应的商品详情页。

### 安装

``` javascript
import { createApp } from 'vue';
import { Product } from '@nutui/nutui-cat';

const app = createApp();
app.use(Product);
```

## 代码演示

### 基础用法

`Product` 组件可以大致划分为下面几个区域：

<br>

<img src="https://storage.360buyimg.com/imgtools/b9ac7fe253-1d603080-03e5-11ec-9874-cdedefa3c24e.png" width="750" />

<br>
<br>
价格区域可细分为下面四部分：
<br>
<br>

<img src="https://storage.360buyimg.com/imgtools/8c2bd20015-1d511550-03e5-11ec-a27f-676da10c85f4.png" width="750" />

<br>
<br>
左右布局的示意图如下：
<br>
<br>

<img src="https://storage.360buyimg.com/imgtools/d0bdf192f0-64a57fa0-0989-11ec-9000-277c1c2ea1e4.png" width="750" />



| 属性             | 说明            | 
|-----------------|-----------------|
| cName           | 名称  |
| cNameTag        | 名称前的标签  |
| cDesc           | 利益点 |
| cImage          | 图片  |
| cLabel          | 标签，通常用于左上角，一般只有一个 | 
| cTag            | 标签，通常用于内容区，个数可能不止一个 | 
| cPrice          | 价格 | 
| cPrePrice       | 价格前的内容 | 
| cAfterPrice     | 价格后的内容 | 
| cLinePrice      | 划线价格 | 
| cPreLinePrice   | 划线价格前的内容 | 


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
| data         | 商品数据        | Array、Object | - |
| imgWidth     | 主图片宽度       | String | - |
| imgHeight    | 主图片高度       | String | - |
| nameRow      | 名称行数         | String | - |
| descRow      | 商品利益点行数    | String | - |
| tag          | 标签类型         | String | - |
| bgColor      | 背景颜色         | String | - |
| bgUrl        | 背景图片链接      | String | - |
| heartName    | 心跳曲线文案      | String | - |


### data

| 属性          | 说明                    | 类型    |  默认值  |
|--------------|-------------------------|--------|---|
| name         | 名称                     | String| - |
| desc         | 描述语、利益点、运营语等    | String | - |
| src          | 图片                     | String | - |
| price        | 价格    | String、Number | - |
| linePrice    | 划线价   | String、Number | - |


### slot

除了默认插槽，还有以下具名插槽

| 属性           | 说明               | 类型    |  默认值  |
|---------------|--------------------|--------|---|
| tag           | 利益点标签     | String | - |
| preName       | 位于商品名称前     | String | - |
| priceAfterSlot| 位于价格后     | String | - |
| priceSlot     | 用于`normal-2`、`normal-3`、`fold`类型     | String | - |
| desc          | 用于`normal-5`、`normal-6`、`heart`类型     | String | - |
| shop          | 用于`feed-shop`类型     | String | - |

<!-- 
### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击时触发 | event: Event | -->

