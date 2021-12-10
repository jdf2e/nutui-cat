# normal1 店铺普通类型一

### 适用场景

一行一个店铺布局，由品牌logo+文字+进入标签组成。适合短利益点。

### 代码演示

一行多个店铺布局，`col` 传1，`bgColor` 可以设置背景颜色，`tag` 传的是 tag 组件的 `type` 属性；店铺的店铺名称、图片通过 `data` 的属性传的。



```html
<NutShop
  :data="[data, params]" 
  col="1" 
  type="normal-1" 
  tag="GO"
  nameRow="1"
  bgColor="#820C00"
>
</NutShop>
```

```javascript
data() {
  return {
    params: {
      cLogo: ['logoUrl']
    },
    data: [
      {
        name: '品牌店铺名称',
        desc: '利益点满399减300',
        logoUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/179875/7/12879/6873/60e3c269E34d46a04/676b02596f2e9ceb.png'
      }
    ]
  };
}
```


