# lbs 会场LBS类型

### 适用场景

一行多个店铺布局，上下结构，适用于 lbs 场景。支持一行二个、一行三个、一行三个半、一行四个等。


### 代码演示

会场的会场名称、图片通过 `data` 的属性传的。距离是用 `cDistance` 配置。

```html
<NutRow scrollX type="flex" gutter="3">
  <NutCol :span="24" v-for="(item, index) in data" :key="index">
    <NutShop
      :data="[item, params]" 
      col="3" 
      type="lbs" 
    >
      <NutTag slot="tag" class="sub-tag" type="red-light"
      >满199减100</NutTag>
    </NutShop>
  </NutCol>
</NutRow>
```

```javascript
data() {
  return {
    data: [
      {
        name: '奈雪的茶（宝安店）',
        distance: '2.3km',
        desc: '全场5折起',
        pictureUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/180880/27/12966/49968/60e5716aE5ea88e4a/d8dcf8a43eec9dbe.png'
      }, {
        name: '奈雪的茶（宝安店）',
        distance: '2.3km',
        pictureUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/180880/27/12966/49968/60e5716aE5ea88e4a/d8dcf8a43eec9dbe.png'
      }, {
        name: '奈雪的茶（宝安店）',
        distance: '2.3km',
        pictureUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/180880/27/12966/49968/60e5716aE5ea88e4a/d8dcf8a43eec9dbe.png'
      }
    ],
    params: {
      cDistance: ['distance'],
      cImage: ['pictureUrl']
    }
  };
}
```


<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: Event | -->

