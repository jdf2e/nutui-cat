# feed-shop 商品+店铺类型

### 适用场景

商品+店铺类型，多用于底部 Feed 流。

## 代码演示

下面是 **feed-shop** 类型，一行多个商品布局，商品的名称、图片、价格通过 `data` 的属性传递。


```html
<nutcat-row type="flex" gutter="3">
  <nutcat-col :span="12" v-for="(item, index) in data" :key="index">
    <nutcat-product
      :data="[item, params]"
      tag="满199减10"
      linePricePre="日常价"
      col="2"
      type="feed-shop"
    >
      <template slot="preName">
        <nutcat-tag type="618">618</nutcat-tag>
      </template>
      <template slot="priceAfter">
        <nutcat-tag class="price-tag-after" type="plus-price"></nutcat-tag>
      </template>
      <template slot="shop">
        <nutcat-text class="shop-name">店铺名称</nutcat-text>
        <nutcat-text class="shop-desc"
          >接受预定，明日23:00开始营业</nutcat-text
        >
      </template>
      <nutcat-tag class="tl9" type="lbs">1.3km</nutcat-tag>
    </nutcat-product>
  </nutcat-col>
</nutcat-row>
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
}
```