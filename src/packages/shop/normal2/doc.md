# hallnormal2 店铺普通类型二

### 适用场景

一行一个店铺布局，由品牌logo+名称+运营语+利益点+进入标签组成。适合长利益点。


### 代码演示

一行多个店铺布局，`col` 传1，`bgColor` 可以设置背景颜色，`tag` 传的是 `tag` 的`type`属性；店铺的店铺名称、图片通过 `data` 的属性传的。



```html
<NutShop
  :data="[data, params]" 
  col="1" 
  type="normal-2" 
  descRow="1"
  bgColor="#820C00"
>
  <NutTag
    slot="tag"
    class="tag-go"
    radius="30px"
    color="#fff"
    bgColor="rgb(0, 0, 0)"
    afterIcon="arrow-full"
  >
    进入
  </NutTag>
  <div class="tag-box">
    <NutTag type="red-light">
      <span slot="preSlot">满减</span>
      满1000减300券
    </NutTag>
    <NutTag type="red-light">
      <span slot="preSlot">折</span>
      全场3折起
    </NutTag>
    <NutTag type="red-light">
      其他利益点
    </NutTag>
  </div>
</NutShop>
```

```javascript
data() {
  return {
    data: [
      {
        name: '品牌店铺名称',
        desc: '有气质的运营语十二字以内',
        logo:
          'https://img14.360buyimg.com/imagetools/jfs/t1/179875/7/12879/6873/60e3c269E34d46a04/676b02596f2e9ceb.png'
      }
    ],
    params: {
      cLogo: ['logoUrl']
    }
  };
}
```


