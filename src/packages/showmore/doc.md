#  showmore组件

### 介绍

用于展示更多商品

### 安装
```
import { createApp } from 'vue';
import { ShowMore } from '@nutui/nutui-cat';

const app = createApp();
app.use(ShowMore);
```


## 代码演示

### 基础用法
``` javascript
<NutShowmore></NutShowmore>
```

### 自定义背景颜色
```javascript
<NutShowmore background="#d87125"></NutShowmore>
```

### 自定义选择icon以及颜色
``` javascript
<NutShowmore iconName="coupon" iconColor="black"></NutShowmore>
```

### 自定义文字
```javascript
<NutShowmore text="自定义文字" @moreClick="changeclick"></NutShowmore>
```
### 添加点击事件
```javascript
<NutShowmore @moreClick="changeclick"></NutShowmore>
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| text         | 文字               | String | 查看更多   |
| width        | 宽度                       | String | 320            |
| height         | 高度 | String | 36    |
| iconName| icon的名字    | String | 'arrow-down' |
| iconColor        | icon的颜色                       | String | '#FFFFFF' |
| size        | icon的尺寸                 | String | '16px' |
| background        | 背景颜色                  | String | 'red' |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| moreClick  | 点击整个框时触发 | - |
