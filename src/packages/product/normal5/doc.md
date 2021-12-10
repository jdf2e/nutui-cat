# normal-5 商品普通类型五

### 适用场景

带购物车的常规类型，支持一行二个、一行三个、一行三个半等。

## 代码演示

下面是 **normal-5** 类型，一行多个商品布局，商品的名称、图片、价格通过 `data` 的属性传递。


```html
<NutRow  type="flex" gutter="2">
  <nutcat-col :span="8" v-for="(item, index) in data" :key="index">
    <NutProduct
      :data="[item, params]"
      iconType="cart"
      nameRow="2"
      col="3"
      type="normal-5"
    >
      <template slot="preName">
        <NutTag type="618">618</NutTag>
      </template>
    </NutProduct>
  </nutcat-col>
```
```javascript
data() {
  return {
    data: [
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      }
    ],
    params: {
      cDesc: false
    }
  };
}
```

一行二个商品，多用于底部 Feed 流。

```html
<NutRow  type="flex" gutter="3">
  <nutcat-col :span="12" v-for="(item, index) in data" :key="index">
    <NutProduct
      :data="[item, params]"
      iconType="cart"
      name="DYSON戴森吹风机便携家用电吹风负离子智能空调"
      nameRow="2"
      tag="满199减10"
      src="https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png"
      col="2"
      type="normal-5"
    >
      <template slot="preName">
        <NutTag type="618">618</NutTag>
      </template>
      <template slot="priceAfter">
        <NutTag class="price-tag-after" type="plus-price"></NutTag>
      </template>
      <template slot="tag">
        <NutTag class="sub-tag" type="red-light">满199减10</NutTag>
        <NutTag class="sub-tag" type="red-light">利益点利益点</NutTag>
      </template>
    </NutProduct>
  </nutcat-col>
</NutRow>
```

```javascript
data() {
  return {
    data: [
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      }
    ],
    params: {
      cDesc: false
    }
  };
}
```


