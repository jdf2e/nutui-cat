# hallnormal4 会场普通类型四

### 适用场景

一行二个会场布局，图片和内容区域左右布局。标题和利益点为两行。


### 代码演示

一行二个会场布局，`col` 传2，`bgColor` 可以设置背景颜色，`tag` 传的是 `tag` 的`type`属性；
`imgWidth` 和 `imgHeight` 设置图片的宽和高。会场的会场名称、图片通过 `data` 的属性传的。



```html
<nutcat-row type="flex" gutter="1">
  <nutcat-col :span="12" v-for="(item, index) in data1" :key="index">
    <nutcat-hall
      :data="[item, params]"
      descRow="2"
      col="2"
      type="normal-4"
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
        name: '品牌闪购',
        desc: '超值单品9.9元全场秒杀',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/179744/8/13403/25121/60e6e815E0ff48c81/eed1256ccd1fdf73.png'
      },
      {
        name: '品牌闪购',
        desc: '超值单品9.9元全场秒杀',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/179744/8/13403/25121/60e6e815E0ff48c81/eed1256ccd1fdf73.png'
      }
    ],
    params: {
      cImage: ['pictureUrl']
    }
  };
}
```


利益点下增加了一个入口 icon，通过参数 `tag` 传递 type 为 `arrow-go` 的 tag 组件


```html
<nutcat-row type="flex" gutter="3">
  <nutcat-col :span="12" v-for="(item, index) in data2" :key="index">
    <nutcat-hall
      :data="[item, params]"
      tag="arrow-go"
      nameColor="#fff"
      descColor="#fff"
      bgColor="#820C00"
      col="2"
      type="normal-4"
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
        name: '品牌闪购',
        desc: '超值单品9.9元全场秒杀',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/179744/8/13403/25121/60e6e815E0ff48c81/eed1256ccd1fdf73.png'
      },
      {
        name: '品牌闪购',
        desc: '超值单品9.9元全场秒杀',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/179744/8/13403/25121/60e6e815E0ff48c81/eed1256ccd1fdf73.png'
      }
    ],
    params: {
      cImage: ['pictureUrl']
    }
  };
}
```

