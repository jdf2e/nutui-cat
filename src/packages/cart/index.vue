<template>
  <div class="nutcat-cart" @click="handleClick">
    <nutcat-icon v-if="imgUrl==''" :color="color" :type="type" :size="size"></nutcat-icon>
    <img v-else :src="imgUrl" alt="" class="">
  </div>
</template>
  <script>
import { createComponent } from "@/utils/create";
const { componentName, create } = createComponent("cart");

export default create({
  props: {
    size: {
      type: String,
      default: "24px",
    },
    type: {
      type: String,
      default: "cart",
    },
    color:{
      type: String,
      default: "#fa2c19",
    },
    imgUrl:{
      type: String,
      default: "",
    },

  },
  data() {
    return {};
  },

  mounted() {},
  methods: {
    handleClick() {
      this.$emit('cartClik');
    },
  },
});
</script>
  
  <style lang="scss">
@import "index.scss";
</style>
  