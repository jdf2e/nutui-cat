# normal-4 榜单普通类型四

### 适用场景

一行三个榜单布局，上下结构，支持一行三个、一行三个半、一行四个等。

## 代码演示

下面是 **normal-4** 类型，一行多个榜单布局，榜单的名称、图片、价格通过 `data` 的属性传的。

```html
<NutRow type="flex" gutter="2">
  <NutCol :span="8" v-for="(item, index) in data" :key="index">
    <NutRank
      :data="[item, {cImage: ['pictureUrl']}]" 
      bgUrl="//img11.360buyimg.com/imagetools/jfs/t1/187035/30/7524/12500/60c1cfd7E8d2e1f3b/e43f0191aea8a5bd.png"
      col="3" 
      type="normal-4" 
    >
      <NutTag type="rank-hot"></NutTag>
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
        desc: '2.6万人买过',
        pictureUrl:
          'https://img10.360buyimg.com/imagetools/jfs/t1/187808/29/11938/45562/60e4509fE3cc935d5/4c98a1614eb9cfa5.png'
      },{
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img10.360buyimg.com/imagetools/jfs/t1/187808/29/11938/45562/60e4509fE3cc935d5/4c98a1614eb9cfa5.png'
      },{
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img10.360buyimg.com/imagetools/jfs/t1/187808/29/11938/45562/60e4509fE3cc935d5/4c98a1614eb9cfa5.png'
      }
    ]
  };
}
```