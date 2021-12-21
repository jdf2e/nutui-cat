# Hall 会场组件2

### 适用场景

一行一个会场布局，由名称+利益点+进入标签+图片组成。文字溢出出现省略号。


### 代码演示

<br>

由文字+进入标签+图片组成。文字超一行出现省略号。
一行一个会场布局，`col` 传1，`bgColor` 可以设置背景颜色，`tag` 传的是 `tag` 的`type`属性；
`imgWidth` 和 `imgHeight` 设置图片的宽和高。会场的会场名称、图片通过 `data` 的属性传的。


```html
<NutRow>
  <NutCol :span="24" v-for="(item, index) in data" :key="index">
    <NutHall
      :data="[item, params]"
      tag="arrow-full"
      imgWidth="90"
      imgHeight="44"
      bgColor="#820C00"
      col="1"
      type="normal-2"
    >
    </NutHall>
  </NutCol>
</NutRow>
```

```javascript
data() {
  return {
    data: [
      {
        name: '京东美妆',
        desc: '全场满999减200',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/176928/22/13163/23498/60e65cffE9eda1beb/5267b71a88705447.png'
      }
    ],
    params: {
      cImage: ['"https://img11.360buyimg.com/imagetools/jfs/t1/176928/22/13163/23498/60e65cffE9eda1beb/5267b71a88705447.png"']
    }
  };
}
```
