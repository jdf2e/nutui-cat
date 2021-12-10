# normal-6 商品普通类型六

### 适用场景

强化抢购氛围，支持一行二个、一行三个、一行三个半等。


## 代码演示

下面是 **normal-6** 类型，一行多个商品布局，商品的名称、图片、价格通过 `data` 的属性传递。


```html
<NutRow type="flex" gutter="3">
  <nutcat-col :span="12" v-for="(item, index) in data" :key="index">
    <NutProduct
      :data="[item, params]"
      nameRow="2"
      pricePre="拼团价"
      col="2"
      type="normal-6"
    >
      <template slot="preName">
        <NutTag type="618">618</NutTag>
      </template>
      <template slot="tag">
        <NutTag class="sub-tag" type="red-pink">闪购进行时</NutTag>
      </template>
    </NutProduct>
  </nutcat-col>
</NutRow>
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

