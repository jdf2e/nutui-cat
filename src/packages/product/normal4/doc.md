# normal4 商品普通类型四

### 适用场景

一行多个商品布局，上下结构的常规类型，支持一行三个、一行三个半等。

## 代码演示

下面是 **normal-4** 类型，一行多个商品布局，商品的名称、图片、价格通过 `data` 的属性传递。

```html
<NutRow type="flex" gutter="2">
  <NutCol :span="8" v-for="(item, index) in data1" :key="index">
    <NutProduct
      :data="[item, params]"
      col="3"
      type="normal-4"
    >
      <template slot="tag">
        <NutTag class="sub-tag" type="red-light">噱头标签</NutTag>
      </template>
      <NutTag class="sub-tag tl" type="red-gradient">
        <NutIcon class="sub-icon" type="crown"></NutIcon>
        数码销量TOP1
      </NutTag>
    </NutProduct>
  </NutCol>
</NutRow>
```
```javascript
data() {
  return {
    data1: [
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      },
      {
        name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
        pPrice: '199',
        linePrice: '499',
        image:
          'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
      }
    ],
    params: {
      cDesc: false
    }
  };
}
```
