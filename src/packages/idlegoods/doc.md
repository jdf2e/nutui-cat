#  idlegoods 组件

### 介绍

用于一行爱豆区专属商品展示

### 安装

``` javascript
import { createApp } from 'vue';
import { idlegoods } from '@nutui/nutui-cat';

const app = createApp();
app.use(idlegoods);
```

## 代码演示

### 基础用法

```html
    <NutIdlegoods
      :goods="data"
      @addCart="addCart"
      @goodDetails="goodDetails"
    >
    </NutIdlegoods>
```
```javascript
data() {
    return {
        data: {},
    };
},
methods: {
    addCart(item) {
        console.log('加入购物车', item);
    },
    goodDetails(item) {
        console.log('跳转商品详情页', item);
    }
},
mounted() {
    this.data = {

    };
}
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| goods         | 商品数据               | Object | {}               |

```
{
    image,  //商品图片字段
    name,  //商品名称字段
    pPrice,  //商品价格字段
}       
```
### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| addCart  | 点击加入购物车回调 | 当前商品数据 |
| goodDetails  | 点击跳转商详回调 | 当前商品数据 |
    