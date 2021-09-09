# 进阶使用

商品、会场、店铺等组件是由原子组件构成的，在组件设计的结构层面，也把对应区域内容进行了划分，以商品组件为例，主要分为下面几个区域：

<br>

<img src="https://storage.360buyimg.com/imgtools/b9ac7fe253-1d603080-03e5-11ec-9874-cdedefa3c24e.png" width="750" />

<br>
<br>

而这些区域对应的字段经常是会变的，例如：A 活动的商品组件利益点字段使用的是 desc 读取数据，B 活动使用是 tag 字段。在同一个活动不同的楼层的取数逻辑也可能是不一样的。

<br>

为了解决上述问题，在设计上进行了解耦。业务组件在代码设计上，我们将取数逻辑抽离出来，由组件的使用者自行定义。

#### 业务字段模版使用说明

> 我们通过 prop 里的 data 传递数据，:data 的值是 [data, params] data 是接口数据，params 是我们要定义的取数逻辑，约定以 cXxxx 开头的适用以下模版规则。
以商品组件为例，对应关系如下：

<!-- <img src="https://storage.360buyimg.com/imgtools/b9ac7fe253-1d603080-03e5-11ec-9874-cdedefa3c24e.png" width="750" /> -->

##### params

| 属性             | 说明            | 
|-----------------|-----------------|
| cName           | 名称  |
| cNameTag        | 名称前的标签  |
| cDesc           | 利益点 |
| cImage          | 图片  |
| cLogo           | logo图  |
| cLabel          | 悬浮标签，通常用于左上角，一般只有一个 | 
| cTag            | 标签，通常用于内容区，个数可能不止一个 | 
| cBottom         | 底部操作区  | 
| cRight          | 右侧操作区  | 
| cPrice          | 价格 | 
| cPrePrice       | 价格前的内容 | 
| cAfterPrice     | 价格后的内容 | 
| cLinePrice      | 划线价格 | 
| cPreLinePrice   | 划线价格前的内容 | 

<!-- ```html
``` -->

<!-- > 在页面中直接引入，将无法使用 **主题定制** 等功能。我们推荐使用 *NPM* 或 *YARN* 方式安装，不推荐在页面中直接引入的用法
#### NPM 使用示例

```javascript

``` -->