<template>
  <div :class="classes" :style="styles" @click="toSku(data)">
    <template v-if="col == '4'">
      <NutImage
        class="img-box"
        :src="data.cImage"
        :width="imgWidth"
        :height="imgHeight"
      >
      </NutImage>
      <div class="product-content">
        <template v-if="data.cName">
          <NutText class="sub-name" :row="nameRow"
            ><slot name="preName"></slot>{{ data.cName }}</NutText
          >
        </template>
        <div class="price-box" v-if="data.cPrice">
          <p class="sub-pre">{{ pricePre }}</p>
          <NutPrice class="price" :price="data.cPrice"></NutPrice>
          <template v-if="$slots.priceAfterSlot">
            <slot name="priceAfterSlot"></slot>
          </template>
          <slot name="priceAfter"></slot>
        </div>
        <div class="line-price-box">
          <p class="sub-pre">{{ linePricePre }}</p>
          <NutPrice class="line-price" :price="data.cLinePrice"></NutPrice>
        </div>
        <div v-if="$slots.tag" class="tag-box-bottom">
          <slot name="tag"></slot>
        </div>
      </div>
    </template>
    <template v-else>
      <NutImage
        class="img-box"
        :src="data.cImage"
        :width="imgWidth"
        :height="imgHeight"
      >
      </NutImage>
      <div class="product-content">
        <template v-if="data.cName">
          <NutText class="sub-name" :row="nameRow"
            ><slot name="preName"></slot>{{ data.cName }}</NutText
          >
        </template>
        <div class="product-bottom">
          <div class="price-wrap">
            <div class="price-box">
              <!-- <div class="price-pre">{{ pricePre }}</div> -->
              <NutText class="price-pre">{{ pricePre }}</NutText>
              <NutPrice class="price" :price="data.cPrice"></NutPrice>
              <template v-if="$slots.priceAfterSlot">
                <slot name="priceAfterSlot"></slot>
              </template>
              <slot name="priceAfter"></slot>
            </div>
            <div class="line-price-box">
              <template v-if="data.cLinePrice && data.cLinePrice > data.cPrice">
                {{ linePricePre }}
                <NutPrice class="line-price" :price="data.cLinePrice"></NutPrice>
              </template>
            </div>
            <div v-if="$slots.tag" class="tag-box-bottom">
              <slot name="tag"></slot>
            </div>
          </div>
          <template v-if="iconType">
            <NutIcon class="icon-right" :type="iconType"></NutIcon>
          </template>
        </div>
      </div>
    </template>
    <slot></slot>

    <div :class='["nutcat-product-bottom-operate",bottomOperate.classes]' @click="bottomOperate.click(data)" v-if="bottomOperate" :style="stylesBottom">
      <renderIcon v-if="bottomOperate.renderIcon && bottomOperate.position == 'left'"></renderIcon>
      <span>{{bottomOperate.desc}}</span>
      <renderIcon v-if="bottomOperate.renderIcon && bottomOperate.position == 'right'"></renderIcon>
    </div>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { componentClass, create } = createComponent('product');

export default create({
  props: {
    data: {
      type: Object,
      default: {}
    },
    col: {
      type: String,
      default: '1'
    },
    type: {
      type: String,
      default: '1'
    },
    nameRow: {
      type: [String, Number],
      default: '2'
    },
    descRow: {
      type: [String, Number],
      default: '1'
    },
    pricePre: {
      type: String,
      default: ''
    },
    linePricePre: {
      type: String,
      default: ''
    },
    bgColor: {
      type: [String, Number],
      default: ''
    },
    bgUrl: {
      type: [String, Number],
      default: ''
    },
    imgWidth: {
      type: [String, Number],
      default: ''
    },
    imgHeight: {
      type: [String, Number],
      default: ''
    },
    iconType: {
      type: String,
      default: ''
    },

    /**
     * desc:'文字描述',
     * color:'文字颜色',
     * bgColor:'背景颜色',
     * classes:'自定义类型'
     * position:'left'
     * renderIcon:(h)=>{ return (<span>自定义icon</span>);},
      * click:(data)=>{点击事件}
     */
    bottomOperate:{
      type: Object,
      default: ()=>{
        position:'left'
      }
    },
  },
  data() {
    return {};
  },
  components:{
    renderIcon:{
      render(h) {
        return (this.$parent.bottomOperate.renderIcon(h,{}));
      }
    }
  },
  mounted() {},
  computed: {
    classes() {
      return {
        [componentClass]: true,
        [`${componentClass}-${this.col}`]: this.col,
        [`${componentClass}-${this.type}`]: this.type,
        [`${componentClass}-scrollX`]: this.scrollX
      };
    },
    styles() {
      if (this.bgUrl) {
        return {
          'background-image': `url(${this.bgUrl})`,
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-size': '100% 100%'
        };
      }
      if (this.bgColor) {
        return {
          'background-color': `${this.bgColor}`
        };
      }
    },

    stylesBottom(){
      return {
        'background':`${this.bottomOperate.bgColor?this.bottomOperate.bgColor:'#FF5D3C'}`,
        'color':`${this.bottomOperate.color?this.bottomOperate.color:'#ffffff'}`,
      }
    }
  },
  methods: {
    toSku(item) {
      this.$emit('click-sku', item);
    }
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
$prefix: nutcat-product;

.mb0 {
  margin-bottom: 0;
}

.#{$prefix}-normal-4 {
  .line-price-box {
    height: 11px;
  }
  .price-box {
    .price-pre {
      line-height: 1.3;
    }
  }
  &.#{$prefix}-4 {
    .img-box {
      width: 53px;
      height: 53px;
      margin-bottom: 1px;
    }
    .sub-name {
      font-size: 10px;
      margin-bottom: 6px;
    }
    .price-box {
      // height: 33px;
      // margin-bottom: 6px;
      font-size: 10px;
      color: $title-color;
    }
    .sub-pre {
      margin-bottom: 4px;
    }
  }
  &.#{$prefix}-2 {
    .product-bottom {
      .icon-right {
        font-size: 32px;
      }
    }
  }
  &.#{$prefix}-3 {
    .product-bottom {
      .icon-right {
        font-size: 23px;
      }
    }
  }
}
</style>
