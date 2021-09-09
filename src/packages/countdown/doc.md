#  countdown 组件

### 介绍

用于倒计时场景。基于 NutUI 中的 CountDown 组件实现，可以参照 NutUI 官网 API

### 安装

```javascript
import { createApp } from 'vue';
import { CountDown } from '@nutui/nutui-cat';

const app = createApp();
app.use(CountDown);
```

## 代码演示

### 基础用法

```html
<nut-countdown :endTime="endTime" showDays ></nut-countdown>
```
```javascript
data() {
    return {
        resetTime: {d: '1',h: '00', m: '00',s: '00'},
        endTime: Date.now() + 100000 * 1000
    };
},
```

### 自定义展示

```html
<nutcat-countdown :endTime="endTime" v-model="resetTime" >
    <div class="countdown-part-box">
        <div class="part-item-symbol"> resetTime.d 天</div>
        <div class="part-item h">resetTime.h </div>
        <span class="part-item-symbol">:</span>
        <div class="part-item m">resetTime.m </div>
        <span class="part-item-symbol">:</span>
        <div class="part-item s">resetTime.s</div>
    </div>
</nutcat-countdown>
```

```css
.countdown-part-box{
    display: flex;
    align-items: center;

    .part-item{
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 25px;
        background: #E8220E;
        color: #fff;
        font-size: 14px;
        border-radius: 6px;
    }

    .part-item-symbol{
        margin: 0 5px;
    }
}
```
```javascript
data() {
    return {
        resetTime: {d: '1',h: '00', m: '00',s: '00'},
        endTime: Date.now() + 100000 * 1000
    };
},
```



## API

基于 NutUI 中的 CountDown 组件实现，可以参照 NutUI 官网 API
