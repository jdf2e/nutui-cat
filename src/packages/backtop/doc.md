#  BackTop 回到顶部组件

### 介绍

基于 `nut-backtop` 组件封装，用于较长的页面快捷回到顶部的组件。

### 安装

``` javascript
import { createApp } from 'vue';
import { backtop } from '@nutui/nutui-cat';

const app = createApp();
app.use(backtop);
```

### 基础用法

**出现/隐藏逻辑：**
- 页面滑过2屏，如果用户停止滑动页面，且停止时间超过100ms，则出现回到顶部
- 页面滑过2屏，如果用户继续下滑，直接隐藏回到顶部
- 如果用户往回滑动页面，直接出现回到顶部
- 隐藏导航有一个缓动的效果，持续时间为500ms

**点击逻辑:** 点击后，定位到页面顶部，按钮隐藏

```html
<nutcat-backtop @click="handleClick" el-id="page1">
  <nut-icon size="19px" class="nut-backtop-main" name="top"></nut-icon>
</nutcat-backtop>
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| el-id        | 获取监听元素的父级元素         | String | -                |
| bottom       | 距离页面底部距离              | Number | `20`               |
| right        | 距离页面右侧距离              | Number | `10`                |
| distance     | 页面垂直滚动多高后出现         | Number | `200`                |
| z-index      | 设置组件页面层级              | Number | `10`                |
| is-animation | 是否有动画,和duration参数互斥  | Boolean | true              |
| duration     | 设置动画持续时间              | Number | `1000`              |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: MouseEvent |
