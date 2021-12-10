#  NoticeBar 组件

### 介绍

用于纵向文字滚动展示。基于 NutUI 中 NoticeBar 组件实现，可参考 NoticeBar 组件 API

### 安装

``` javascript
import { createApp } from 'vue';
import { NoticeBar } from '@nutui/nutui-cat';

const app = createApp();
app.use(NoticeBar);
```

## 代码演示

### 基础用法

```html
<div class="interstroll-list">
    <NutNoticebar direction="vertical" :list="horseLamp1" :speed='10' :standTime='1000' :showIcon='true' @go='go' color='#14100D' background='transparent'></NutNoticebar>
</div>
```
```javascript
data() {
    return {
        horseLamp1: ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆'],
    };
},

methods:{
    go(item){
        console.log(item)
    }
}
```


### 复杂滚动动画

```html
<div class="interstroll-list">
    <NutNoticebar direction="vertical" :list="horseLamp2" :speed='10' :standTime='2000' :complexAm='true' color='#14100D' background='transparent'></NutNoticebar>
</div>
```
```javascript
data() {
    return {
        horseLamp2: ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆'],
    };
},
methods:{
    go(item){
        console.log(item)
    }
}
```

### 自定义滚动内容

```html
<div class="interstroll-list">
    <NutNoticebar direction="vertical" :height='50' :speed='10' :standTime='1000' :list="[]" :showIcon='true'  @goIcon='go' color='#14100D' background='transparent'>
        <div class="custom-item" :data-index='index' v-for="(item,index) in horseLamp3" :key="index"></div>
    </NutNoticebar>
</div>
```

```javascript
data() {
    return {
        horseLamp3: ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆'],
    };
}
```


### 自定义右侧标识

```html
<div class="interstroll-list">
    <NutNoticebar direction="vertical" :list="horseLamp1" :speed='10' :standTime='1000' :showIcon='true' color='#14100D' background='transparent'>
        <template v-slot:rightIcon>
          <NutIcon style="font-size: 20px;" color="#F02B2B" type="qiang"></NutIcon>
        </template>
    </NutNoticebar>
</div>
```
```javascript
data() {
    return {
        horseLamp1: ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆'],
    };
}
```



## API

基于 NutUI 中 NoticeBar 组件实现，可参考 NoticeBar 组件 API。
    