# normal-1 榜单普通类型一

### 适用场景

一行一个榜单布局，左边文字区域，右边区域是榜单区域。

## 代码演示

下面是 **normal-1** 类型，一行一个榜单布局，`col` 传1，榜单的名称、图片、价格通过 `data` 的属性传入，右边的商品通过 `productData` 的属性传入。

```html
<div class="demo-rank">
  <NutRank
    :data="[data1, params1]" 
    :productData="[productData2, params2]" 
    col="1" 
    type="normal-1" 
    bgColor="#820C00"
  >
  </NutRank>
</div>
<div class="demo-rank">
  <NutRank
    :data="[data1, params1]" 
    :productData="[productData3, params2]" 
    col="1" 
    type="normal-1" 
    tag="rank-1"
    bgColor="#820C00"
  >
  </NutRank>
</div>
```
```javascript
data() {
  return {
    params1: {
      cName: ['name'],
      cDesc: ['desc', 'extension.shopInfo.desc', '"火爆热卖中"'],
      cImage: ['pictureUrl'],
    },
    params2: {
      cName: ['name'],
      cDesc: ['desc', 'extension.shopInfo.desc', '"火爆热卖中"'],
      cImage: ['image'],
    },
    data1: [
      {
        name: '榜单标题',
        desc: '清单描述文案文案描述',
      }
    ],
    productData1: [
      {
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
      },
      {
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
      }
    ],
    productData2: [
      {
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
      },
      {
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
      },
      {
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
      }
    ]
  };
}
```