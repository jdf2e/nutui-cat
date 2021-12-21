<template>
  <div :class="classes" :style="styles" @click="handleClick()">
    <NutImage class="sub-image" :src="item.extension.u_img"></NutImage>
    <div :class="classesInfo">
      <NutText class="sub-price" row="1"><i class="rmb">&yen;</i>{{item.extension.u_tit}}</NutText>
      <NutText class="sub-limitStr" row="1">{{item.extension.u_line1}}</NutText>
    </div> 
    <div :class="classesCont">
      <NutText class="sub-name" row="1">{{item.extension.shopName}}</NutText>
      <div class="sub-btn">
        <div>分享领券</div>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
import { Toast } from '@nutui/nutui';
const { componentClass, create } = createComponent('shareCoupon');
const _toast: any = Toast;
export default create({
  props: {
    item: {
      type: [Array, Object],
      default: []
    },
    image: {
      type: [String, Boolean],
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    type: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
		return {
      state: ''
    };
	},
  components: {},
  mounted() {
  },
  computed: {
    classes() {
      return {
        [componentClass]: true,
        [`${componentClass}-${(this as any).type}`]: (this as any).type,
        [`${componentClass}-${(['get','use','ban'] as any)[(this as any).state]}`]: (this as any).state
      };
    },
    classesCont() {
      return {
        [`${componentClass}-cont`]: true
      };
    },
    classesInfo() {
      return {
        [`${componentClass}-info`]: true
      };
    },
    styles() {
      return {
        // 'border-radius': ((this as any) as any).radius + 'px'
      };
    }
  },
  created() {
    // 处理券的字段数据
    switch (this.type) {
      case 'share': this.setShareCoupon(); break;
    }
  },
  methods: {
    // 分享券
    setShareCoupon() {
      let cpnResultCode,soldOut;
      // 处理跨品类拉新券的字段过滤
      let ext = (this as any).item.extension
      let { pictureLink } = ext
      ext.u_img = pictureLink ? `https://m.360buyimg.com/mobile/jfs${pictureLink.split('/jfs')[1]}` : ''
      
      ext.u_tit = (this as any).cleanZero(ext.discount)
      ext.u_line1 = (this as any).cleanZero(ext.quota)
      ext.u_line2 = (this as any).item.desc ? (this as any).item.desc : ext.limitStr
      console.log('u_tit 11', ext.u_tit)
      // 金额、门槛设置

      ext.u_line1 = +ext.quota ? `满${(this as any).cleanZero(ext.quota)}元可用` : '无门槛';
      (this as any).$set((this as any).item, 'extension', ext);
      // console.log('ext222', (this as any).item.extension)
      cpnResultCode=(this as any).item.extension.cpnResultCode;
      soldOut=(this as any).item.extension.soldOut;
      // 设置券状态
      if (cpnResultCode == 14 || cpnResultCode == 15) {
        (this as any).state = 1; // 领过
      } else if (cpnResultCode == 16 || cpnResultCode == 17 || soldOut) {
        (this as any).state = 2; // 已抢光
      } else {
        (this as any).state = 0; // 未领取
      }
    },
    handleClick() {
      // (this as any).$emit('click-report', (this as any).state);
      (this as any).$emit('click-report');
    },
    cleanZero (value: string) {
      value = value
      let res = /\.0+$/.exec(value)
      if (res) {
        return value.slice(0, res.index)
      }
      return value
    }
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
