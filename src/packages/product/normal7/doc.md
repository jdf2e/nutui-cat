# product-normal-6 商品普通类型六

### 适用场景

强化抢购氛围，支持一行二个、一行三个、一行三个半等。


## 代码演示

下面是 **normal-1** 类型，一行多个商品布局，商品的名称、图片、价格通过 `data` 的属性传递。


```html
<div class="demo-product">
  <nutcat-product
    rowType="flex"
    gutter="3"
    :data="[data1, params]"
    nameRow="2"
    pricePre="拼团价"
    col="2"
    type="normal-6"
  >
    <template slot="preName">
      <nutcat-tag type="618">618</nutcat-tag>
    </template>
    <template slot="tag">
      <nutcat-tag class="sub-tag" type="red-pink">闪购进行时</nutcat-tag>
    </template>
  </nutcat-product>
</div>
```
```javascript
data() {
  return {
    data1: [
      {
        name: 'DYSON戴森吹风机吹风机吹风机吹风机吹风机吹风机',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177307/28/13383/31510/60ebf332E30234292/107cc03dce68edec.png'
      },
      {
        name: 'DYSON戴森吹风机吹风机吹风机吹风机吹风机吹风机',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177307/28/13383/31510/60ebf332E30234292/107cc03dce68edec.png'
      },
      {
        name: 'DYSON戴森吹风机吹风机吹风机吹风机吹风机吹风机',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177307/28/13383/31510/60ebf332E30234292/107cc03dce68edec.png'
      }
    ],
    params: {
      cDesc: false
    }
  };
}
```

