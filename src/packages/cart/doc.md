# cart组件

### 介绍

购物车样式组件，实现购物车多种样式展示和点击加购事件。
后期会追加动画等效果

### 安装

``` javascript
import { createApp } from 'vue';
import { Cart } from '@nutui/nutui-cat';

const app = createApp();
app.use(Cart);
```

## 代码演示

### 基础用法

```html
  <nutcat-cart @cartClik='fn'></nutcat-cart>
```
### 支持图片
```html
<nutcat-cart :imgUrl='imgurl' @cartClik='fn'></nutcat-cart>

data() {
      return {
        imgurl:"https://img12.360buyimg.com/imagetools/jfs/t1/183220/38/18884/667/61137422Edba95c67/75c5342a875eface.png"
      };
    },
```

## API
### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| size       | 图标大小 | String     |24px
| type     | 图标类型   | String(cart,qiang,cart-rect,cart-full)|  "cart"    |
| color      |图标颜色| String | "#fa2c19" |
| imgUrl| 	图片类型下图片链接  | String | -  |


### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| cartClik  | 点击按钮时触发 | '' | 

