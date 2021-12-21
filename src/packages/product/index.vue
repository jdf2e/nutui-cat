<template>
  <div>
  <!-- <NutRow :gutter="gu :type="rowType" v-if="data[0] && data[0].length > 0">
    <NutCol :span="24 / ~~col" v-for="(item, index) in dealData(data[0], data[1])" :key="index"> -->
      <template v-if="type == 'normal-1'">
        <normal1
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameRow="nameRow"
          :descRow="descRow"
          :linePricePre="linePricePre"
          :pricePre="pricePre"
          :bgUrl="bgUrl"
          v-on="$listeners"
        >
          <template v-slot:tag>
            <slot name="tag"></slot>
          </template>
          <template v-slot:preName>
            <slot name="preName"></slot>
          </template>
          <slot></slot>
        </normal1>
      </template>
      <template v-else-if="type == 'normal-2'">
        <normal2
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameRow="nameRow"
          :descRow="descRow"
          :linePricePre="linePricePre"
          :pricePre="pricePre"
          :bgUrl="bgUrl"
          v-on="$listeners"
        >
          <template slot="tag">
            <slot name="tag"></slot>
          </template>
          <template slot="preName">
            <slot name="preName"></slot>
          </template>
          <template slot="priceSlot">
            <slot name="priceSlot"></slot>
          </template>
          <slot></slot>
        </normal2>
      </template>
      <template v-else-if="type == 'normal-3'">
        <normal3
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :nameRow="nameRow"
          :descRow="descRow"
          :linePricePre="linePricePre"
          :pricePre="pricePre"
          :bgUrl="bgUrl"
          v-on="$listeners"
        >
          <template slot="tag">
            <slot name="tag"></slot>
          </template>
          <!-- <template slot="preName">
            <slot name="preName"></slot>
          </template> -->
          <template slot="priceSlot">
            <slot name="priceSlot"></slot>
          </template>
          <slot></slot>
        </normal3>
      </template>
      <template v-else-if="type == 'normal-4'">
        <normal4
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :nameRow="nameRow"
          :descRow="descRow"
          :pricePre="pricePre"
          :linePricePre="linePricePre"
          :bgUrl="bgUrl"
          :iconType="iconType"
          :bottomOperate='bottomOperate'
          v-on="$listeners"
        >
          <template slot="tag">
            <slot name="tag"></slot>
          </template>
          <template slot="preName">
            <slot name="preName"></slot>
          </template>
          <template slot="priceAfterSlot">
            <slot name="priceAfterSlot"></slot>
          </template>
          <template slot="content">
            <slot name="content"></slot>
          </template>
          <slot></slot>
        </normal4>
      </template>
      <template v-else-if="type == 'normal-5'">
        <normal5
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :nameRow="nameRow"
          :descRow="descRow"
          :pricePre="pricePre"
          :linePricePre="linePricePre"
          :bgUrl="bgUrl"
          :iconType="iconType"
          v-on="$listeners"
        >
          <template slot="tag">
            <slot name="tag"></slot>
          </template>
          <template slot="preName">
            <slot name="preName"></slot>
          </template>
          <template slot="priceAfterSlot">
            <slot name="priceAfterSlot"></slot>
          </template>
          <template slot="desc">
            <slot name="desc"></slot>
          </template>
          <slot></slot>
        </normal5>
      </template>
      <template v-else-if="type == 'normal-6'">
        <normal6
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :nameRow="nameRow"
          :descRow="descRow"
          :pricePre="pricePre"
          :linePricePre="linePricePre"
          :bgUrl="bgUrl"
          :iconType="iconType"
          v-on="$listeners"
        >
          <template slot="tag">
            <slot name="tag"></slot>
          </template>
          <template slot="preName">
            <slot name="preName"></slot>
          </template>
          <template slot="priceAfterSlot">
            <slot name="priceAfterSlot"></slot>
          </template>
          <template slot="desc">
            <slot name="desc"></slot>
          </template>
          <slot></slot>
        </normal6>
      </template>
      <template v-else-if="type == 'normal-7'">
        <normal7
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :nameRow="nameRow"
          :descRow="descRow"
          :pricePre="pricePre"
          :linePricePre="linePricePre"
          :foldName="foldName"
          :bgUrl="bgUrl"
          :iconType="iconType"
          v-on="$listeners"
        >
          <template slot="tag">
            <slot name="tag"></slot>
          </template>
          <template slot="preName">
            <slot name="preName"></slot>
          </template>
          <template slot="priceAfterSlot">
            <slot name="priceAfterSlot"></slot>
          </template>
          <template slot="desc">
            <slot name="desc"></slot>
          </template>
          <slot></slot>
        </normal7>
      </template>
      <template v-else-if="type == 'heart'">
        <heart
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :nameRow="nameRow"
          :descRow="descRow"
          :pricePre="pricePre"
          :linePricePre="linePricePre"
          :bgUrl="bgUrl"
          :iconType="iconType"
          :heartName="heartName"
          v-on="$listeners"
        >
          <template slot="tag">
            <slot name="tag"></slot>
          </template>
          <template slot="preName">
            <slot name="preName"></slot>
          </template>
          <template slot="priceAfterSlot">
            <slot name="priceAfterSlot"></slot>
          </template>
          <template slot="desc">
            <slot name="desc"></slot>
          </template>
          <slot></slot>
        </heart>
      </template>
      <template v-else-if="type == 'fold'">
        <fold
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :nameRow="nameRow"
          :descRow="descRow"
          :pricePre="pricePre"
          :linePricePre="linePricePre"
          :bgUrl="bgUrl"
          :iconType="iconType"
          v-on="$listeners"
        >
          <template slot="tag">
            <slot name="tag"></slot>
          </template>
          <template slot="preName">
            <slot name="preName"></slot>
          </template>
          <template slot="priceSlot">
            <slot name="priceSlot"></slot>
          </template>
          <slot></slot>
        </fold>
      </template>
      <template v-else-if="type == 'feed-shop'">
        <feedShop
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :nameRow="nameRow"
          :descRow="descRow"
          :pricePre="pricePre"
          :linePricePre="linePricePre"
          :bgUrl="bgUrl"
          :iconType="iconType"
          :heartName="heartName"
          v-on="$listeners"
        >
          <template slot="preName">
            <slot name="preName"></slot>
          </template>
          <template slot="priceAfter">
            <slot name="priceAfter"></slot>
          </template>
          <template slot="shop">
            <slot name="shop"></slot>
          </template>
          <slot></slot>
        </feedShop>
      </template>
      <template v-else-if="type == 'normal-free'">
        <template v-if="col == '1'">
          <NutImage
            class="img-box"
            :src="src"
            :width="imgWidth"
            :height="imgHeight"
            v-on="$listeners"
          >
          </NutImage>
          <div class="product-right">
            <div class="product-content">
              <slot name="rightSlot"></slot>
            </div>
          </div>
        </template>
      </template>
      <!-- </div> -->
    <!-- </NutCol>
  </NutRow> -->
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentClass, create } = createComponent('product');
import connectData  from '@/utils/connect';
// import normal1 from './normal1/index.vue';
import normal1 from './normal1.vue';
import normal2 from './normal2.vue';
import normal3 from './normal3.vue';
import normal4 from './normal4.vue';
import normal5 from './normal5.vue';
import normal6 from './normal6.vue';
import normal7 from './normal7.vue';
import heart from './heart.vue';
import fold from './fold.vue';
import feedShop from './feedShop.vue';

