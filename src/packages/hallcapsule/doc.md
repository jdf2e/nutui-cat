#  hallcapsule组件

### 介绍

胶囊词，主要用于热门推荐，可单行或者两行展示，也可以点击“换一批”按钮动态切换。

### 安装

``` javascript
import { createApp } from 'vue';
import { hallcapsule } from '@nutui/nutui-cat';

const app = createApp();
app.use(hallcapsule);
```

## 代码演示

### 两行入口


```html
<nutcat-hallcapsule 
  :lists="lists1"
></nutcat-hallcapsule>
<br />
<nutcat-hallcapsule 
  :lists="partialLists2" 
  :hasChangeBtn="true"
  @change="handleChange"
></nutcat-hallcapsule>
```

```javascript
export default {
  data() {
    return {
        lists1: [
          {
            id:1,
            name: '巴黎欧莱雅'
          },
          {
            id:2,
            name: '超值抢购'
          },
          {
            id:3,
            name: '全球进口1'
          },
          {
            id:4,
            name: '全球进口2'
          },
          {
            id:5,
            name: '全球进口3'
          },
          {
            id:6,
            name: '全球进口4'
          },
          {
            id:7,
            name: '最多五个字'
          }
        ],
        lists2: [
          {
            id:1,
            name: '巴黎欧莱雅巴黎欧莱雅巴黎欧莱雅'
          },
          {
            id:2,
            name: '超值抢购'
          },
          {
            id:3,
            name: '全球进口1'
          },
          {
            id:4,
            name: '全球进口2'
          },
          {
            id:5,
            name: '全球进口3'
          },
          {
            id:6,
            name: '全球进口4'
          },
          {
            id:7,
            name: '全球进口5'
          },
          {
            id:8,
            name: '全球进口6'
          },
          {
            id:9,
            name: '全球进口7'
          },
          {
            id:10,
            name: '全球进口8'
          },
          {
            id:11,
            name: '全球进口9'
          },
          {
            id:12,
            name: '全球进口10'
          }
        ],
        isFirstPartial: true,
        partialLists2: [],
    };
  },
  mounted(){
    this.partialLists2 = this.lists2.slice(0, 6)
  },
  methods: {
      handleChange() {
        this.isFirstPartial = !this.isFirstPartial;
        if(this.isFirstPartial) {
          this.partialLists2 = this.lists2.slice(0, 6)
        } else {
          this.partialLists2 = this.lists2.slice(6)
        }
      }
  }
};
```

### 一行入口


```html
<nutcat-hallcapsule 
  :lists="lists1"
  :lines="1"
></nutcat-hallcapsule>
<br />
<nutcat-hallcapsule 
  :lists="lists1"
  :lines="1"
  :width="90"
></nutcat-hallcapsule>
<br />
<nutcat-hallcapsule 
  :lists="lists3"
  :lines="1"
  :width="90"
></nutcat-hallcapsule>
```

```javascript
export default {
  data() {
    return {
        lists1: [
          {
            id:1,
            name: '巴黎欧莱雅'
          },
          {
            id:2,
            name: '超值抢购'
          },
          {
            id:3,
            name: '全球进口1'
          },
          {
            id:4,
            name: '全球进口2'
          },
          {
            id:5,
            name: '全球进口3'
          },
          {
            id:6,
            name: '全球进口4'
          },
          {
            id:7,
            name: '最多五个字'
          }
        ],
        lists3: [
          {
            id: 1,
            name: '#宅家看电影 >'
          },
          {
            id: 2,
            name: '#宅家看电影'
          },
          {
            id: 3,
            name: '#宅家看电影'
          },
          {
            id: 4,
            name: '#宅家看电影'
          },
          {
            id: 5,
            name: '#宅家看电影'
          },
          {
            id: 6,
            name: '#宅家看电影'
          },
          {
            id: 7,
            name: '#宅家看电影'
          }
        ]
    };
  }
};
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| lists    | 胶囊词数据                   | Array | - |
| hasChangeBtn         | 是否有“换一批”按钮                     | Boolean | false |
| lines         | 行数，可为 1 或 2    | Number | 2 |
| width     | 每个胶囊词的宽度，lines 为 1 时生效    | Number | - |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change  | 点击“换一批”按钮触发的事件，lines 为 2 时生效 | event: Event |

