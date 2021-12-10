#  barrage组件
### 介绍

用于弹幕展示，可以分行展示，无限循环。

### 安装

``` javascript
import { createApp } from 'vue';
import { barrage } from '@nutui/nutui-cat';

const app = createApp();
app.use(barrage);
```

## 代码演示

### 基础用法

```html
  <NutBarrage
    :list="data"
  ></NutBarrage>
```
```javascript
data() {
    return {
        data: [],
    };
},
mounted() {
    this.data = [[1,2,3,4,5,6],[111,222,333,444,555,666]];
}
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| list         | 弹幕数据列表               | Array | []               |
| speed         | 弹幕速度               | Number | 70              |

```
list是一个二维数组，比如list = [[1,2],[3,4]]，这样的格式数据就会展示成2列弹幕的形式，进行滚动，同理
[[1,2],[3,4],[5.6]]就会展示成3列弹幕形式。   
```
### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| addCart  | 点击加入购物车回调 | 当前商品数据 |
    
    