<template>
  <div :class="classes" :style="styles" @click="handleClick()">
    <nutcat-image class="sub-image" :src="item.extension.u_img"></nutcat-image>
    <div :class="classesInfo">
      <nutcat-text class="sub-price" row="1"><i class="rmb">&yen;</i>{{item.extension.u_tit}}</nutcat-text>
      <nutcat-text class="sub-limitStr" row="1">{{item.extension.u_line1}}</nutcat-text>
    </div> 
    <div :class="classesCont">
      <nutcat-text class="sub-name" row="1">{{item.extension.shopName}}</nutcat-text>
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
const { componentName, create } = createComponent('shareCoupon');
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
      console.log('ext', ext)
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
      console.log('ext 1', ext)
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
      switch ((this as any).type) {
        case 'normal': (this as any).getCommonCounpon(); break;
        case 'finance': (this as any).getFinanceCoupon(); break;
        case 'share': (this as any).getFinanceCoupon(); break;
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
        console.log('22');
        (this as any).baseService.newBabelAwardCollection(key, roleId).then((response: any) => {
          if (!response) {
            return;
          }
          // 若 subcode=A1, 按钮显示去使用；
          // 若 subcode=A14、A15，按钮显示已抢光；
          // 若 subcode=A12、A13，按钮显示去使用；
          // 若 code=601，网关返回tips“很抱歉，没抢到~~”，前端透传；
          // else，显示“网络异常，请检查后尝试”；
          const { code, subCode, subCodeMsg } = response;
          console.log('response', response);
          //领取成功
          var isSuccess = ["A1", "A12", "A13", "B13", "C1210"].includes(subCode)
          //抢光
          var robbed = [ "A14", "A15", "B9", "B10", "B11", "B12", "B14", "B15", "C1206", "C1211", "1401"].includes(subCode)
          if (code == "3") {
            (this as any).$reportClick('Babel_dev_adv_youhuiquan', (this as any).$get('item.srv.Babel_dev_adv_youhuiquan'), {
              abtest: (this as any).stateHeaderIndex,
              useFlag: '0'
            })
            (this as any).$jump.toLogin();
            return;
          }
          if (code == "601") {
            _toast.text("很抱歉，没抢到~~", {
              icon:"https://img14.360buyimg.com/imagetools/jfs/t1/161944/30/3200/1865/6004f88bE9bd95e5b/83c78eecb1c62ad3.png"
            });
            return
          }
          //领取成功
          if (isSuccess) {
            (this as any).state = 1;
            _toast.text("抢券成功，快去购买吧~", {
              icon:"https://img10.360buyimg.com/imagetools/jfs/t1/155257/3/15216/2252/6004f885E4e248abf/8162d39f1d82472e.png"
            });
            return;
          } else if (robbed) {
            (this as any).state = 2;
          }

          _toast.text(subCodeMsg || "活动太火爆，请稍后再试~", {
            icon:"https://img14.360buyimg.com/imagetools/jfs/t1/161944/30/3200/1865/6004f88bE9bd95e5b/83c78eecb1c62ad3.png"
          });
        })
        .catch(e => {
          // console.log(e);
          _toast.text("网络链接失败，请稍后再试~", {
            icon:"https://img14.360buyimg.com/imagetools/jfs/t1/161944/30/3200/1865/6004f88bE9bd95e5b/83c78eecb1c62ad3.png"
          });
        });
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
    // 获取金融券
    getFinanceCoupon() {
      if ((this as any).state == 0) {
        const { key, roleId } = (this as any).item.extension;
        (this as any).baseService.newBabelAwardCollection(key, roleId).then((response: any) => {
          if (!response) { return }
          const {
            code,
            subCode,
            subCodeMsg
          } = response;
          if (code == "3") {
              (this as any).$jump.toLogin();
              return;
          }
          let success = code == 0 && (
            subCode == "0" ||
            subCode == "0030" || 
            subCode == "20008"
          );
          let robbed =
              subCode == "0020" ||
              subCode == "0021" ||
              subCode == "20011" ||
              subCode == "20012" ||
              subCode == "20033";
          if (success) {
            (this as any).state = 1;
            (this as any).timeout=setTimeout(()=>{
              if ((this as any).item.extension && (this as any).item.extension.jumpLink) {
                (this as any).$jump.toUrl((this as any).item.extension.jumpLink)
              }
            },2000);
            (this as any).$toast("抢券成功，快去购买吧~");
            return;
          }
          if (robbed) {
            (this as any).state = 2
          }
          (this as any).$toast(subCodeMsg || "活动太火爆，请稍后再试~");
        }, () => {

        }).catch(e => {
          console.log(e);
          (this as any).$toast("网络链接失败，请稍后再试~");
        });
      } else if ((this as any).state == 1) {
        if((this as any).timeout){
          clearTimeout((this as any).timeout);
          (this as any).timeout=null;
        }
        if ((this as any).item.extension && (this as any).item.extension.jumpLink) {
          (this as any).$jump.toUrl((this as any).item.extension.jumpLink)
        }
      }
    },
    // 获取分享券
    getShareCoupon() {
      (this as any).$reportClick('Babel_dev_adv_21NHNV_ShareCoupon', (this as any).$get('item.srv.Babel_dev_adv_21NHNV_ShareCoupon'))
      (this as any).$jump.toUrl((this as any).item.extension.sourceLink);
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