export default create({
  components: {
    normal1,
    normal2,
    normal3,
    normal4,
    normal5,
    normal6,
    normal7,
    heart,
    fold,
    feedShop
    // normal8,
  },
  props: {
    data: {
      type: [Array, Object],
      default: function() {
        return [];
      }
    },
    imgWidth: {
      type: [String, Number],
      default: ''
    },
    imgHeight: {
      type: [String, Number],
      default: ''
    },
    nameRow: {
      type: [String, Number],
      default: '2'
    },
    descRow: {
      type: [String, Number],
      default: '1'
    },
    tag: {
      type: String,
      default: ''
    },
    pricePre: {
      type: String,
      default: ''
    },
    priceAfter: {
      type: [String, Number],
      default: ''
    },
    linePricePre: {
      type: String,
      default: ''
    },
    iconType: {
      type: String,
      default: ''
    },
    heartName: {
      type: String,
      default: ''
    },
    foldName: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: ''
    },
    bgUrl: {
      type: String,
      default: ''
    },
    col: {
      type: [String, Number],
      default: []
    },
    type: {
      type: [String, Number],
      default: ''
    },
    bottomOperate:{
      type: Object,
      default: ()=>{}
    },
  },
  data() {
    return {};
  },
  mounted() {
    
  },
  computed: {},
  methods: {
    dealData(data, params) {
      // console.log('connectData', connectData(data, params))
      return connectData(data, params)
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
