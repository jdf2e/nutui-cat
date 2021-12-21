<template>
  <div :class="classes" :style="styles" @click="handleClick()">
    <template v-if="col && col == '1'">
      <div :class="classesCont">
        <div :class="classesInfo">
          <template v-if="data.cImage">
            <NutImage class="sub-img" :src="data.extension.c_img"></NutImage>
          </template>
          <!-- 价格 -->
          <template v-if="typeof + data.extension.c_tit == 'number' && !isNaN(+data.extension.c_tit)">
            <p class="sub-price">
              <span class="rmb">&yen;</span>
              {{data.extension.c_tit}}
            </p>
          </template>
          <!-- 文字 -->
          <template v-else>
            <NutText class="sub-price" row="1">{{data.extension.c_tit}}</NutText>
          </template>
          <NutText class="sub-quota" row="1">{{data.extension.c_line1}}</NutText>
          <NutText class="sub-limitStr" row="1">{{data.extension.c_line2}}</NutText>
        </div>
        <div class="sub-btn">
          <div v-if="state == 0">立即领取</div>
          <div v-else-if="state == 1">去使用<i class="icon-arrow"></i></div>
          <div v-else-if="state == 2">已抢光</div>
        </div>
      </div>
      <!-- </template> -->
      <template v-if="data.cLabel">
        <NutTag class="sub-tag" :type="data.cLabel == 'plus' ? data.cLabel : 'red'"
        >
          {{data.cLabel == 'plus' ? '' : data.cLabel}}
        </NutTag>
      </template>
      <template v-if="endTime">
        <div class="sub-endTime">
          {{data.extension.c_endTime}}
        </div>
      </template>
    </template>
    <template v-else>
      <div :class="classesCont">
        <div :class="classesInfo">
          <template v-if="data.cImage">
            <NutImage class="sub-img" :src="data.extension.c_img"></NutImage>
          </template>
          <!-- 价格 -->
          <template v-if="typeof + data.extension.c_tit == 'number' && !isNaN(+data.extension.c_tit)">
            <p class="sub-price">
              <span class="rmb">&yen;</span>
              {{data.extension.c_tit}}
            </p>
          </template>
          <!-- 文字 -->
          <template v-else>
            <NutText class="sub-price" row="1">{{data.extension.c_tit}}</NutText>
          </template>
          <NutText class="sub-quota" row="1">{{data.extension.c_line1}}</NutText>
          <NutText class="sub-limitStr" row="1">{{data.extension.c_line2}}</NutText>
        </div>
        <div class="sub-btn">
          <div v-if="state == 0">立即领取</div>
          <div v-else-if="state == 1">去使用<i class="icon-arrow"></i></div>
          <div v-else-if="state == 2">已抢光</div>
        </div>
      </div>
      <!-- </template> -->
      <template v-if="data.cLabel">
        <NutTag class="sub-tag" :type="data.cLabel == 'plus' ? data.cLabel : 'red'"
        >
          {{data.cLabel == 'plus' ? '' : data.cLabel}}
        </NutTag>
      </template>
      <template v-if="endTime">
        <div class="sub-endTime">
          {{data.extension.c_endTime}}
        </div>
      </template>
    </template>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
import connectData  from '@/utils/connect';
import { Toast } from '@nutui/nutui';
import moment from 'moment'
const { componentClass, create } = createComponent('coupon');
const _toast: any = Toast;

