# 快速上手

大促业务场景需要兼容更多的低版本手机，所以目前技术栈是 Vue 2.0，后续会升级至 Vue 3。

## 安装

* 通过 Npm 或 Yarn 安装

#### NPM 安装

```bash
npm i @nutui/nutui-cat -S
```

#### CDN 安装使用示例

> 可以通过 CDN 的方式引入， 可以在 **jsdelivr** 和 **unpkg** 等公共 CDN 上获取到 NutUI-Cat。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 引入样式 -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@nutui/nutui-cat/dist/nutui-cat.css"
    />
    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <!-- 引入NutUI组件库 -->
    <script src="https://cdn.jsdelivr.net/npm/@nutui/nutui-cat/dist/nutui-cat.umd.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      Vue.use(nutcat)
      // 在 #app 标签下渲染一个文本组件
      const app = new Vue({
        template: `
        <NutText>我是标题</NutText>
        `,
      })
      app.$mount('#app')
    </script>
  </body>
</html>

```

> 在页面中直接引入，将无法使用 **主题定制** 等功能。我们推荐使用 *NPM* 或 *YARN* 方式安装，不推荐在页面中直接引入的用法
#### NPM 使用示例

```javascript
import App from "./App.vue";
import NutCat from "@nutui/nutui-cat";
import "@nutui/nutui-cat/dist/nutui-cat.css";
Vue.use(NutCat)
new Vue({
  render: (h) => h(App),
}).$mount('#app')
```

> 注意：这种方式将会导入所有组件

<!-- ## 推荐使用按需加载

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { Button, Cell, Icon } from "@nutui/nutui-cat";
import "@nutui/nutui-cat/dist/style.css";
createApp(App).use(Button).use(Cell).use(Icon).mount("#app");
``` -->

<!-- 
## 注意事项

- 使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容字符串类型除外)，比如：
```html
<nut-switch :active="true" size="base"></nut-switch>
```

- 组件 css 单位使用的是 **px**，如果你的项目中需要 **rem** 单位，可借助一些工具进行转换，比如 [webpack](https://www.webpackjs.com/) 的 [px2rem-loader](https://www.npmjs.com/package/px2rem-loader)、[postcss](https://github.com/postcss/postcss) 的 [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) 插件等 -->
