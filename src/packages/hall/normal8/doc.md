# hallnormal8 会场普通类型八

### 适用场景

一行多个会场布局，上面是文字下面是图片。文字内容区域增加了 `bgTopColor`、`bgTopUrl` 设置背景颜色和图片，支持一行三个、一行三个半、一行四个等。


### 代码演示

一行四个会场布局，`col` 传4，`imgWidth` 和 `imgHeight` 设置图片的宽和高。会场的会场名称、图片通过 `data` 的属性传的。

```html
<nutcat-row type="flex" gutter="1">
  <nutcat-col :span="6" v-for="(item, index) in data" :key="index">
    <nutcat-hall
      :data="[item, params]"
      imgWidth="65"
      imgHeight="65"
      tag="arrow-go"
      bgTopColor="#820C00"
      col="4"
      type="normal-8"
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
        name: '送年礼',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/183420/22/13214/10541/60e8138cEb3e894b1/04c71eceafa9608d.png'
      },
      {
        name: '送年礼',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/183420/22/13214/10541/60e8138cEb3e894b1/04c71eceafa9608d.png'
      },
      {
        name: '送年礼',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/183420/22/13214/10541/60e8138cEb3e894b1/04c71eceafa9608d.png'
      },
      {
        name: '送年礼',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/183420/22/13214/10541/60e8138cEb3e894b1/04c71eceafa9608d.png'
      }
    ],
    params: {
      cImage: ['pictureUrl']
    }
  };
}
```

