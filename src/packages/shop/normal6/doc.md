# hallnormal6 店铺普通类型六

### 适用场景

一行多个店铺布局，上下结构，支持一行三个、一行三个半、一行四个等。


### 代码演示

一行多个店铺布局，`col` 传对应的列数，店铺的店铺名称、图片通过 `data` 的属性传的。

```html
<nutcat-row scrollX type="flex" gutter="1">
  <nutcat-col :span="8" v-for="(item, index) in data" :key="index">
    <nutcat-shop
      :data="[item, {
          cLogo: false,
          cImage: ['pictureUrl']
        }]" 
      col="3" 
      type="normal-6" 
    >
    </nutcat-shop>
  </nutcat-col>
</nutcat-row>
```

```javascript
data() {
  return {
    data: [
      {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/173974/21/18150/32309/60e3bc10E3df14e94/1b62f83797a76dfe.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/173974/21/18150/32309/60e3bc10E3df14e94/1b62f83797a76dfe.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/173974/21/18150/32309/60e3bc10E3df14e94/1b62f83797a76dfe.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/173974/21/18150/32309/60e3bc10E3df14e94/1b62f83797a76dfe.png'
      }
    ]
  };
}
```


<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: Event | -->

