# normal3 商品普通类型三

### 适用场景

一行一个商品布局，左右结构。适用于秒杀限量商品，去抢购的进度条显示剩余库存量比例。

<!-- <p class="type"
      >2. 秒杀未开始时，按键显示“提醒我”，点击后，变为“已提醒”；</p
    > -->

## 代码演示

下面是 **normal-3** 类型，一行一个商品布局，`col` 传1，商品名称前的标签通过 `preName` 插槽传入，利益点标签通过 `tag`插槽传入 。
商品的名称、图片、价格通过 `data` 的属性传的。


```html
<NutProduct :data="[data, params]" col="1" type="normal-3">
  <template slot="tag">
    <NutTag class="sub-tag" type="red-pink">限量5000件</NutTag>
    <NutTag class="sub-tag" type="red-pink">限量5000件</NutTag>
  </template>
  <template slot="priceSlot">
    <NutTag class="price-tag-pre" type="red" radius="2px"
      >秒杀</NutTag
    >
    <NutPrice price="1649" class="price" />
  </template>
  <NutTag class="top-tag tl" type="red-gradient"
    >全年历史最低价</NutTag
  >
</NutProduct>
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
