var nameLc = 'test';
var demoModel = function(nameLc) {
  var temp = {
    demo: `<template>
    <div class="demo">
      <h2>基础用法</h2>
      
      <nutcat-${nameLc} name="wifi"></nutcat-${nameLc}>
      <nutcat-${nameLc} name="mail" txt="test txt"></nutcat-${nameLc}>
    </div>
  </template>
  
  <script>
  import { createComponent } from '@/utils/create';
  const { createDemo } = createComponent('${nameLc}');
  export default createDemo({
    props: {},
    data() {
      return {};
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .nutcat-${nameLc} {
  }
  </style>
  `,
    vue: `<template>
    <div :class="classes" @click="handleClick">
      <div>{{ name }}</div>
      <div>{{ txt }}</div>
    </div>
  </template>
  <script>
  
  import { createComponent } from '@/utils/create';
  const { componentName, create } = createComponent('${nameLc}');
  
  export default create({
    props: {
      name: {
        type: String,
        default: ''
      },
      txt: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
      };
    },
    components: {},
    computed:{
      classes() {
        return {
          [componentName+'-page']: true,
        };
      },
    },
    mounted() {},
    methods: {
      handleClick(){
      
      }
    }
  });
  </script>
  
  <style lang="scss">
  @import 'index.scss';
  </style>
  `,
    doc: `#  ${nameLc}组件

    ### 介绍
    
    基于 xxxxxxx
    
    ### 安装
    
    ${''}
    
    ## 代码演示
    
    ### 基础用法1
    

    
    ## API
    
    ### Props
    
    | 参数         | 说明                             | 类型   | 默认值           |
    |--------------|----------------------------------|--------|------------------|
    | name         | 图标名称或图片链接               | String | -                |
    | color        | 图标颜色                         | String | -                |
    | size         | 图标大小，如 '20px' '2em' '2rem' | String | -                |
    | class-prefix | 类名前缀，用于使用自定义图标     | String | 'nutui-iconfont' |
    | tag          | HTML 标签                        | String | 'i'              |
    
    ### Events
    
    | 事件名 | 说明           | 回调参数     |
    |--------|----------------|--------------|
    | click  | 点击图标时触发 | event: Event |
    `
  };

  return temp;
};
module.exports = demoModel;
