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
<nutcat-showmore></nutcat-showmore>
```

### 自定义背景颜色
```javascript
<nutcat-showmore background="#d87125"></nutcat-showmore>
```

### 自定义选择icon以及颜色
``` javascript
<nutcat-showmore iconName="coupon" iconColor="black"></nutcat-showmore>
```

### 自定义文字
```javascript
<nutcat-showmore text="自定义文字" @moreClick="changeclick"></nutcat-showmore>
```
### 添加点击事件
```javascript
<nutcat-showmore @moreClick="changeclick"></nutcat-showmore>
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
