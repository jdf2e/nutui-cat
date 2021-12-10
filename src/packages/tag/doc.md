# Tag 标签组件

### 介绍

包含大促中常用的标签。

### 安装

``` javascript
import { createApp } from 'vue';
import { Tag } from '@nutui/nutui-cat';

const app = createApp();
app.use(Tag);
```

## 代码演示

### 基础用法

<!-- 按钮支持 `default`、`primary`、`info`、`warning`、`danger`、`success` 六种类型，默认为 `default`。 -->

```html
<NutTag type="red">标签</NutTag>
<NutTag type="red-line">标签</NutTag>
<NutTag type="red-gradient">正在秒杀</NutTag>
<NutTag type="red-light">其他利益点</NutTag>
<NutTag type="red-pink">其他利益点</NutTag>
<NutTag type="red-light">
  <span slot="preSlot">满减</span>
  其他利益点
</NutTag>

```

### 样式风格

`tag`的`radius`属性用来设置标签的圆角；

```html
<NutTag radius borderColor="#E8220E" color="#E8220E">满199减100</NutTag>
<NutTag radius bgColor="#E8220E">商品名称</NutTag>
```

### 自定义颜色

`tag`的`bgColor`属性用来设置标签的背景颜色；
`color`属性用来设置标签的字体颜色；
`borderColor`属性用来设置标签的边框颜色；

```html
<NutTag radius bgColor="rgb(114, 50, 221)">商品名称</NutTag>
<NutTag radius bgColor="rgb(255, 225, 225)" color="rgb(173, 0, 0)">商品名称</NutTag>
<NutTag radius borderColor="rgb(114, 50, 221)" color="rgb(114, 50, 221)">商品名称</NutTag>
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type       | 类型，可参考demo     | String |  -    |
| radius     | 圆角    | String |  -     |
| beforeIcon | 位于内容前的`icon`  | String   |  -             |
| afterIcon  | 位于内容后的`icon`  | String | - |
| color      |字体颜色，支持传入 linear-gradient 渐变色| String | -   |
| borderColor| 	边框颜色  | String | -  |
| bgColor    | 背景色     | String |  -  |

<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: Event | -->

