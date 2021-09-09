# followswipe 跟随滚动

### 介绍

适用于需要互相跟随滑动的场景。

### 安装

``` javascript
import { createApp } from 'vue';
import { followswipe } from '@nutui/nutui-cat';

const app = createApp();
app.use(followswipe);
```

## 代码演示

### 按钮类型

```html
<nut-followswipe :value="value" />
```

```javascript
export default {
  data() {
    return {
      value: []
    };
  },
  mounted() {
    this.value = [
      {
        advertId: '1',
        sImg:
          '//m.360buyimg.com/babel/s195x195_jfs/t1/183811/32/5158/55272/60a65f2dE8906515f/2013e07d9e36e0b8.png',
        bImg:
          'https://img12.360buyimg.com/applylogo/jfs/t1/186387/32/4216/116652/60a6529dEa7dd688b/53412bc55e857497.jpg.dpg'
      },
      {
        advertId: '2',
        sImg:
          '//m.360buyimg.com/babel/s195x195_jfs/t1/177851/22/6980/58562/60b59886Eb733e6ea/196faacffe101c0f.png',
        bImg:
          'https://m.360buyimg.com/babel/jfs/t1/172137/33/12432/237986/60b59c5dEd516846f/61eabd0c814718d9.jpg'
      },
      {
        advertId: '3',
        sImg:
          '//m.360buyimg.com/babel/s195x195_jfs/t1/174309/3/11576/41084/60afa577Eaf4f60cf/4d409269228fd0ae.png',
        bImg:
          'https://img12.360buyimg.com/applylogo/jfs/t1/182474/19/5711/252947/60ab96d8Eb559acad/a894766a745646a3.jpg'
      },
      {
        advertId: '4',
        sImg:
          '//m.360buyimg.com/babel/s195x195_jfs/t1/193401/17/5859/48370/60b4869dEe5d14002/828ce90afd07a674.png',
        bImg:
          'https://img12.360buyimg.com/applylogo/jfs/t1/172658/13/11282/253784/60ab4b1fE68214e48/84811cfbdbf290ee.jpg'
      },
      {
        advertId: '5',
        sImg:
          '//m.360buyimg.com/babel/s195x195_jfs/t1/180135/2/5747/11512/60ab587bE82eac72a/cb353787d9aa8fc6.png',
        bImg:
          'https://img14.360buyimg.com/applylogo/jfs/t1/184372/15/5702/304483/60ab30b6E6e5386cc/03120eb024d7c3b2.jpg'
      }
    ];
  }
};
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| value         | 模块数据 | Array |`[]`         |


