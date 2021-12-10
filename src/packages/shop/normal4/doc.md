# hallnormal4 店铺普通类型四

### 适用场景

一行多个店铺布局，上下结构，支持一行三个、一行三个半、一行四个等。


### 代码演示

一行多个店铺布局，`col` 传对应的列数，店铺的店铺名称、图片通过 `data` 的属性传的。

```html
<NutRow type="flex" gutter="2">
  <nutcat-col :span="8" v-for="(item, index) in data1" :key="index">
    <NutShop
      :data="[item, params1]" 
      col="3" 
      type="normal-4"
    >
    </NutShop>
  </nutcat-col>
</NutRow>
```
```html
<NutRow type="flex" gutter="2">
  <nutcat-col :span="8" v-for="(item, index) in data2" :key="index">
    <NutShop
      :data="[item, params2]" 
      col="3" 
      type="normal-4" 
    >
    </NutShop>
  </nutcat-col>
</NutRow>
```
```html
<NutRow type="flex" gutter="1">
  <nutcat-col :span="6" v-for="(item, index) in data3" :key="index">
    <NutShop
      :data="[item, params1]" 
      col="4" 
      type="normal-4" 
    >
    </NutShop>
  </nutcat-col>
</NutRow>
```

```javascript
data() {
  return {
    data1: [
      {
        desc: '满千减百狂欢',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/172656/3/18637/6643/60e3bb70E996a14ca/861ce485c3036928.png'
      }, {
        desc: '满千减百狂欢',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/172656/3/18637/6643/60e3bb70E996a14ca/861ce485c3036928.png'
      }, {
        desc: '满千减百狂欢',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/172656/3/18637/6643/60e3bb70E996a14ca/861ce485c3036928.png'
      }
    ],
    data2: [
      {
        name: '资生堂进口专卖',
        desc: '满千减百狂欢',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/185638/30/12045/7305/60e3bd5dEa06a3bf5/fb073dc4992683bf.png'
      }, {
        name: '资生堂进口专卖',
        desc: '满千减百狂欢',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/185638/30/12045/7305/60e3bd5dEa06a3bf5/fb073dc4992683bf.png'
      }, {
        name: '资生堂进口专卖',
        desc: '满千减百狂欢',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/185638/30/12045/7305/60e3bd5dEa06a3bf5/fb073dc4992683bf.png'
      }
    ],
    data3: [
      {
        desc: '特卖4折起',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/178973/20/12948/7386/60e44280Ed93956a7/ee6b8b3c36d4d903.png'
      }, {
        desc: '特卖4折起',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/178973/20/12948/7386/60e44280Ed93956a7/ee6b8b3c36d4d903.png'
      }, {
        desc: '特卖4折起',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/178973/20/12948/7386/60e44280Ed93956a7/ee6b8b3c36d4d903.png'
      }, {
        desc: '特卖4折起',
        logoUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/178973/20/12948/7386/60e44280Ed93956a7/ee6b8b3c36d4d903.png'
      }
    ],
    params1: {
      cName: false,
      cLogo: ['logoUrl']
    },
    params2: {
      cLogo: ['logoUrl']
    }
  };
}
```


<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: Event | -->

