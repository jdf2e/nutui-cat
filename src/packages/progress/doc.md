#  progress 组件

### 介绍

展示操作或任务的当前进度

### 安装

``` javascript
import { createApp } from 'vue';
import { Progress } from '@nutui/nutui-cat';

const app = createApp();
app.use(Progress);
```


## 代码演示

### 基础用法

```html
<NutProgress :percentage='40' :phases='phases'></NutProgress>
```
```javascript
data() {
    return {
        phases:[
        {
            desc:'300W',
            percent:'45',
            click:(item)=>{
            console.log(item)
            }
        }
        ]
    };
}
```

### 动态用法

```html
<NutProgress :percentage='50' :phases='phases' animation></NutProgress>
```
```javascript
data() {
    return {
        phases:[
        {
            desc:'300W',
            percent:'45',
            click:(item)=>{
                console.log(item)
            }
        }
        ]
    };
}
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| percentage         | 百分比               | Number | 0               |
| phases        | 到达某个阶段                         | Array | -                |
| animation         | 进度条是否添加动画 | Boolean | false                |


### phases

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| desc         | 当前阶段的文案               | String | -              |
| percent        | 达到某个进度值时点亮                         | Number | 0                |
| click         | 点击当前阶段的事件回调 | (item)=>{} | (item)=>{}                |