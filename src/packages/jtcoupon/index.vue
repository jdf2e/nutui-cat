<template>
  <div :class="classes" :style="styles" @click="handleClick()">
    <div :class="classesCont">
      <div :class="classesInfo">
        <NutText class="sub-quota" row="1">{{item.extension.u_line1}}</NutText>
        <NutText class="sub-limitStr" row="1">{{item.extension.u_line2}}</NutText>
      </div>
      <div class="sub-btn">
        <div v-if="state == 0">立即领取</div>
        <div v-else-if="state == 1">去使用<i class="icon-arrow"></i></div>
        <div v-else-if="state == 2">已抢光</div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
import { Toast } from '@nutui/nutui';
const { componentName, create } = createComponent('jtCoupon');
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
        [componentName]: true,
        [`${componentName}-${(this as any).type}`]: (this as any).type,
        [(this as any).image ? `${componentName}-image` : '']: true,
        [`${componentName}-${(['get','use','ban'] as any)[(this as any).state]}`]: (this as any).state
      };
    },
    classesCont() {
      return {
        [`${componentName}-cont`]: true
      };
    },
    classesInfo() {
      return {
        [`${componentName}-info`]: true
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
      case 'normal': this.setNormalCoupon(); break;
      case 'finance': this.getFinanceCoupon(); break;
      case 'share': this.setShareCoupon(); break;
    }
  },
  methods: {
    // 普通商城券
    setNormalCoupon() {
      let cpnResultCode,soldOut;
      // 处理跨品类拉新券的字段过滤
      let ext = (this as any).item.extension
      let { couponStyle, couponType, subSku } = ext
      ext.u_img = (subSku && subSku[0]) 
        ? subSku[0].img 
        : (this as any).item.pictureUrl
          ? (this as any).item.pictureUrl
          : ''
      ext.u_tit = (this as any).cleanZero(ext.disCount)
      ext.u_line1 = (this as any).cleanZero(ext.quota)
      ext.u_line2 = (this as any).item.desc ? (this as any).item.desc : ext.limitStr
      // 打标
      if((this as any).item.comments[0] == '$提报备注') {
        ext.u_label = ''
      } else {
        if(ext.couponKind == '0') {
          console.log('全品类', (this as any).item)
          ext.u_label = '//img14.360buyimg.com/imagetools/jfs/t1/195318/28/2623/3448/609b45afE641733a6/1e7f343c5ef06ac7.png'
        } else if(ext.userLabel == '100-1' || ext.userLabel == '100-2') {
          console.log('plus', (this as any).item)
          ext.u_label = '//img12.360buyimg.com/imagetools/jfs/t1/188956/31/2750/2587/609b468bE23ebf4c7/b8cd5045221b6a9b.png'
        }
      }
      
      // 金额、门槛设置
      // 京贴
      if (couponStyle == 28) {
        ext.u_line1 = `每满${(this as any).cleanZero(ext.quota)}减${(this as any).cleanZero(ext.disCount)}`
      } else {
        // 折扣券
        if (couponStyle == 3) {
          if (+ext.quota) {
            ext.u_tit = `${Math.round((1 - ext.disCount/ext.quota) * 100) / 10}折`
          }
          ext.u_line1 = +ext.quota && +couponType !== 0 ? `满${(this as any).cleanZero(ext.quota)}元可用` : '无门槛'
        }
        // 满减、立减券
        else if (couponType == 0 || couponType == 1) {
          ext.u_line1 = +ext.quota ? `满${(this as any).cleanZero(ext.quota)}元可用` : '无门槛'
        }
        // 物流券
        if (couponType == 10 && couponStyle == 10) {
          ext.u_line1 = +ext.quota ? `满${(this as any).cleanZero(ext.quota)}元可用` : '无门槛'
        }
        (this as any).$set((this as any).item, 'extension', ext);
      }
      cpnResultCode= (this as any).item.extension.cpnResultCode;
      soldOut= (this as any).item.extension.soldOut;
      // 设置券状态
      if (cpnResultCode == 14 || cpnResultCode == 15) {
        (this as any).state = 1; // 领过
      } else if (cpnResultCode == 16 || cpnResultCode == 17 || soldOut == 1) {
        (this as any).state = 2; // 已抢光
      } else {
        (this as any).state = 0; // 未领取
      }
    },
    handleClick() {
      switch ((this as any).type) {
        case 'normal': (this as any).getCommonCounpon(); break;
        case 'finance': (this as any).getFinanceCoupon(); break;
      }
    },
    // 获取普通商城券
    getCommonCounpon() {
      if ((this as any).state == 0) {
        // 去领取
        let key,roleId;
        key = (this as any).item.extension.key;
        roleId = (this as any).item.extension.roleId;
        console.log('11');
        (this as any).$emit('click-report', (this as any).state);
      } else if ((this as any).state == 1) {
        // 去使用
        if((this as any).timeout){
          clearTimeout((this as any).timeout);
          (this as any).timeout=null;
        }
        
        const { couponKind, batchId, shopId, venderId } = (this as any).item.extension
        if (couponKind == 1 || couponKind == 3) {
          // 跳优惠券页面
          (this as any).$jump.toUseCoupon(batchId)
        } else if (couponKind == 2) {
          // 跳店铺
          (this as any).$jump.toShop(venderId+'')
        } else if (couponKind == 0) {
          // 去秒杀
          (this as any).$jump.toSeckill()
        }
        return
      }
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
