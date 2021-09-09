<template>
  <nutcat-row type="flex" gutter="6" flexWrap="nowrap">
    <nutcat-col :span="24 / ~~col" v-for="(item, index) in data" :key="index">
      <template v-if="type == 'normal'">
        <goodsLiveCol2 :data="item"></goodsLiveCol2>
      </template>
      <template v-else-if="type === 'room-1'">
        <roomLiveCol2NoGoods :data="item"></roomLiveCol2NoGoods>
      </template>
      <template v-else-if="type === 'room-2'">
        <roomLiveCol2Goods :data="item"></roomLiveCol2Goods>
      </template>
      <template v-else-if="type === 'room-2'"></template>
    </nutcat-col>
  </nutcat-row>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { create } = createComponent('live');
import roomLiveCol2NoGoods from './roomLiveCol2NoGoods.vue';
import goodsLiveCol2 from './goodsLiveCol2.vue';
import roomLiveCol2Goods from './roomLiveCol2Goods.vue';

export default create({
  components: {
    roomLiveCol2NoGoods,
    goodsLiveCol2,
    roomLiveCol2Goods
  },
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    col: {
      type: [Number, String],
      default: 1
    },
    data: {
      type: Array,
      default: []
    }
  }
});
</script>

<style lang="scss" scoped></style>
