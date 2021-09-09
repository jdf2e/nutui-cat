#  starbrand组件

### 介绍

基于明星品牌展示，多行展示

### 安装

```
import { createApp } from 'vue';
import { starbrand } from '@nutui/nutui-cat';

const app = createApp();
app.use(starbrand);
```

## 代码演示

### 基础用法

```html
<nutcat-starbrand :brand-list="list" @callback="handleClick"></nutcat-starbrand>
```
```javascript
data() {
    return {
        list:[
            [{pictureUrl: 'XXXXXXXXXXXX'},{pictureUrl: 'XXXXXXXXXXXX'},{pictureUrl: 'XXXXXXXXXXXX'},{pictureUrl: 'XXXXXXXXXXXX'}],
            [{pictureUrl: 'XXXXXXXXXXXX'},{pictureUrl: 'XXXXXXXXXXXX'},{pictureUrl: 'XXXXXXXXXXXX'},{pictureUrl: 'XXXXXXXXXXXX'}],
            [{pictureUrl: 'XXXXXXXXXXXX'},{pictureUrl: 'XXXXXXXXXXXX'},{pictureUrl: 'XXXXXXXXXXXX'},{pictureUrl: 'XXXXXXXXXXXX'}],
        ]
    }
},
methods: {
    handleClick(item) {
        console.log(item);
    }
}
```



## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| brand-list         | 数据             | Array | []               |

```
brand-list是一个二维数组，比如list = [[1,2],[3,4]]，这样的格式数据就会展示成2列的形式，进行滚动，同理
[[1,2],[3,4],[5.6]]就会展示成3列形式。   
```

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| callback  | 点击图片时触发 | 当前item的数据 |
