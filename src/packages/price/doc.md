# price组件

### 介绍

常见的价格展示标签。

### 安装

``` javascript
import { createApp } from 'vue';
import { Price } from '@nutui/nutui-cat';

const app = createApp();
app.use(Price);
```

## 代码演示

### 基础用法

默认支持整数，小数展示（小数点位数默认根据传入值展示）。同时支持单位切换。

#### 基础样式-整数
```html
 <NutPrice :price="888" :prop-class="'myPrice'" :need-symbol="false"></NutPrice>
```
#### 基础样式-小数
```html
 <NutPrice :price="888.88"  :need-symbol="false"></NutPrice>
```
#### 基础样式-小数(整数为0)
```html
  <NutPrice :price="0.89"  :need-symbol="false"></NutPrice>
```
#### 单位展示
```html
  <NutPrice :price="888.88" :need-symbol="true" symbol="$"></NutPrice>
```

### 控制小数点位数

使用 `decimal-digits`控制小数位数。使用`rounding`控制是否四舍五入

```html
 <NutPrice :price="888.88" :decimal-digits="0" :rounding="false" ></NutPrice>
 <NutPrice :price="888.88" :decimal-digits="0" :rounding="true" ></NutPrice>
 <NutPrice :price="666.66666" :decimal-digits="2" :rounding="false" ></NutPrice>
  <NutPrice :price="6666.6666" :decimal-digits="2" :rounding="true" ></NutPrice>
```

### 千位分割

使用`thousands`控制是否千位分割展示

```html
  <NutPrice :price="123456.88" :thousands="true"></NutPrice>
```

### 异步展示案例


```html
   <NutPrice :price="price" :thousands="true" :decimal-digits="2" ></NutPrice>

   export default ({
    props: {},
    data() {
      return {
        price:""
      };
    },
    mounted(){
      setInterval(() => {
      this.price = Math.random() * 10000000;
    }, 2000);
    }
  });
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| price       | 价格信息 | String|Number |-     |
| need-symbol     | 是否需要加上 symbol 符号    | Boolean |  true    |
| symbol      |符号类型| String | ¥  |
| decimal-digits| 	小数点位数  | Number | -  |
| thousands    | 是否按照千分号形式显示     | Boolean |  false  |
| rounding | 是否支持四舍五入 | Boolean   |  false |
| propClass  | 自定义传入css类  | String | - |

<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: Event | -->

