#  Coupon 优惠券

### 介绍

限品类券跳转至券购页，金融券跳转至活动页；全品类券跳转至秒杀落地页；物流券跳转至活动页。

### 安装

``` javascript
import { createApp } from 'vue';
import { Coupon } from '@nutui/nutui-cat';

const app = createApp();
app.use(Coupon);
```

## 代码演示

### 基础用法

```html
<nutcat-row type="flex">
    <nutcat-col class="mf-col-1" :span="8" v-for="(item, index) in data" :key="index">
        <nutcat-coupon 
        :item="[item, {
            cImage: false,
            cLabel: ['desc']
        }]"
        type='normal'
        col="3"
        @click-report="handelClick1(item)"
        >
        </nutcat-coupon>
    </nutcat-col>
</nutcat-row>
```

普通优惠券-有图版在 cImage 设置为 true。

```html
<nutcat-row>
    <nutcat-col :span="8" v-for="(item, index) in data" :key="index">
        <nutcat-coupon 
        :item="[item, {
            cImage: true,
            cLabel: ['desc']
        }]"
        col="3"
        type='normal'
        >
        </nutcat-coupon>
    </nutcat-col>
</nutcat-row> 
```

```javascript
data() {
	return {
      data: [
        {
          pictureUrl: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png",
          extension: {
            limitStr: "限购 [senmum红木家具旗舰店] 店铺部分商品",
            quota: "205.0",
            disCount: "10",
            couponStyle: '',
            couponType: '',
            couponKind: '0',
            subSku: ''
          }
        },{
          pictureUrl: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png",
          extension: {
            limitStr: "限购 [senmum红木家具旗舰店] 店铺部分商品",
            quota: "500",
            disCount: "100",
            couponStyle: '',
            couponType: '',
            couponKind: '0',
            subSku: '',
            src: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png"
          }
        },{
          pictureUrl: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png",
          extension: {
            limitStr: "限购 [senmum红木家具旗舰店] 店铺部分商品",
            quota: "1500",
            disCount: "20",
            couponStyle: '',
            couponKind: '0',
            couponType: '',
            subSku: '',
            src: "https://storage.360buyimg.com/imgtools/f9feeeaaa1-efdb1c80-e94d-11eb-8e5c-0da9e18a13b1.png"
          }
        }
      ]
    };
}
```
## API

### 布局类型

| 参数          | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type    | 类型，可选值有`normal`    | String | - |
| col     | 列元素个数（例如设置一行3个，那么col值为3）  | String、Number | - |
| rowType | 布局方式，可选值为`flex`    | String| - |
| gutter  | 列元素之间的间距（单位为px） | String/Number| - |
| scrollX | 是否滑动                  | Boolean| false |


### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|---------------------------------|--------|------------------|
| type         | 类型，可选值有 normal、finance     | String | - |
| data         | 优惠券数据        | Array、Object | - |


### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click-report  | 点击时回调 | - |
    
    