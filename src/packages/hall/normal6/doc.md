# hallnormal6 会场普通类型六

### 适用场景

一行多个会场布局，氛围图和内容区域上下布局。支持一行三个、一行三个半、一行四个等。


### 代码演示

一行三个会场布局，`col` 传3，`imgWidth` 和 `imgHeight` 设置图片的宽和高。会场的会场名称、图片通过 `data` 的属性传的。



```html
<nutcat-row type="flex" gutter="3">
  <nutcat-col :span="8" v-for="(item, index) in data" :key="index">
    <nutcat-hall
      :data="[item, params]"
      imgWidth="117"
      imgHeight="105"
      src="https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png"
      name="会场名称"
      desc="满199减100"
      col="3"
      type="normal-6"
    >
    </nutcat-hall>
  </nutcat-col>
</nutcat-row>
```

```javascript
data() {
  return {
    data: [
      {
        name: '京东金融',
        desc: '年化收益5.79%',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/175919/15/18891/90769/60e7c21dEc599b5f9/ba959baad7533732.png'
      },
      {
        name: '京东金融',
        desc: '年化收益5.79%',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/175919/15/18891/90769/60e7c21dEc599b5f9/ba959baad7533732.png'
      },
      {
        name: '京东金融',
        desc: '年化收益5.79%',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/175919/15/18891/90769/60e7c21dEc599b5f9/ba959baad7533732.png'
      }
    ],
    params: {
      cImage: ['pictureUrl']
    }
  };
}
```


<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: Event | -->

