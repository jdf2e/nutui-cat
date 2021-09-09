# Nav 锚点导航组件

### 介绍

会场的锚点导航
吸顶逻辑：当页面滑过锚点的楼层时吸顶，导航变为吸顶态
滑动逻辑：支持左右滑动

### 安装

``` javascript
import { createApp } from 'vue';
import { Nav } from '@nutui/nutui-cat';

const app = createApp();
app.use(Nav);
```

## 代码演示

### 导航类型

锚点吸顶导航

```html
<nutcat-nav
  :options="stickyOptions"
  @click="clickHandler"
  @changed="onchange"
  @expand="expand"
  @sendReq="sendReq"
/>
```

``` javascript
export default {
  data() {
    return {
      stickyOptions: {
        navs: [
          '今日优惠',
          '热门活动',
          '拼购',
          '大牌服饰',
          '猜你想看',
          '6F',
          '7F'
        ],
        sectionSelector: 'nav-floor',
        stickyTop: 57,
        showLbs: true,
        showButton: true
      }
    };
  },
  methods: {
    onchange(index) {
      console.log('onchange', index);
    },
    expand(state) {
      console.log('expand', index);
    },
    clickHandler(index) {
      console.log('clickHandler', index);
    }
  }
};
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| options         | 导航栏中的展示项，如果是空数组，导航栏不会展示 | Object | {} |
| type         | 导航栏的类型，默认水平方向的锚点导航，设置为`left`，可固定在页面左侧 | String | - |


### Options

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| navs            | options的属性，导航栏的标题 | Array | [] |
| title           | 导航栏展开面板上的标题      | String  | 请选择分类 |
| sectionSelector | 导航栏对应楼层的class名    | String  | `nav-floor` |
| stickyTop       | 导航栏距离吸顶的top值      | String   | -1   |
| disabled        | 导航栏是否禁止开启吸顶      | Boolean | false |
| showLbs         | 是否显示定位icon          | Boolean | false |
| showButton      | 是否显示展开按钮           | Boolean | false |
| scrollAnimate   | 导航滚动是否使用动画        | Boolean | true |
| scrollShow      | 导航栏是否开启吸顶          | Boolean | false |
| scrollDownHide  | 向下滚不显示               | Boolean | false |
| zIndex          | 导航栏的z-index           | String   | 1001 | 
| icon         | 导航栏中选中项前面的icon类型 | String | 'lbs' |
| navWidth             | 导航栏宽度，用于左侧导航 | String | - |
| navHeight       | 导航栏高度   | String | - |
| navItemHeight           | 导航栏每个子元素的高度，用于左侧导航  | String | - |
| fontSize       | 导航栏文字字号 | String | - |
| color             | 导航栏文字颜色 | String | - |
| activeColor       | 导航栏当前选项的文字颜色   | String | - |
| bgColor           | 导航栏背景颜色  | String | - |
| activeBgColor     | 导航栏当前选项的背景颜色    | String | - |
| expendTitleColor     | 导航栏展开面板的背景颜色     | String | - |
| expandColor       | 展开面板的文字颜色 | String | - |
| expandActiveColor | 展开面板当前选项的文字颜色    | String | - |
| expandBgColor     | 导航栏展开面板的背景颜色     | String | - |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click    | 点击导航栏标题时触发         | event: Event |
| changed  | 楼层切换时触发的回调函数 | event: Event |
| expand   | 点击展开按钮时触发 | event: Event |



