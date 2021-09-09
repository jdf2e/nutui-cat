# feed1 店铺feed类型一

### 适用场景

一行多个店铺布局，上下结构，支持一行两个。

### 代码演示

一行两个店铺布局，`col` 传2，店铺的店铺名称、图片通过 `data` 的属性传的。

```html
<nutcat-row scrollX type="flex" gutter="3">
    <nutcat-col :span="12" v-for="(item, index) in data" :key="index">
    <nutcat-shop
      :data="[item, params]" 
      tag="arrow-go"
      col="2" 
      type="feed-1" 
    >
      <nutcat-tag slot="tag" class="sub-tag" type="red-light"
      >满199减100</nutcat-tag>
    </nutcat-shop>
  </nutcat-col>
</nutcat-row>
```

```javascript
data() {
  return {
    data: [
      {
        name: 'XXX自营旗舰店',
        desc: '利益点/运营语',
        price: '199',
        logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/173910/14/18452/4865/60e3c11dEe24a049b/60e1e1ed280b56ac.png',
        pictureUrl: '//m.360buyimg.com/babel/s354x354_jfs/t1/169633/21/20537/104213/60821d78E618f6f68/3446b6abe26a05ce.jpg!q50.jpg'
      }, {
        name: '旗舰店',
        desc: '利益点/运营语',
        price: '199',
        logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/173910/14/18452/4865/60e3c11dEe24a049b/60e1e1ed280b56ac.png',
        pictureUrl: '//m.360buyimg.com/babel/s354x354_jfs/t1/169633/21/20537/104213/60821d78E618f6f68/3446b6abe26a05ce.jpg!q50.jpg'
      }
    ],
    params: {
      cLogo: ['logoUrl'],
      cImage: ['pictureUrl']
    }
  };
}
```


<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: Event | -->

