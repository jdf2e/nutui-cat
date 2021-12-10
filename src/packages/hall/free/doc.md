# hallfree 会场自定义类型

### 适用场景

一行一个会场左右布局。通过具名 `slot` 的 `left`、`right` 自定义内容。


### 代码演示

通过 `left`、`right` 插槽，开发自己需要的组件。

```html
<NutRow>
  <nutcat-col :span="24" v-for="(item, index) in data1" :key="index">
    <NutHall :data="[item, params]" bgColor="#820C00" col="1" type="free">
      <template slot="left">
        <NutText class="sub-name" row="1">京东美妆</NutText>
        <NutText class="sub-desc" row="1">
          全场满999减200
          <NutIcon class="sub-tag" type="arrow-full"></NutIcon>
        </NutText>
      </template>
      <template slot="right">
        <NutImage
          class="img-box"
          :width="90"
          :height="44"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/176928/22/13163/23498/60e65cffE9eda1beb/5267b71a88705447.png"
        >
        </NutImage>
      </template>
    </NutHall>
  </nutcat-col>
</NutRow>
```

```javascript
data() {
  return {
    data1: [
      {
        name: 'PLUS入口运营文案',
        pictureUrl:
          'https://img11.360buyimg.com/imagetools/jfs/t1/176928/22/13163/23498/60e65cffE9eda1beb/5267b71a88705447.png'
      }
    ],
    params: {
      cImage: ['pictureUrl']
    }
  };
}
```

<!-- 通过 `left`、`right` 插槽，开发自己需要的组件。  -->

```html
<NutRow type="flex" gutter="1">
  <nutcat-col :span="12" v-for="(item, index) in data2" :key="index">
    <NutHall
      :data="[item, params]"
      col="2"
      type="free"
    >
      <template slot="left">
        <NutImage
          class="img-box"
          src="https://img12.360buyimg.com/imagetools/jfs/t1/184366/12/13604/18481/60e6e839E0d7a3bfd/e242fa7889e7d39a.png"
          width="57"
          height="57"
        >
        </NutImage>
      </template>
      <template slot="right">
        <NutTag class="sub-tag" type="red-gradient">
          <NutIcon
            style="font-size: 10px;vertical-align: initial"
            color="#fff"
            type="clock"
          ></NutIcon>
          正在秒杀
        </NutTag>
        <NutText class="sub-name" row="1">品牌闪购</NutText>
        <NutText class="sub-desc" row="1">超值单品9.9</NutText>
      </template>
    </NutHall>
  </nutcat-col>
</NutRow>
```

```javascript
data() {
  return {
    data2: [
      {
        name: '笔记本电脑',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/178323/16/13057/8574/60e65d04E65aa5608/76469bb0efd62b95.png'
      },
      {
        name: '笔记本电脑',
        desc: '满199减100',
        pictureUrl:
          'https://img13.360buyimg.com/imagetools/jfs/t1/178323/16/13057/8574/60e65d04E65aa5608/76469bb0efd62b95.png'
      }
    ],
    params: {
      cImage: ['pictureUrl']
    }
  };
}
```

通过 `top`、`bottom` 插槽，开发自己需要的组件。

```html
<NutRow type="flex" gutter="2">
  <nutcat-col :span="8" v-for="(item, index) in data3" :key="index">
    <NutHall
      :data="[item, params]"
      bgColor="#820C00"
      col="3"
      type="free"
    >
      <template slot="top">
        <NutImage
          class="img-box"
          src="https://img12.360buyimg.com/imagetools/jfs/t1/184366/12/13604/18481/60e6e839E0d7a3bfd/e242fa7889e7d39a.png"
          width="76"
          height="76"
        >
        </NutImage>
      </template>
      <template slot="bottom">
        <div class="hall-content">
          <NutTag class="sub-tag" type="red-gradient">
            <NutIcon
              style="font-size: 10px;vertical-align: initial"
              color="#fff"
              type="clock"
            ></NutIcon>
            正在秒杀
          </NutTag>
          <NutText class="sub-name" color="#fff" row="1">会场名称</NutText>
          <NutText class="sub-desc" color="#fff" row="1">满199减100</NutText>
        </div>
      </template>
    </NutHall>
  </nutcat-col>
</NutRow>
```



```javascript
data() {
  return {
    data3: [
      {
        name: '标签会场名称',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      },
      {
        name: '标签会场名称',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      },
      {
        name: '标签会场名称',
        pictureUrl:
          'https://img14.360buyimg.com/imagetools/jfs/t1/190503/1/12334/15210/60e7c21dE404032f7/394580425417d196.png'
      }
    ],
    params: {
      cImage: ['pictureUrl']
    }
  };
}
```



<!-- ### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击按钮时触发 | event: Event | -->

