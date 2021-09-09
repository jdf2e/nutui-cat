# 数据配置

在组件的 prop 里的 data 配置取数逻辑，:data 的值是 [data, params] 数组的形式，其中 data 是接口数据，params 是我们要定义的取数逻辑，params 有以下几种形式：

#### 1. 字符串

名称区域展示 “我是商品名称”

```javascript
<nutcat-product 
  :data="[data, 
    { 
      cName: ['我是商品名称'] 
    }
  ]"
  type="normal-1"
>
</nutcat-product>
```



#### 2. 布尔值

设置 false 模块直接隐藏，不展示商品名称

```javascript
<nutcat-product 
  :data="[data, 
    { 
      cName: [false] 
    }
  ]"
  type="normal-1"
>
</nutcat-product>
```



#### 3. 字段解析

读取 data 下的 name 字段

```javascript
<nutcat-product 
  :data="[data, 
    { 
      cName: ['name'] 
    }
  ]"
  type="normal-1"
>
</nutcat-product>
```

读取 data 下的 desc 字段，若 desc 为空，则读取comments[0]

```javascript
<nutcat-product 
  :data="[data, 
    { 
      uDesc: ['desc', 'comments[0]'] 
    }
  ]"
  type="normal-1"
>
</nutcat-product>
```

读取 data 下的 extension.subSku[0].name 字段，若 extension.subSku[0].name 为空，则读取 comments[0]，如此类推，直到读到最后一个为止。

```javascript
<nutcat-product 
  :data="[data, 
    { 
      uDesc: ['extension.subSku[0].name', 'comments[0]', 'comments[1]']
    }
  ]"
  type="normal-1"
>
</nutcat-product>
```

读取 data 下的 name 字段，若 name 为空，则读取“热卖中”这个字符串。

```javascript
<nutcat-product 
  :data="[data, 
    { 
      uDesc: ['desc', '"热卖中"'] 
    }
  ]"
  type="normal-1"
>
```


