# hallnormal7 会场普通类型七

### 适用场景

一行多个会场布局，上面是文字下面是图片。支持一行三个、一行三个半、一行四个等。


### 代码演示

一行三个会场布局，`col` 传3，`imgWidth` 和 `imgHeight` 设置图片的宽和高。会场的会场名称、图片通过 `data` 的属性传的。

```html
<NutRow type="flex" gutter="3">
  <nutcat-col :span="8" v-for="(item, index) in data" :key="index">
    <NutHall
      :data="[item, params]"
      imgWidth="57"
      imgHeight="57"
      bgColor="#820C00"
      col="3"
      type="normal-7"
    >
    </NutHall>
  </nutcat-col>
</NutRow>
```

```javascript
data() {
  return {
    data: [
      {
        name: '送年礼',
        desc: '利益点利益点',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/176226/22/18823/6108/60e7e90bEf67e7fe8/742b068cd54aaf66.png'
      },
      {
        name: '送年礼',
        desc: '利益点利益点',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/176226/22/18823/6108/60e7e90bEf67e7fe8/742b068cd54aaf66.png'
      },
      {
        name: '送年礼',
        desc: '利益点利益点',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/176226/22/18823/6108/60e7e90bEf67e7fe8/742b068cd54aaf66.png'
      }
    ],
    params: {
      cImage: ['pictureUrl']
    }
  };
}
```


