# normal-3 榜单普通类型三

### 适用场景

一行三个榜单布局，上下结构，支持一行三个、一行三个半、一行四个等。

## 代码演示

下面是 **normal-3** 类型，一行多个榜单布局，榜单的名称、图片、价格通过 `data` 的属性传的。

```html
<NutRow type="flex" gutter="2">
  <NutCol :span="8" v-for="(item, index) in data1" :key="index">
    <NutRank
      :data="[item, params]" 
      col="3" 
      type="normal-3" 
    ></NutRank>
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
    data1: [
      {
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      },{
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      },{
        name: '手机电脑榜',
        desc: '2.6万人买过',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/186089/17/12969/32371/60e44a1fEe0cdd69c/f723f8a9402549b4.png'
      }
    ],
  }
}
```