export default create({
  props: {
    item: {
      type: [Array, Object],
      default: () => []
    },
    type: {
      type: [String, Number],
      default: ''
    },
    col: {
      type: [String, Number],
      default: ''
    },
    endTime: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    item(newValue) {
      if(newValue) {
        (this as any).dealData((this as any).item[0], (this as any).item[1])
      }
    }
  },
  data() {
		return {
      data: {},
      state: '',
      timer: null,
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
        [`${componentClass}-${(this as any).col}`]: (this as any).col,
        [(this as any).data.cImage ? `${componentClass}-image` : '']: true,
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
    (this as any).dealData((this as any).item[0], (this as any).item[1])
    // 处理券的字段数据
    switch (this.type) {
      case 'normal': this.setNormalCoupon(); break;
      // case 'finance': this.getFinanceCoupon(); break;
      // case 'share': this.setShareCoupon(); break;
    }
  },
  methods: {
    dealData(item, params) {
      (this as any).data = connectData(item, params);
    },
    // 普通商城券
    setNormalCoupon() {
      // console.log('data', (this as any).data)
      let cpnResultCode,soldOut;
      // 处理跨品类拉新券的字段过滤
      let ext = (this as any).data.extension
      let { couponStyle, couponType, subSku } = ext
      ext.c_img = (subSku && subSku[0]) 
        ? subSku[0].img 
        : (this as any).data.pictureUrl
          ? (this as any).data.pictureUrl
          : ''
      ext.c_tit = (this as any).cleanZero(ext.disCount)
      ext.c_line1 = (this as any).cleanZero(ext.quota)
      // ext.c_line2 = (this as any).data.desc ? (this as any).data.desc : ext.limitStr
      ext.c_line2 = ext.limitStr
      // 打标
      if((this as any).data.comments[0] == '$提报备注') {
        ext.c_label = ''
      } else {
        if(ext.couponKind == '0') {
          console.log('全品类', (this as any).data)
          ext.c_label = '//img14.360buyimg.com/imagetools/jfs/t1/195318/28/2623/3448/609b45afE641733a6/1e7f343c5ef06ac7.png'
        } else if(ext.userLabel == '100-1' || ext.userLabel == '100-2') {
          console.log('plus', (this as any).data)
          ext.c_label = '//img12.360buyimg.com/imagetools/jfs/t1/188956/31/2750/2587/609b468bE23ebf4c7/b8cd5045221b6a9b.png'
        }
      }
      console.log('ext.endTime', ext.endTime)
      // 过期时间
      if(ext.endTime) {
        let resTime = moment(ext.endTime).fromNow()
        if(resTime.indexOf('in') != -1) {
          if(resTime.indexOf('days') != -1){
            ext.c_endTime = resTime.match(/\d+/g) + '天后过期'
            ext.c_endTime111 = '天后过期'
            console.log('ext.c_endTime 1', ext)
          } else if(resTime.indexOf('hours') != -1){
            ext.c_endTime = resTime.match(/\d+/g) + '小时后过期'
          }
          console.log('ext.c_endTime', ext)
        }
      }
      console.log('ext.endTime 1', ext)
      
      // 金额、门槛设置
      // 京贴
      if (couponStyle == 28) {
        ext.c_line1 = `每满${(this as any).cleanZero(ext.quota)}减${(this as any).cleanZero(ext.disCount)}`
      } else {
        // 折扣券
        if (couponStyle == 3) {
          if (+ext.quota) {
            ext.c_tit = `${Math.round((1 - ext.disCount/ext.quota) * 100) / 10}折`
          }
          ext.c_line1 = +ext.quota && +couponType !== 0 ? `满${(this as any).cleanZero(ext.quota)}元可用` : '无门槛'
        }
        // 满减、立减券
        else if (couponType == 0 || couponType == 1) {
          ext.c_line1 = +ext.quota ? `满${(this as any).cleanZero(ext.quota)}元可用` : '无门槛'
        }
        // 物流券
        if (couponType == 10 && couponStyle == 10) {
          ext.c_line1 = +ext.quota ? `满${(this as any).cleanZero(ext.quota)}元可用` : '无门槛'
        }
        (this as any).$set((this as any).data, 'extension', ext);
      }
      cpnResultCode= (this as any).data.extension.cpnResultCode;
      soldOut= (this as any).data.extension.soldOut;
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
        key = (this as any).data.extension.key;
        roleId = (this as any).data.extension.roleId;
        console.log('11');
        (this as any).$emit('click-report', (this as any).data, (this as any).state);
      } else if ((this as any).state == 1) {
        // 去使用
        if((this as any).timeout){
          clearTimeout((this as any).timeout);
          (this as any).timeout=null;
        }
        const { couponKind, batchId, shopId, venderId } = (this as any).data.extension
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
