# hallnormal3 会场普通类型三

### 适用场景

一行二个会场布局，图片和内容区域左右布局。标题和利益点均为一行。


### 代码演示

一行二个会场布局，`col` 传2，`bgColor` 可以设置背景颜色，`tag` 传的是 `tag` 的`type`属性；
`imgWidth` 和 `imgHeight` 设置图片的宽和高。会场的会场名称、图片通过 `data` 的属性传的。



```html
<nutcat-row type="flex" gutter="2">
  <nutcat-col :span="12" v-for="(item, index) in data" :key="index">
    <nutcat-hall
      :data="[item, params]"
      imgWidth="44"
      imgHeight="44"
      col="2"
      type="normal-3"
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
        name: '笔记本电脑',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/178323/16/13057/8574/60e65d04E65aa5608/76469bb0efd62b95.png'
      },
      {
        name: '笔记本电脑',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/178323/16/13057/8574/60e65d04E65aa5608/76469bb0efd62b95.png'
      }
    ],
    params: {
      cName: ['name'],
      cImage: ['pictureUrl'],
    }
  };
}
```

