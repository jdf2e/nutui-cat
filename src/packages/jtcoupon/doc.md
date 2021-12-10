#  JtCoupon 京贴+PLUS优惠券

### 介绍

**头号京贴**：点击根据券的情况，进行判断—领取成功，有toast提示，同时按钮更新为“去使用”，点击后可进入去使用页面；领取失败，根据实际情况反馈，如下特殊状态示例所示；<br>
**PLUS券**: 点击可进入对应的PLUS落地页。

### 安装

``` javascript
import { createApp } from 'vue';
import { JtCoupon } from '@nutui/nutui-cat';

const app = createApp();
app.use(JtCoupon);
```

## 代码演示

### 基础用法

```html
<NutJtcoupon 
    :data="data"
    type='normal'
    col="3"
>
</NutJtcoupon>
```
```javascript
this.data = [
    {
        limitStr: "限购 [senmum红木家具旗舰店] 店铺部分商品",
        quota: "5.0",
        disCount: "1.0",
        src: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png"
    },{
        limitStr: "限购 [senmum红木家具旗舰店] 店铺部分商品",
        quota: "5.0",
        disCount: "1.0",
        src: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png"
    },{
        limitStr: "限购 [senmum红木家具旗舰店] 店铺部分商品",
        quota: "5.0",
        disCount: "1.0",
        src: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png"
    }
];
```


## API

### 布局类型

| 参数          | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type    | 类型，可选值有`normal`、`finance`    | String | - |
| col     | 列元素个数（例如设置一行3个，那么col值为3）  | String、Number | - |
| rowType | 布局方式，可选值为`flex`    | String| - |
| gutter  | 列元素之间的间距（单位为px） | String/Number| - |
| scrollX | 是否滑动                  | Boolean| false |


### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|---------------------------------|--------|------------------|
| type         | 类型，可选值有 normal、finance     | String | - |
| data         | 优惠券数据        | Array、Object | - |


<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| addCart  | 点击加入购物车回调 | 当前商品数据 |
| goodDetails  | 点击跳转商详回调 | 当前商品数据和商品索引 |
     -->