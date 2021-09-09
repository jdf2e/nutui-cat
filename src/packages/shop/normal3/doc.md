# hallnormal3 店铺普通类型三

### 适用场景

一行二个店铺布局，左右结构，左边图片，右边文字区域。


### 代码演示

一行多个店铺布局，`col` 传1，`bgColor` 可以设置背景颜色，`tag` 传的是 `tag` 的`type`属性；店铺的店铺名称、图片通过 `data` 的属性传的。



```html
<nutcat-row type="flex" gutter="1">
  <nutcat-col :span="12" v-for="(item, index) in data" :key="index">
    <nutcat-shop
      :data="[item, params]" 
      col="2" 
      type="normal-3" 
    >
    </nutcat-shop>
  </nutcat-col>
</nutcat-row>
```

```javascript
data() {
  return {
    data: [
      {
        name: '资生堂进口专卖',
        desc: '单品69元起',
        logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/177426/30/12870/5564/60e3b907Efe15e7c1/b3c982266b83c546.png'
      }, {
        name: '资生堂进口专卖',
        desc: '单品69元起',
        logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/177426/30/12870/5564/60e3b907Efe15e7c1/b3c982266b83c546.png'
      }
    ],
    params: {
      cLogo: ['logoUrl']
    }
  };
}
```

