### @nutui/babel-plugin-separate-import

---

按需引入Nutui2.0组件，减小打包体积；

### 安装

---

```bash
npm i -D @nutui/babel-plugin-separate-import
```

### 使用

---

配置`.babelrc`文件：

```js
{
  "plugins": [
    ["@nutui/babel-plugin-separate-import", {
      "style": "css"
    }]
  ]
}

```

然后就可以像下面这样按需引入组件了：

```js
import Vue from 'vue';
import { Button, Icon } from '@nutui/nutui';

Vue.use(Button);
Vue.use(Icon);
```

### 国际化

如果您需要使用我们的国际化功能，并使用我们的语言转换方法来对自己的网站进行语言转换的话，需要配置该插件的 `sourceCode` 参数为 `true`；此时组件的按需引用和默认情况下不同，组件将会指向未构建的源文件，同时组件也不再具有 `install` 方法，请使用 `Vue.component` 对组件进行注册；

```js
import Vue from 'vue';
import { Button, Icon, locale, i18n } from '@nutui/nutui';

Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
```

```js
// .babelrc

{
  "plugins": [
    ["@nutui/babel-plugin-separate-import", {
      "sourceCode": true,
      "style": "css"
    }]
  ]
}
```

### AST转换

---

```js
import { Button } from '@nutui/nutui';
```

当使用这种方式`import`组件时，将会被转换为：

```js
import Button from '@nutui/nutui/dist/packages/button/button.js';
// sourceCode 为 true 时
import Button from '@nutui/nutui/dist/packages/button/button.vue';

import '@nutui/nutui/dist/packages/button/button.css';
```

* 如果`style`选项为`css`，则会加载相应组件的`css`；

* 如果`style`选项为`scss`，则会加载相应组件的`scss`；

* 如果没有`style`选项，则不会加载样式文件，需用户手动添加；

