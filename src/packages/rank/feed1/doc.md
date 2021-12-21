# feed-1 榜单feed类型一

### 适用场景

一行二个榜单布局，上下结构，适用于 feed 流场景。

## 代码演示

下面是 **feed-1** 类型，一行两个榜单布局，榜单的名称、图片、价格通过 `data` 的属性传的。

```html
<NutRow type="flex" gutter="3"> 
  <NutCol :span="12" v-for="(item, index) in data" :key="index">
    <NutRank
      :data="[item, params]" 
      tag="arrow-go"
      col="2" 
      type="feed-1" 
    >
    </NutRank>
  </NutCol>
</NutRow>
```
```javascript
data() {
  return {
    params: {
      cName: ['name'],
      cDesc: ['desc'],
      cImage: ['pictureUrl']
    },
    data: [
      {
        name: '手机电脑榜',
        desc: '2.6万人看过',
        pictureUrl:
          'https://img10.360buyimg.com/imagetools/jfs/t1/187808/29/11938/45562/60e4509fE3cc935d5/4c98a1614eb9cfa5.png'
      }, {
        name: '手机电脑榜',
        desc: '2.6万人看过',
        pictureUrl:
          'https://img10.360buyimg.com/imagetools/jfs/t1/187808/29/11938/45562/60e4509fE3cc935d5/4c98a1614eb9cfa5.png'
      }
    ]
  };
}
```