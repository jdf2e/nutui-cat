#  productlimit 组件

### 介绍

用于大促中抢购商品展示，基于 NutUI-Cat 中 Product 组件实现，可参考 Product 组件 API

### 安装

```javascript
import { createApp } from 'vue';
import { Product } from '@nutui/nutui-cat';

const app = createApp();
app.use(Product);
```

## 代码演示

### 秒杀

```html
<NutTab
    style="height:45px"
    customClass="tabItem"
    activeClass='tabActive'
    :list="list"
    :showLine='false'
    type='complex'
></NutTab>

<div class="demo-countdown">
    距离本场结束：
    <nut-countdown v-model="resetTime" :endTime="end">
        <div class="countdown-part-box">
            <div class="part-item h"> resetTime.h </div>
            <span class="part-item-symbol">:</span>
            <div class="part-item m"> resetTime.m </div>
            <span class="part-item-symbol">:</span>
            <div class="part-item s"> resetTime.s </div>
        </div>
     </nut-countdown>
</div>
<NutProduct
    rowType="flex"
    gutter="2"
    :data="data"
    iconType="qiang"
    nameRow="2"
    col="3"
    type="normal-5"
    >
    <NutTag class="top-tag tl" type="red-gradient">满199减100</NutTag>
</NutProduct>
```
```JavaScript
data() {
    return {
      list: [
        {
          id: 0,
          title: '8:00',
          subtitle:'已结束',
          active: false
        },
        {
          id: 1,
          title: '14:00',
          subtitle:'抢购中',
          active: true
        },
        {
          id: 2,
          title: '16:00',
          subtitle:'即将开始',
          active: false
        },
        {
          id: 3,
          title: '18:00',
          subtitle:'即将开始',
          active: false
        },
        {
          id: 4,
          title: '20:00',
          subtitle:'即将开始',
          active: false
        }
      ],
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
      end: Date.now() + 50 * 1000,
      resetTime: {
        d: '1',
        h: '00',
        m: '00',
        s: '00'
      },
    };
  },
```


### 直降

```html
<NutProduct
    rowType="flex"
    gutter="2"
    :data="data"
    iconType=""
    pricePre='抢购价'
    nameRow="2"
    col="3"
    type="normal-4"
    :bottomOperate='bottomOperate'
    linePricePre='日常价'
    >
    <NutTag class="top-tag tl" type="rank-hot">满199减100</NutTag>
</NutProduct>
```
```JavaScript
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
        desc:'马上抢',
        position:'right',
        renderIcon:(h)=>{
          return h('NutIcon',{
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
  },
```


## API

抢购商品是基于 NutUI-Cat 的 Product 实现，可参考 Product 组件 API
    