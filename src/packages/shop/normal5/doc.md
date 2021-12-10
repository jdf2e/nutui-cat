# hallnormal5 店铺普通类型五

### 适用场景

一行多个店铺布局，上下结构，支持一行三个、一行三个半、一行四个等。


### 代码演示

一行多个店铺布局，`col` 传对应的列数，店铺的店铺名称、图片通过 `data` 的属性传的。


```html
<NutRow type="flex" gutter="3">
  <nutcat-col :span="8" v-for="(item, index) in data1" :key="index">
    <NutShop
      :data="[item, params]" 
      col="3" 
      type="normal-5" 
    >
    </NutShop>
  </nutcat-col>
</NutRow>
<NutRow type="flex" gutter="3">
  <nutcat-col :span="8" v-for="(item, index) in data2" :key="index">
    <NutShop
      :data="[item, params]" 
      col="3" 
      type="normal-5" 
    >
    </NutShop>
  </nutcat-col>
</NutRow>
```

通过 `slot` 增加自定义内容，例如领券按钮。

```html
<NutRow type="flex" gutter="3">
  <nutcat-col :span="12" v-for="(item, index) in data3" :key="index">
    <NutShop
      :data="[item, params]" 
      col="2" 
      type="normal-5" 
    >
      <div class="btn-follow">+关注 领30元券</div>
    </NutShop>
  </nutcat-col>
</NutRow>
<NutRow type="flex" gutter="3">
  <nutcat-col :span="8" v-for="(item, index) in data4" :key="index">
    <NutShop
      :data="[item, params]" 
      col="3" 
      type="normal-5" 
    >
      <div class="btn-follow">+关注 领30元券</div>
    </NutShop>
  </nutcat-col>
</NutRow>
```


```javascript
data() {
  return {
    data1: [
      {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/173910/14/18452/4865/60e3c11dEe24a049b/60e1e1ed280b56ac.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/184321/21/12968/89947/60e3b907E99089cd7/71f211038718894a.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/173910/14/18452/4865/60e3c11dEe24a049b/60e1e1ed280b56ac.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/184321/21/12968/89947/60e3b907E99089cd7/71f211038718894a.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/173910/14/18452/4865/60e3c11dEe24a049b/60e1e1ed280b56ac.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/184321/21/12968/89947/60e3b907E99089cd7/71f211038718894a.png'
      }
    ],
    data2: [
      {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/179875/7/12879/6873/60e3c269E34d46a04/676b02596f2e9ceb.png',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/180975/16/12965/81810/60e3c271E6846510d/b957175211011d62.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/179875/7/12879/6873/60e3c269E34d46a04/676b02596f2e9ceb.png',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/180975/16/12965/81810/60e3c271E6846510d/b957175211011d62.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/179875/7/12879/6873/60e3c269E34d46a04/676b02596f2e9ceb.png',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/180975/16/12965/81810/60e3c271E6846510d/b957175211011d62.png'
      }
    ],
    data3: [
      {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/181672/14/12861/8907/60e42f20E38fae235/1739835e3dbdb858.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/185323/14/13016/209857/60e42e83Ee77310f0/33e69bcea6f13cb7.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/181672/14/12861/8907/60e42f20E38fae235/1739835e3dbdb858.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/185323/14/13016/209857/60e42e83Ee77310f0/33e69bcea6f13cb7.png'
      }
    ],
    data4: [
      {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/181672/14/12861/8907/60e42f20E38fae235/1739835e3dbdb858.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/185323/14/13016/209857/60e42e83Ee77310f0/33e69bcea6f13cb7.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/181672/14/12861/8907/60e42f20E38fae235/1739835e3dbdb858.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/185323/14/13016/209857/60e42e83Ee77310f0/33e69bcea6f13cb7.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        logoUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/181672/14/12861/8907/60e42f20E38fae235/1739835e3dbdb858.png',
        pictureUrl: 'https://img13.360buyimg.com/imagetools/jfs/t1/185323/14/13016/209857/60e42e83Ee77310f0/33e69bcea6f13cb7.png'
      }
    ],
    data5: [
      {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/173974/21/18150/32309/60e3bc10E3df14e94/1b62f83797a76dfe.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/173974/21/18150/32309/60e3bc10E3df14e94/1b62f83797a76dfe.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/173974/21/18150/32309/60e3bc10E3df14e94/1b62f83797a76dfe.png'
      }, {
        name: '欧莱雅进口专卖',
        desc: '全场5折起',
        pictureUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/173974/21/18150/32309/60e3bc10E3df14e94/1b62f83797a76dfe.png'
      }
    ],
    params: {
      cName: false,
      cLogo: ['logoUrl'],
      cImage: ['pictureUrl']
    }
  };
}
```


<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: Event | -->

