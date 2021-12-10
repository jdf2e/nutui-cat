# hallnormal5 会场普通类型五

### 适用场景

一行多个会场布局，图片和内容区域上下布局。


### 代码演示

一行三个会场布局，`col` 传2，`tag` 传的是 `tag` 的`type`属性；会场的会场名称、图片通过 `data` 的属性传的。

```html
<NutRow type="flex" gutter="2">
  <nutcat-col :span="8" v-for="(item, index) in data1" :key="index">
    <NutHall
      :data="[item, params1]"
      imgHeight="76"
      col="3"
      type="normal-5"
    >
    </NutHall>
  </nutcat-col>
</NutRow>
```

```html
<NutRow type="flex" gutter="2">
  <nutcat-col :span="8" v-for="(item, index) in data2" :key="index">
    <NutHall
      :data="[item, params2]"
      imgHeight="76"
      col="3"
      type="normal-5"
    >
    </NutHall>
  </nutcat-col>
</NutRow>
```

```html
<NutRow type="flex" gutter="2">
  <nutcat-col :span="8" v-for="(item, index) in data3" :key="index">
    <NutHall
      :data="[item, params1]"
      imgWidth="71"
      imgHeight="71"
      col="4"
      type="normal-5"
    >
    </NutHall>
  </nutcat-col>
</NutRow>
```

```html
<NutRow type="flex" gutter="2">
  <nutcat-col :span="8" v-for="(item, index) in data4" :key="index">
    <NutHall
      :data="[item, params2]"
      imgWidth="71"
      imgHeight="71"
      col="4"
      type="normal-5"
    >
    </NutHall>
  </nutcat-col>
</NutRow>
```

```javascript
data() {
  return {
    data1: [
      {
        name: '标签会场名称1',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      },
      {
        name: '标签会场名称1',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      },
      {
        name: '标签会场名称1',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      }
    ],
    data2: [
      {
        name: '标签会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      },
      {
        name: '标签会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      },
      {
        name: '标签会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      }
    ],
    data3: [
      {
        name: '会场名称',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      }
    ],
    data4: [
      {
        name: '会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      },
      {
        name: '会场名称',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/181686/9/13190/25786/60e80c40Ed3b92127/a0d8b58e7e6d00cf.png'
      }
    ],
    params1: {
      cImage: ['pictureUrl'],
      cDesc: false
    },
    params2: {
      cImage: ['pictureUrl']
    }
  }
}
```


