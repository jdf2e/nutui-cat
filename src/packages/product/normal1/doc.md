# normal1 商品普通类型一

### 适用场景

一行多个店铺布局，上下结构，支持一行三个、一行三个半、一行四个等。

## 代码演示

下面是 **normal-1** 类型，一行一个商品布局，`col` 传1，利益点标签通过 `tag`插槽传入 。
商品的名称、图片、价格通过 `data` 的属性传的。


```html
<NutProduct :data="[data1, params]" col="1" type="normal-1" nameRow="1">
  <template slot="preName">
    <NutTag type="618">618</NutTag>
  </template>
  <template slot="tag">
    <NutTag class="sub-tag" type="red-pink">利益点利益点</NutTag>
    <NutTag class="sub-tag" type="red-pink">利益点利益点</NutTag>
  </template>
</NutProduct>
```
```javascript
this.data1 = [
  {
    name: 'CAMILA&KORALI限定斜挎包包',
    desc: '更多买点更多买点',
    linePrice: '2999',
    price: '1999',
    src:
      'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
  }
];
```
下面的demo增加氛围图、标签、抢购按钮。

`bgUrl` 可以设置背景图，抢购按钮通过 `tag` 传 `qiang` 显示，抢购；左上角标签通过 `slot`传入。

```html
<NutProduct
  :data="data2"
  col="1"
  tag="qiang"
  type="normal-1"
  bgUrl="//img10.360buyimg.com/imagetools/jfs/t1/6090/8/11750/133338/60c09116E0c991a9f/cfe358af6388e40f.png"
>
  <template slot="tag">
    <NutTag class="sub-tag" type="red-pink">277天最低价</NutTag>
    <NutTag class="sub-tag" type="red-pink">放心购标签</NutTag>
  </template>
  <NutTag class="top-tag tl" type="fire">某某商品top款</NutTag>
</NutProduct>
```

```javascript
this.data2 = [
  {
    name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',
    nameRow: '2',
    tag: '源头好物',
    pricePre: '狂欢价',
    linePrice: '2999',
    price: '1999',
    src:
      'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
  }
];
```
