#  Bottom 底部导航组件

### 介绍

底部导航组件，点击跳转至相应的页面。

### 安装

``` javascript
import { createApp } from 'vue';
import { Bottom } from '@nutui/nutui-cat';

const app = createApp();
app.use(Bottom);
```

## 代码演示

### 基础用法

跳转逻辑：点击跳转至相应的页面

交互逻辑：当页面滑过第三屏时，中间按钮部分变更为“返回顶部”

<!-- 出现/隐藏逻辑：（可选逻辑，根据需要选择是否隐藏，如选择隐藏，则需要沟通前端不断轻量化逻辑，以提高对各机型的适配度，调优时间逻辑）：
- 页面滑动时，不展示底部导航；如果用户停止滑动页面，且停止时间超过50ms，则出现导航
- 如果用户往回滑动页面，直接出现导航
- 隐藏导航有一个缓动的效果，持续时间为300ms -->

```html
<nutcat-bottom :data="data1" el-id="page1" activeName="年货攻略" @onClick="handClick" @backTop="backTop"></nutcat-bottom>
```

``` javascript
this.data1 = [
  {
    pictureUrl:
      '//m.360buyimg.com/babel/s150x150_jfs/t1/156603/27/5710/22920/5ffe65eeEacf97f00/f580e2d1862cb2d6.png',
    name: '主会场',
    comments: [
      'https://img14.360buyimg.com/imagetools/jfs/t1/159079/25/3113/17414/5ffe6607Ec8ed3a1e/8a6ef7e5d879abe8.png'
    ],
    link:
      '//h5.m.jd.com/babelDiy/Zeus/3xkqxo2L3ZqV66nYTFjuVp4Yt7tG/index.html?babelChannel=ttt18'
  },
  {
    pictureUrl:
      '//m.360buyimg.com/babel/s150x150_jfs/t1/156765/16/5783/19735/5ffe66ffE870f6044/2d16b5455d1a487f.png',
    name: '全城购',
    comments: [
      'https://img11.360buyimg.com/imagetools/jfs/t1/148156/9/11398/5901/5f8dbb27Ed532c469/2e1dfbd502cd1f8c.png'
    ],
    link: '//m.jd.com'
  },
  {
    pictureUrl:
      '//m.360buyimg.com/babel/s150x150_jfs/t1/157710/37/2992/20360/5ffe6685E34992da7/731fb335a8b33e2d.png',
    name: '源头好物',
    comments: [
      'https://img10.360buyimg.com/imagetools/jfs/t1/160087/12/3066/14877/5ffe6607E476e43dd/b9589e39aa85bcea.png'
    ],
    link:
      '//h5.m.jd.com/babelDiy/Zeus/3hhgqjj5rLjZFbi8UtaD2uex21ky/index.html?babelChannel=ttt11'
  },
  {
    pictureUrl:
      '//m.360buyimg.com/babel/s150x150_jfs/t1/157750/29/3168/19560/5ffe66bbE8130b148/a3ad8220120ca22f.png',
    name: '年货攻略',
    comments: [
      'https://img11.360buyimg.com/imagetools/jfs/t1/168245/19/2372/14914/5ffe6606E150120e6/c22632590ee8b847.png'
    ],
    link:
      '//h5.m.jd.com/babelDiy/Zeus/fd5vHS8CxSjGvLKDsSFz2GiTpMN/index.html?babelChannel=ttt8'
  },
  {
    pictureUrl:
      '//m.360buyimg.com/babel/s150x150_jfs/t1/152400/25/14556/20330/5ffe665bE883a3d1d/84a99c5fe1882001.png',
    name: '头号爆品',
    comments: [
      'https://img11.360buyimg.com/imagetools/jfs/t1/155240/3/14336/14706/5ffe6607Ef2833091/641a6fdfd307df43.png'
    ],
    link:
      '//h5.m.jd.com/babelDiy/Zeus/4VA9nehqw3ZijJHLDAsGoXy6jQ5m/index.html?babelChannel=ttt1'
  }
];
```



## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| el-id        | 获取监听元素的父级元素 | String | - |
| data         | 导航的展示项，如果是空数组，导航栏不会展示 | Array | [] |
| height       | 导航的高度      | String  | `50px` |
| screenNum    | 滑过屏幕页数出现返回顶部    | Number  | 3 |
| bgUrl        | 导航每个图标默认态的图片      | String   | -   |
| activeBgUrl  | 导航每个图标选中态的图片      | String | - |
| activeName   | 默认选中图标的key值           | String | - |
| backTopImg   | 返回顶部的图片        | String | - |

<!-- | bgColor      | 导航每个项目的背景颜色      | String   | -   | -->



### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onClick  | 点击导航触发 | event: Event |
| backTop  | 点击回到顶部触发 | event: Event |
    