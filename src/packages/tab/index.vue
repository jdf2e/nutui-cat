<template>
  <div :class="classes">
    <div :class="[{ scroll: scrollC }, 'nutcat-nav-box', `nutcat-${type}-nav`,customClass]">
      
        <!-- 右侧带有图片 -->
        <template v-if="type == 'image'">

          <div 
            v-for="(item, index) in dealData(normData)"
            :key="index"
            @click="handleClick(item,index)"
            :class="[(activeIndex == index)?(activeClass?activeClass:'active'):'','']"
          >
            <template>
              <img :src="item.cImage" class="nutcat-item-image"/>
            </template>
            <span class="nutcat-image-tab-text">{{ item.cName }}</span>
          </div>
        </template>

        <template v-else>
          <div
            v-for="(item, index) in dealData(normData)"
            :key="index"
            @click="handleClick(item,index)"
            :class="[{
              'active-underline': (activeIndex == index) && type == 'base',
              splitline: (type == 'simple' || showLine) && type != 'complex'
            },(activeIndex == index)?(activeClass?activeClass:'active'):'']"
            >
            <template v-if="type == 'complex'">
              <div class="complex-name"> {{ item.cName }}</div>
              <div class="complex-subtitle" v-if="item.cDesc && showDesc"> {{ item.cDesc }}</div>
            </template>
            <template v-else> {{ item.cName }}</template>
          </div>
        </template>
       
    </div>
  </div>
</template>
  <script>
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('tab');
import connectData  from '@/utils/connect';
export default create({
  props: {
    type: {
      type: String,
      default: 'base'
    },
    data: {
      type: [Array,Object],
      default: () => {
        return [];
      }
    },
    scroll: {
      type: Boolean,
      default: false
    },
    showLine: {
      type: Boolean,
      default: true
    },
    showDesc:{
      type:Boolean,
      default:true
    },
    customClass:{
      type:String,
      default:''
    },
    activeClass:String,
    activeIndex: {
      type: [String,Number],
      default: 0
    },

  },
  data() {
    return {
      scrollC: false,
      normData:[]
    };
  },
  components: {},
  computed: {
    classes() {
      return {
        [componentName + '-page']: true
      };
    }
  },
  watch: {
    data:{ //深度监听，可监听到对象、数组的变化
        handler (newV, oldV) {
          // console.log('更新',newV)
          this.normData = this.deepClone(this.data[0])
        },
        deep:true
      }
  },
  mounted() {
    this.scrollC = this.scroll || this.data[0].length > 5;

    this.normData = this.deepClone(this.data[0])

  },
  methods: {
    handleClick(item,index) {
      this.$emit('click', this.data[0][index],index);
    },

    dealData(obj) {
      if(obj.length>0){
        obj.forEach(item=>{
          
          connectData(item, this.data[1])
        })
      }
      return obj
    },

    //深度克隆
    deepClone(obj) {
        const objClone = Array.isArray(obj) ? [] : {}
        if (obj && typeof obj === 'object') {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    // 用for...in循环会获取到原型链上的可枚举属性，不过可以使用hasOwnProperty()方法过滤掉。
                    if (obj[key] && typeof obj[key] === 'object') {
                        // 判断ojb子元素是否存在并且是否为为对象，如果是，递归复制
                        objClone[key] = this.deepClone(obj[key])
                    } else {
                        // 如果不是，简单复制
                        objClone[key] = obj[key]
                    }
                }
            }
        }
        return objClone
    }
  }
});
</script>
  
<style lang="scss">
@import 'index.scss';
</style>
  