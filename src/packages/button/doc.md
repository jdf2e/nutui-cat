# Button 按钮组件

### 介绍

基于 `nut-button` 组件封装，按钮用于触发一个操作。依赖组件：Button

### 安装

``` javascript
import { createApp } from 'vue';
import { Button } from '@nutui/nutui-cat';

const app = createApp();
app.use(Button);
```

## 代码演示

### 常规按钮

按钮支持 `red`、`red-line` 等类型。

```html
<NutButton type="red-line">标签</NutButton>
```

### 样式风格

`tag`的`radius`属性用来设置标签的圆角；`beforeIcon`、`afterIcon`可插入`icon`

```html
<NutButton radius borderColor="#E8220E" color="#E8220E">满199减100</NutButton>
<NutButton radius bgColor="#E8220E">商品名称</NutButton>
<NutButton radius bgColor="#E8220E" afterIcon="arrow-normal">商品名称</NutButton>
```

### 自定义颜色


`button`的`bgColor`属性用来设置标签的背景颜色；
`color`属性用来设置标签的字体颜色；
`borderColor`属性用来设置标签的边框颜色；

```html
<NutButton radius bgColor="rgb(114, 50, 221)">商品名称</NutButton>
<NutButton radius bgColor="rgb(255, 225, 225)" color="rgb(173, 0, 0)">商品名称</NutButton>
<NutButton radius borderColor="rgb(114, 50, 221)" color="rgb(114, 50, 221)">商品名称</NutButton>
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type       | 类型，可选值有`red`、`red-line` | String | -     |
| radius     | 圆角    | String |  -     |
| color      |字体颜色，支持传入 linear-gradient 渐变色| String | -   |
| borderColor| 	边框颜色  | String | -  |
| bgColor    | 背景色     | String |  -  |
| beforeIcon | 位于内容前的`icon`  | String   |   - |
| afterIcon  | 位于内容后的`icon`  | String | - |

<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: Event | -->

