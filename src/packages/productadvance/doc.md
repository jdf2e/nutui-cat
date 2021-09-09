#  productadvance 组件

### 介绍

用于大促中预约、预售、预告商品的展示，基于 NutUI-Cat 中 Product 组件实现，可参考 Product 组件 API

### 安装
```javascript
import { createApp } from 'vue';
import { Product } from '@nutui/nutui-cat';

const app = createApp();
app.use(Product);
```


## 代码演示

### 预告商品
```html
<nutcat-product
    rowType="flex"
    gutter="2"
    :data="data"
    iconType=""
    pricePre='预告价'
    nameRow="2"
    col="3"
    type="normal-4"
    :bottomOperate='bottomOperate'
    linePricePre='京东价'
    >
    <nutcat-tag class="top-tag tl" type="red-gradient">满199减100</nutcat-tag>
</nutcat-product>
```
```javascript
data() {
    return {
      data:[{
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          price: '199',
          linePrice: '499',
          src:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          price: '199',
          linePrice: '499',
          src:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          price: '199',
          linePrice: '499',
          src:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        }],
      bottomOperate:{
        desc:'去预约',
        position:'right',
        renderIcon:(h)=>{
          return h('nutcat-icon',{
            props:{
              color:"#ffffff", 
              type:"arrow-full"
            }
          });
        },
        click:(data)=>{
          console.log('跳转详情',data)
        }
      }
    };
}
```

### 预约商品
```html
<nutcat-product
    rowType="flex"
    gutter="2"
    :data="data"
    iconType=""
    pricePre='预告价'
    nameRow="2"
    col="3"
    type="normal-4"
    :bottomOperate='bottomOperate'
    >
</nutcat-product>
```
```javascript
data() {
    return {
      data:[{
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          price: '199',
          linePrice: '499',
          src:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          price: '199',
          linePrice: '499',
          src:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        },
        {
          name: '商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名',
          price: '199',
          linePrice: '499',
          src:
            'https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png'
        }],
      bottomOperate:{
        desc:'提醒我',
        click:(data)=>{
          console.log('跳转详情',data)
        }
      }
    };
}
```


## API
基于 NutUI-Cat 中 Product 组件实现，可参考 Product 组件 API


    