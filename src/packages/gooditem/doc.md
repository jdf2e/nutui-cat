#  gooditem 组件

### 介绍

用于一行三个商品展示

### 安装

``` javascript
import { createApp } from 'vue';
import { gooditem } from '@nutui/nutui-cat';

const app = createApp();
app.use(gooditem);
```

## 代码演示

### 基础用法

```html
    <nutcat-gooditem
      :list="data"
      :field-mapping="mapping"
      @addCart="addCart"
      @goodDetails="goodDetails"
    ></nutcat-gooditem>
```
```javascript
data() {
    return {
        data: [],
        mapping: {
            goodImg: 'image',
        }
    };
},
methods: {
    addCart(item) {
        console.log('加入购物车', item);
    },
    goodDetails(item, index) {
        console.log('跳转商品详情页', item, index);
    }
},
mounted() {
    this.data = "数据";
}
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| list         | 商品数据列表               | Array | []               |
| field-mapping        | 数据字段映射表，支持嵌套数据                         | Object | 见下方|.

```
{
    goodImg: 'image',  //商品图片取数据的”image“字段
    name: 'name',  //商品名称取数据的”name“字段
    subTitle: '["productExtInfo"]["promoTagDet1"]',//商品副标题取数据的嵌套字段
    pPrice: 'pPrice',  //商品价格取数据的”pPrice“字段
    linePrice: 'linePrice'  //商品划线价取数据的”linePrice“字段
}       
```
### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| addCart  | 点击加入购物车回调 | 当前商品数据 |
| goodDetails  | 点击跳转商详回调 | 当前商品数据和商品索引 |
    
    