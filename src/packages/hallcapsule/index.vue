<template>
    <div :class="classes">
      <div 
        v-if="lines === 2" 
        class="hall-capsule-tit"
      >
        热门推荐：
      </div>

      <div 
        class="hall-capsule-list" 
        v-for="list in computedLists" 
        :style="styleObj"
        :key="list.id"
      >
        {{(list.name.length > 5 && lines === 2) ? list.name.slice(0, 4) : list.name}}
      </div>

      <div 
        v-if="lines === 2 && hasChangeBtn" 
        @click="handleClick" 
        class="hall-capsule-refresh"
      >
        <NutIcon type="refresh"></NutIcon>换一批
      </div>
    </div>
  </template>
  <script>
  
  import { createComponent } from '@/utils/create';
  const { componentClass, create } = createComponent('hallcapsule');
  
  export default create({
    props: {
      lists:Array,
      hasChangeBtn: {
        type: Boolean,
        default: false
      },
      lines: {
        type: Number,
        default: 2
      },
      change: Function,
      width: Number
    },
    data() {
      return {
      };
    },
    components: {},
    computed:{
      classes() {
        let classObj = {
          [componentClass+'-page']: true,
        }

        if(this.lines === 1) {
          return {
            ...classObj,
            'single-line': true
          }
        }

        return classObj;
      },
      computedLists(){
        if(this.lines === 2) {
          if(this.lists.length > 7 && !this.hasChangeBtn) {
            return this.lists.slice(0, 7)
          }
          if(this.lists.length > 6 && this.hasChangeBtn) {
            return this.lists.slice(0, 6)
          }
        }

        return this.lists
      },
      styleObj() {
        if(this.lines === 1){
          return {
            width: this.width + 'px'
          }
        }

        return {}
      }
    },
    mounted() {},
    methods: {
      handleClick() {
        this.$emit('change')
      }
    }
  });
  </script>
  
  <style lang="scss">
  @import 'index.scss';
  </style>
  