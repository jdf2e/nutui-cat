# normal2 商品普通类型二

### 适用场景

一行一个商品布局，左右结构。与 normal-1 的区别在于利益点、划线价的顺序结构有所调整。

## 代码演示

下面是 **normal-2** 类型，一行一个商品布局，`col` 传1，商品名称前的标签通过 `preName` 插槽传入，利益点标签通过 `tag`插槽传入 。
商品的名称、图片、价格通过 `data` 的属性传的。


```html
<nutcat-product :data="[data1, params]" col="1" type="normal-2" nameRow="1" linePricePre="日常价">
  <template slot="priceSlot">
    <nutcat-tag class="price-tag-pre" type="red" radius="2px"
      >秒杀</nutcat-tag
    >
    预估到手价
    <nutcat-price price="1649" class="price" />
  </template>
  <template slot="tag">
    <nutcat-tag class="sub-tag" type="red-light"
      >利益点利益点利益点</nutcat-tag
    >
    <nutcat-tag class="sub-tag" type="red-light"
      >利益点利益点利益点</nutcat-tag
    >
  </template>
</nutcat-product>
```
```javascript
data() {
  return {
    data: [
      {
        name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',
        nameRow: '1',
        tag: '源头好物',
        linePrice: '4999',
        image:
          'https://img12.360buyimg.com/imagetools/jfs/t1/185218/3/12954/50806/60ead6b5E2716e7ee/d51415655b04ad48.png'
      }
    ],
    params: {
      cDesc: false
    }
  };
}
```

