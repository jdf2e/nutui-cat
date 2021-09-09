#  arcrolling组件
### 介绍

异形轮播，弧形轮播

### 安装

```
import { createApp } from 'vue';
import { arcrolling } from '@nutui/nutui-cat';

const app = createApp();
app.use(arcrolling);
```

## 代码演示

### 基础用法

```html
<nutcat-arcrolling
    class="demo1"
    :list="starList"
    :leftDistance="size"
    @callback="cbClick"
>
</nutcat-arcrolling>
<nutcat-arcrolling
    class="demo2"
    directionType="horizontal"
    :list="starList"
    :leftDistance="size"
    @callback="cbClick"
>
</nutcat-arcrolling>
```
```javascript
data() {
    return {
        starList: [],
        size: ['240', '300', '410']
    };
},
mounted() {
    this.starList = star;
},
methods: {
    cbClick(item) {
        console.log(item);
    }
}
```



## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| directionType         | 轮播的方向 "horizontal" "vertical"           | string | "vertical"               |
| leftDistance         | 在vertical模式下，每个item的left对应值，对称设置 ,active 的取第一项， active两侧的取第二项，以此类推        | Array |        ['240', '300', '410']        |
| list         | 数据          | Array | []               |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| callback  | 点击图片时触发 | event |

    