#  heartcurve组件

### 介绍

基于大促商品价格实现的心跳曲线

### 安装

``` javascript
import { createApp } from 'vue';
import { heartcurve } from '@nutui/nutui-cat';

const app = createApp();
app.use(heartcurve);
```

## 代码演示

说明：将心跳曲线按照从上到下的顺序分为 top、centerPrice、bottom 三个部分，其中每个部分按照从左到右的顺序分为 left、center、right 三部分。

### 心跳曲线

通过设置 size 匹配每行商品展示数量，small 对应 一行三或一行多，normal 对应一行二，big 对应一行一。
#### 一行三

```html
<NutRow :gutter="8">
    <NutCol :span="8" v-for="(item, index) in [1,2,3]" :key="index" >
        <nutcat-heartcurve :top='topInfo' :centerPrice='centerPrice' :bottom='bottomInfo' size='small'></nutcat-heartcurve> 
    </NutCol>
</NutRow>
```

```javascript
export default {
    data() {
        return {
            topInfo:{
                center:'预估到手价'
            },
            centerPrice:'99.00',
            bottomInfo:{
                left:'<i class="line">￥99.00</i>',
            }
        };
    },
}
```
一行二
```html
<NutRow :gutter="10">
    <NutCol :span="12" v-for="(item, index) in [1,2]" :key="index">
    <nutcat-heartcurve :top='topInfo' :centerPrice='centerPrice' :bottom='bottomInfo' ></nutcat-heartcurve>  
    </NutCol>
</NutRow>
```

```javascript
export default {
    data() {
        return {
            topInfo:{
                left:'<i class="line">￥99.00</i>',
                right:'即将恢复'
            },
            centerPrice:'999.00',
            bottomInfo:{
                center:'N 天最低价'
            },
        };
    },
}
```

一行一
```html
<nutcat-heartcurve :top='topInfo' :centerPrice='centerPrice' :bottom='bottomInfo' size='big'></nutcat-heartcurve> 
```

```javascript
export default {
    data() {
        return {
            topInfo:{
                center:'N 天最低价'
            },
            centerPrice:'999.00',
            bottomInfo:{
                left:'￥99.00',
                right:'即将恢复'
            },
        };
    },
}
```

### 心跳折线

一行三
```html
<NutRow :gutter="8">
    <NutCol :span="8" v-for="(item, index) in [1,2,3]" :key="index">
        <nutcat-heartcurve :top='topInfo3'  :bottom='bottomInfo3' size='small' type='broken' ></nutcat-heartcurve>  
    </NutCol>
</NutRow>
```

```javascript
export default {
    data() {
        return {
            topInfo3:{
                center:'预售价'
            },
            bottomInfo3:{
                left:'￥99.00',
            },
        };
    },
}
```

一行二
```html
<NutRow :gutter="10">
    <NutCol :span="12" v-for="(item, index) in [1,2]" :key="index">
        <nutcat-heartcurve :top='topInfo'  type='broken'></nutcat-heartcurve>  
    </NutCol>
</NutRow>
```

```javascript
export default {
    data() {
        return {
            topInfo:{
                left:'日常价 <i class="line">￥999.00</i>'
            },
        };
    },
}
```

一行一
```html
<nutcat-heartcurve :top='topInfo5'  size='big' type='broken'></nutcat-heartcurve>  
```

```javascript
export default {
    data() {
        return {
            topInfo:{
                left:'日常价 ￥999.00'
            },
        };
    },
}
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type         | 曲线类型，可选值：bight/broken               | String | bight              |
| size        | 曲线的大小，可选值：small/normal/big                         | String | normal              |
| top         | 设置曲线上部分的内容 | Object | -                |
| centerPrice | 设置曲线内的内容，折线时无效    | Object | - |
| bottom          | 设置曲线下部分的内容                       | Object | -             |

### Slots

| name | 说明           | 
|--------|----------------|
| pTopLeft  |  曲线 上-左 部分的内容|
| pTopCenter  |  曲线 上-中 部分的内容|
| pTopRight  |  曲线 上-右 部分的内容|
| pBottomLeft  |  曲线 下-左 部分的内容|
| pBottomCenter  |  曲线 下-中 部分的内容|
| pBottomRight  |  曲线 下-右 部分的内容|