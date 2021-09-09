<template>
  <div :class="classes" >
    <div v-for="(item, index) of list" :key="index" :class="['nutcat-task-list',customClass]" @click="handleClick(item)">
      <div class='nutcat-task-icon'>
        <IconRender :node='item'></IconRender>
      </div>
      <div class="nutcat-task-desc">
        <div>{{ item.name }} <span v-if="item.times != null && item.times != undefined && item.maxTimes">（{{ item.times }}/{{ item.maxTimes }}）</span></div>
        <div v-if="item.desc">{{ item.desc }}</div>
      </div>

      <div v-if="!renderOpetation" :class="['nutcat-operate-btn', `${item.operationStatus?item.operationStatus:''}`]" @click="handleBtn(item)">{{ item.operationMsg }}</div>
      <OperationRender :node='item' v-else></OperationRender>
    </div>
  </div>
</template>
  <script>
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('tasklist');

export default create({
  props: {
    list: {
      type: Array,
      default: () => []
    },
    customClass:{
      type: String,
      default: ''
    },
    renderOpetation:Function,
    renderIcon:Function
  },
  data() {
    return {};
  },
  components: {
    IconRender:{
      props: {
        node: {
          required: true
        }
      },
      render(h) {
        let parent = this.$parent
        const node = this.node
        const { data, store } = node;
        if(parent.renderIcon){
          return parent.renderIcon(h,{node,data, store})
        } else {
          return h('img',{
            attrs: {
              src: node.icon
            },
          })
        }
      //  return (parent.renderIcon?parent.renderIcon(h,{node,data, store}):<img src={node.icon} alt="" />);
      }
    },
    OperationRender:{
      props: {
        node: {
          required: true
        }
      },
      render(h) {
        let parent = this.$parent
        const node = this.node
        const { data, store } = node;
        return (parent.renderOpetation(h,{node,parent,data, store}));
      }
    }
  },
  computed: {
    classes() {
      return {
        [componentName + '-page']: true
      };
    }
  },
  mounted() {
  },
  methods: {
    handleClick(data) {
      if(data) this.$emit('click',data)
      
    },
    handleBtn(data){
      this.$emit('clickOperate',data)
      window.event.stopPropagation()
    }
  }
});
</script>
  
<style lang="scss">
@import 'index.scss';
</style>
  