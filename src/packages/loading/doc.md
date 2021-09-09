#  loading组件

### 介绍
    
在页面需要渲染全局加载的情况使用，比如页面初次渲染时

    

## 代码演示
    
### 基础用法

```html
<nut-button @click="showAndHide">点击显示loading，2秒后隐藏</nut-button>
```

```javascript
import { Loading } from '@nutui/nutui-cat';
export default {
  methods: {
    showAndHide() {
      Loading.show();
      setTimeout(() => {
        Loading.hide();
      }, 2000);
    }
  }
};
```

    
## API
    
| 属性         | 说明                             |
| ------------ | -------------------------------- | 
| Loading.show         | 展示loading             |
| Loading.hide        | 隐藏loading                        | 

    
    