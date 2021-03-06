# Text 文本组件

### 介绍

文本组件，常用于名称、利益点等内容区域。

### 安装

``` javascript
import { createApp } from 'vue';
import { Text } from '@nutui/nutui-cat';

const app = createApp();
app.use(Text);
```

## 代码演示

### 基础用法

`row`，代表行数，超过则出现省略号。

```html
<NutText row="1">商品名称商品名称商品名称商品名称商品名称商品名称</NutText>

```
```html
<NutText row="2">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</NutText>

```

还可以在文本里加`icon`
```html
<NutText row="2">
  <NutTag type="618">618</NutTag>
  商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称
</NutText>
```

### 特殊类型

还有`jtCoupon`、`plusCoupon`等类型，用于优惠券头部。
```html
<NutText row="2">
  <NutTag type="618">618</NutTag>
  商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称
</NutText>
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| row         | 行数，超过行高出现利益点 | Number | `1`    |
| color       | 颜色  | String | -      |

<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击文本时触发 | event: Event | -->

