# Live 直播模块

### 介绍

点击跳转至对应的直播间.

### 安装

``` javascript
import { createApp } from 'vue';
import { Live } from '@nutui/nutui-cat';

const app = createApp();
app.use(Live);
```

## 代码演示

### 基础用法

`Live` 组件是由原子组件组成，例如图片、名称、利益点、标签等。前端在组件设计的结构层面，也把对应区域内容进行划分和插槽预留，每个区域都是一个插槽，可按照实际逻辑进行区域替换。

<br>

### 商品直播 一行一


```html
<nutcat-live col="1" :data="data" type="normal"></nutcat-live>
```

```javascript
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.data = [
      {
        indexImage:
          'https://m.360buyimg.com/livecms/jfs/t1/194940/13/7234/103083/60bf9448E2cc2cd30/9c60153e44bf95aa.jpg!q70.jpg',
        status: 0,
        desc: '测试利益点利益点123',
        title: '测试直播标题直播标题123'
      }
    ]
  }
};
```

### 商品直播 一行二


```html
<nutcat-live col="2" :data="data" type="normal"></nutcat-live>
```

```javascript
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.data = [
      {
        indexImage:
          'https://m.360buyimg.com/livecms/jfs/t1/127818/24/19958/110963/60b47c04E35158ec5/ceb5aa16684fe1fc.jpg!q70.jpg',
        status: 0,
        desc: '利益点123',
        title: '直播标题123'
      },
      {
        indexImage:
          'https://m.360buyimg.com/livecms/jfs/t1/177925/24/6631/79460/60b331d8E6de23759/69e8bf36545c14b6.jpg!q70.jpg',
        status: 1,
        desc: '利益点123',
        title: '直播标题123'
      }
    ]
  }
};
```

### 商品直播 一行三

```html
<nutcat-live col="3" :data="data" type="normal"></nutcat-live>
```

```javascript
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.data = [
      {
        indexImage:
          'https://m.360buyimg.com/livecms/jfs/t1/127818/24/19958/110963/60b47c04E35158ec5/ceb5aa16684fe1fc.jpg!q70.jpg',
        status: 0,
        desc: '利益点123',
        title: '直播标题123'
      },
      {
        indexImage:
          'https://m.360buyimg.com/livecms/jfs/t1/177925/24/6631/79460/60b331d8E6de23759/69e8bf36545c14b6.jpg!q70.jpg',
        status: 1,
        desc: '利益点123',
        title: '直播标题123'
      },
      {
        indexImage:
          'https://m.360buyimg.com/livecms/jfs/t1/177925/24/6631/79460/60b331d8E6de23759/69e8bf36545c14b6.jpg!q70.jpg',
        status: 2,
        desc: '利益点123',
        title: '直播标题123'
      }
    ]
  }
};
```
### 会场直播 一行二 无商品

```html
<nutcat-live col="2" :data="data" type="room-1"></nutcat-live>
```

```javascript
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.data = [
       {
        indexImage:
          'http://img14.360buyimg.com/img/jfs/t1/189882/3/12295/66499/60e6cf2cE57497b7e/7130b52a40d17eb5.png',
        status: 0,
        watchNumber: '24.6W',
        name: '测试直播名称直播名称',
        desc: '测试利益点'
      },
      {
        indexImage:
          'http://img14.360buyimg.com/img/jfs/t1/189882/3/12295/66499/60e6cf2cE57497b7e/7130b52a40d17eb5.png',
        status: 0,
        watchNumber: '24.6W',
        name: '测试直播名称直播名称',
        desc: '测试利益点'
      }
    ]
  }
};
```

### 会场直播 一行二 有商品
```html
<nutcat-live col="2" :data="data" type="room-2"></nutcat-live>
```

```javascript
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.data = [
      {
        indexImage:
          '//img30.360buyimg.com/img/jfs/t1/177384/11/14132/99610/60eea91cE4be56c41/f4e2d8c118b8aa2a.png',
        status: 0,
        watchNumber: '直播中',
        name: '测试直播名称1',
        desc: '测试利益点',
        price: '199',
        sImg: '//img13.360buyimg.com/img/jfs/t1/180070/24/14169/12358/60eea91bE80bd1d30/2b8dd3366043967d.png'
      },
      {
        indexImage:
          '//img30.360buyimg.com/img/jfs/t1/177384/11/14132/99610/60eea91cE4be56c41/f4e2d8c118b8aa2a.png',
        status: 0,
        watchNumber: '直播中',
        name: '测试直播名称2',
        desc: '测试利益点',
        price: '199',
        sImg: '//img13.360buyimg.com/img/jfs/t1/180070/24/14169/12358/60eea91bE80bd1d30/2b8dd3366043967d.png'
      }
    ]
  }
};
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| col         | 单行的个数 | String |`1`         |
| data        | 数据  | Array | `[]`      |
| type         | 类型  | String | `normal`             |



