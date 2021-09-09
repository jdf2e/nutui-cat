# fold 心跳折线类型

### 适用场景

心跳折线类型，支持一行一个。

## 代码演示

下面是 **fold** 类型，一行一个商品布局，`col` 传1，一行多个商品布局，商品的名称、图片、价格通过 `data` 的属性传递。


```html
<nutcat-row>
  <nutcat-col :span="24" v-for="(item, index) in data" :key="index">
    <nutcat-product
      :data="[item, params]"
      nameRow="1"
      linePricePre="日常价"
      col="1"
      type="fold"
    >
      <template slot="priceSlot">
        <nutcat-tag class="price-tag-pre" type="red" radius="2px"
          >秒杀</nutcat-tag
        >
        限时优惠价
        <nutcat-price price="1649" class="price" />
      </template>
    </nutcat-product>
  </nutcat-col>
</nutcat-row>
```
```javascript
data() {
  return {
    data: [
      {
        name: 'CAMILA&KORALI限定斜挎包包',
        nameRow: '1',
        linePrice: '2999',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png'
      }
    ],
    params: {
      cDesc: false
    }
  };
}
```
