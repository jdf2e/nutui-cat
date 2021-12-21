
<template>
  <div :class="['nutcat-price',propClass!=''?propClass:'']">
    <div v-if="needSymbol" class="nutcat-price--symbol" v-html="symbol"></div>
    <div class="nutcat-price--big">
      {{ formatThousands(price) }}
    </div>
    <div class="nutcat-price--point" v-if="checkPoint(price)">.</div>
    <div class="nutcat-price--small" v-if="checkPoint(price)">
      {{ formatDecimal(price) }}
    </div>
  </div>
</template>

<script >
import { createComponent } from "@/utils/create";
const { componentClass, create } = createComponent("price");

export default create({
  props: {
    price: {
      type: [String, Number],
      default: "",
    },
    needSymbol: {
      type: Boolean,
      default: true,
    },
    symbol: {
      type: String,
      default: "&yen;",
    },
    decimalDigits: {
      type: Number,
      default: -1,
    },
    thousands: {
      type: Boolean,
      default: false,
    },
    rounding: {
      type: Boolean,
      default: false,
    },
    propClass:{
      type: String,
      default: "",
    }
  },
  data() {
    return {
      showthousands: this.thousands,
    };
  },

  components: {},
  mounted() {},
  computed: {},
  methods: {
    checkPoint(price) {
      if(this.decimalDigits==0){
        return false;
      }
      return String(price).indexOf(".") > -1;
    },
    formatThousands(price) {
      let num = Number(price);
      let temp;
      if (Number(num.toFixed(0)) == 0) {
        return 0;
      }
      if (this.rounding && this.decimalDigits == 0) {
        temp = num.toFixed(0);
      } else {
        temp = Math.floor(num);
      }
      if (this.showthousands) {
        return (temp || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      } else {
        return temp;
      }
    },
    formatDecimal(price) {
      if (this.checkPoint(price)) {
        let temp = price + "";
        if (this.decimalDigits >0) {
          if (this.rounding) {
            temp = Number(temp).toFixed(this.decimalDigits);
            return temp.split(".")[1];
          } else {
            temp = temp.split(".")[1];
            return temp.substr(0, this.decimalDigits);
          }
        } else {
          return temp.split(".")[1];
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "index.scss";
</style>
