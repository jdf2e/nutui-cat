# Icon 图标组件

### 介绍

基于 IconFont 字体的图标集，可以通过 Icon 组件使用。

### 安装

``` javascript
import { createApp } from 'vue';
import { Icon } from '@nutui/nutui-cat';

const app = createApp();
app.use(Icon);
```

## 代码演示

### 基本用法

`Icon` 的 `type` 属性支持传入图标名称或图片链接。

```html
<NutIcon type="heart"></NutIcon>
```

### 自定义尺寸

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```html
<NutIcon type="heart" size="24px"></NutIcon>
<NutIcon type="heart" size="32px"></NutIcon>
```

### 自定义颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```html
<NutIcon type="heart" color="#fa2c19"></NutIcon>
```

## API

### Props

| 参数         | 说明               | 类型             | 默认值           |
|-------------|--------------------|-----------------|-----------------|
| type         | 图标名称           | String           | -                |
| color        | 图标颜色           | String           | -                |
| size	       | 图标大小，如 `20px` `2em` `2rem` | String or Number | -    

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: Event |

