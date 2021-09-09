# heart 心跳曲线类型

### 适用场景

心跳曲线类型，支持一行一个、一行二个、一行三个等。

## 代码演示

下面是 **heart** 类型，一行多个商品布局，商品的名称、图片、价格通过 `data` 的属性传递。


```html
<nutcat-row>
  <nutcat-col :span="24" v-for="(item, index) in data1" :key="index">
    <nutcat-product
      :data="[item, params]"
      pricePre="狂欢价"
      nameRow="1"
      heartName="限时优惠价"
      col="1"
      type="heart"
    >
      <template slot="preName">
        <nutcat-tag type="618">618</nutcat-tag>
      </template>
      <template slot="tag">
        <nutcat-tag class="sub-tag" type="red-pink">利益点利益点</nutcat-tag>
      </template>
    </nutcat-product>
  </nutcat-col>
</nutcat-row>
<nutcat-row type="flex" gutter="3">
  <nutcat-col :span="12" v-for="(item, index) in data2" :key="index">
    <nutcat-product
      :data="[item, params]"
      heartName="N天最低价"
      nameRow="2"
      col="2"
      type="heart"
    >
      <template slot="preName">
        <nutcat-tag type="618">618</nutcat-tag>
      </template>
      <template slot="tag">
        <nutcat-tag class="sub-tag" type="red-pink">闪购进行时</nutcat-tag>
      </template>
    </nutcat-product>
  </nutcat-col>
</nutcat-row>
<nutcat-row type="flex" gutter="3">
  <nutcat-col :span="8" v-for="(item, index) in data2" :key="index">
    <nutcat-product
      :data="[item, params]"
      heartName="N天最低价"
      nameRow="2"
      col="3"
      type="heart"
    >
      <template slot="preName">
        <nutcat-tag type="618">618</nutcat-tag>
      </template>
      <template slot="tag">
        <nutcat-tag class="sub-tag" type="red-pink">闪购进行时</nutcat-tag>
      </template>
    </nutcat-product>
  </nutcat-col>
</nutcat-row>
```
```javascript
data() {
  return {
    data1: [
      {
        name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',  
        tag: '源头好物',
        pPrice: '1999',
        linePrice: '2999',
        image:
          'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
      }
    ],
    data2: [
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
