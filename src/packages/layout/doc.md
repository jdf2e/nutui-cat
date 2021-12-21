# Layout 布局

### 介绍

用于快速进行布局

### 安装

``` javascript
import { createApp } from 'vue';
import { Row, Col } from '@nutui/nutui-cat';

const app = createApp();
app.use(Row);
app.use(Col);
```

## 代码演示

### 基础用法

```html
<NutRow>
  <NutCol :span="24">
    <div class="flex-content">span:24</div>
  </NutCol>
</NutRow>
<NutRow>
  <NutCol :span="12">
    <div class="flex-content">span:12</div>
  </NutCol>
  <NutCol :span="12">
    <div class="flex-content flex-content-light">span:12</div>
  </NutCol>
</NutRow>
<NutRow>
  <NutCol :span="8">
    <div class="flex-content">span:8</div>
  </NutCol>
  <NutCol :span="8">
    <div class="flex-content flex-content-light">span:8</div>
  </NutCol>
  <NutCol :span="8">
    <div class="flex-content">span:8</div>
  </NutCol>
</NutRow>
<NutRow>
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content flex-content-light">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
</NutRow>
```

### 设置元素间距

```html
<NutRow :gutter="10">
    <NutCol :span="8">
        <div class="flex-content">span:8</div>
    </NutCol>
    <NutCol :span="8">
        <div class="flex-content flex-content-light">span:8</div>
    </NutCol>
    <NutCol :span="8">
        <div class="flex-content">span:8</div>
    </NutCol>
</NutRow>   
```
### Flex布局

```html
<NutRow type="flex" wrap="nowrap">
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content flex-content-light">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
</NutRow>
<NutRow type="flex" justify="center">
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content flex-content-light">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
</NutRow>
<NutRow type="flex" justify="end">
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content flex-content-light">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
</NutRow>
<NutRow type="flex" justify="space-between">
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content flex-content-light">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
</NutRow>
<NutRow type="flex" justify="space-around">
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content flex-content-light">span:6</div>
  </NutCol>
  <NutCol :span="6">
    <div class="flex-content">span:6</div>
  </NutCol>
</NutRow>
```

## Prop

### row

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 布局方式，可选值为flex | String | -
| gutter | 列元素之间的间距（单位为px） | String、Number | -
| justify | Flex 主轴对齐方式，可选值为 start end center space-around space-between | String | start
| align | Flex 交叉轴对齐方式，可选值为 flex-start center flex-end | String | flex-start
| flex-wrap | Flex是否换行，可选值为 nowrap wrap reverse | String | nowrap

### col

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| span | 列元素宽度（共分为24份，例如设置一行3个，那么span值为8） | String、Number | 24
| offset | 列元素偏移距离 | String、Number | 0

