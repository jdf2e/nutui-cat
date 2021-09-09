<template>
  <div :class="classes" @click="handleClick">
    <div :class="['nutcat-heart']">
      <div :class="['bight-img-box',`nutcat-heart-${size}`,`nutcat-heart-${type}`]">

        <div  :class="['bight-top-box',`bight-top-${type}-box`]">
          <div class="bight-top-item left" v-if="top.left || $slots.pTopLeft" >
            
            <template v-if="top.left"><span v-html="top.left"></span></template>
            <slot name="pTopLeft" v-else></slot>
          </div>
          <div class="bight-top-item center" v-if="top.center || $slots.pTopCenter" >
            <slot name="pTopCenter" v-if="$slots.pTopCenter"></slot>
            <template v-else ><span v-html="top.center"></span></template>
          </div>
          <div class="bight-top-item right" v-if="top.right || $slots.pTopRight">
            <slot name="pTopRight" v-if="$slots.pTopRight"></slot>
            <template v-else ><span v-html="top.right"></span></template>
          </div>
        </div>
        
        <div class="bight-content">

          <div :class="['bight-price-box',`bight-price-${type}-box`]">
            <nutcat-price
              v-if="type == 'bight'"
              class="bight-price"
              :price="centerPrice"
            ></nutcat-price>
          </div>

          <div :class="['bight-bottom-box',`bight-bottom-${type}-box`]" v-if="bottom.left || bottom.center || bottom.right">
            <div class="bight-bottom-item left" v-if="bottom.left || $slots.pBottomLeft" >
              <slot name="pBottomLeft" v-if="$slots.pBottomLeft"></slot>
              <template v-else ><span v-html="bottom.left"></span></template>
            </div>
            <div class="bight-bottom-item center" v-if="bottom.center || $slots.pBottomCenter">
              <slot name="pBottomCenter" v-if="$slots.pBottomCenter"></slot>
              <template v-else ><span v-html="bottom.center"></span></template>
            </div>
            <div class="bight-bottom-item right" v-if="bottom.right || $slots.pBottomRight">
              <slot name="pBottomRight" v-if="$slots.pBottomRight"></slot>
              <template v-else ><span v-html="bottom.right"></span></template>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
  <script>
import { createComponent } from "@/utils/create";
const { componentName, create } = createComponent("heartcurve");

export default create({
  props: {
    type: {
      type: String,
      default: "bight", // broken
    },
    size: {
      type: String,
      default: "normal",   // small 小 normal 普通  big 大
    },
    top:{
      type: Object,
      default: ()=>{
        return {
          left:'',
          center:'',
          bottom:''
        }
      },
    },
    centerPrice: {
      type: String,
      default: "",
    },
    bottom:{
      type: Object,
      default: ()=>{
        return {
          left:'',
          center:'',
          bottom:''
        }
      },
    },
  },
  data() {
    return {};
  },
  components: {},
  computed: {
    classes() {
      return {
        [componentName + "-page"]: true,
      };
    },
  },
  mounted() {
    console.log(this.$slots)
  },
  methods: {
    handleClick() {},
  },
});
</script>
  
  <style lang="scss">
@import "index.scss";
</style>
  