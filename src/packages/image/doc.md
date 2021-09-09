# Image 图片组件

### 介绍

图片组件，是显示图像的组件，提供了懒加载、裁剪图像等功能

### 安装

``` javascript
import { createApp } from 'vue';
import { Image } from '@nutui/nutui-cat';

const app = createApp();
app.use(Image);
```

## 代码演示

### 基础用法

```html
<nutcat-image 
  src="//img10.360buyimg.com/imagetools/jfs/t1/180975/16/12965/81810/60e3c271E6846510d/b957175211011d62.png">
</nutcat-image>
```

`width`、`height` 可以设置图片的尺寸，如果加上`cut`返回的图片会被裁剪成设置的宽和高；
`lazy`可以设置图片懒加载。

```html
<nutcat-image
  src="//img14.360buyimg.com/imagetools/jfs/t1/136318/2/17914/253972/5fbcb355E73dd171e/7afebc86dec494e4.png"
  width="180"
  height="180"
  cut
></nutcat-image>
```

`radius` 可以设置图片的圆角，`lazy`可以设置图片懒加载。

```html
<nutcat-image
  src="//img14.360buyimg.com/imagetools/jfs/t1/136318/2/17914/253972/5fbcb355E73dd171e/7afebc86dec494e4.png"
  radius="16"
  lazy
></nutcat-image>
```

## API

### Props

| 参数         | 说明                  | 类型   | 默认值     |
|--------------|----------------------|--------|----------|
| src        | 图片地址   | String | -    |
| width      | 宽度       | String | -    |
| height     | 高度       | String | -    |
| radius     | 圆角       | String | -    |
| cut        | 是否裁剪图片 | Boolean | false |
| lazy       | 是否懒加载   | Boolean | false |

<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: Event | -->

