<template>
  <div>
  <!-- <NutRow :gutter="gutter" :scrollX="scrollX" :type="rowType" v-if="data[0] && data[0].length > 0">
    <NutCol :span="24 / ~~col" v-for="(item, index) in dealData(data[0], data[1])" :key="index"> -->
      <template v-if="type == 'normal-1'">
        <normal1
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameColor="nameColor"
          :descColor="descColor"
          :nameRow="nameRow"
          :descRow="descRow"
          :imgWidth="imgWidth"
          :imgHeight="imgHeight"
          :bgUrl="bgUrl"
          :bgColor="bgColor"
          v-on="$listeners"
        >
          <slot></slot>
        </normal1>
      </template>
      <template v-else-if="type == 'normal-2'">
        <normal2
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameColor="nameColor"
          :descColor="descColor"
          :nameRow="nameRow"
          :descRow="descRow"
          :imgWidth="imgWidth"
          :imgHeight="imgHeight"
          :bgUrl="bgUrl"
          :bgColor="bgColor"
          v-on="$listeners"
        >
          <slot></slot>
        </normal2>
      </template>
      <template v-else-if="type == 'normal-3'">
        <normal3
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameColor="nameColor"
          :descColor="descColor"
          :nameRow="nameRow"
          :descRow="descRow"
          :imgWidth="imgWidth"
          :imgHeight="imgHeight"
          :bgColor="bgColor"
          v-on="$listeners"
        >
          <slot></slot>
        </normal3>
      </template>
      <template v-else-if="type == 'normal-4'">
        <normal4
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameColor="nameColor"
          :descColor="descColor"
          :nameRow="nameRow"
          :descRow="descRow"
          :imgWidth="imgWidth"
          :imgHeight="imgHeight"
          :bgColor="bgColor"
          v-on="$listeners"
        >
          <slot></slot>
        </normal4>
      </template>
      <template v-else-if="type == 'normal-5'">
        <normal5
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameColor="nameColor"
          :descColor="descColor"
          :nameRow="nameRow"
          :descRow="descRow"
          :imgWidth="imgWidth"
          :imgHeight="imgHeight"
          :bgColor="bgColor"
          v-on="$listeners"
        >
          <slot></slot>
        </normal5>
      </template>
      <template v-else-if="type == 'normal-6'">
        <normal6
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameColor="nameColor"
          :descColor="descColor"
          :nameRow="nameRow"
          :descRow="descRow"
          :imgWidth="imgWidth"
          :imgHeight="imgHeight"
          :bgColor="bgColor"
          v-on="$listeners"
        >
          <slot></slot>
        </normal6>
      </template>
      <template v-else-if="type == 'normal-7'">
        <normal7
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameColor="nameColor"
          :descColor="descColor"
          :nameRow="nameRow"
          :descRow="descRow"
          :imgWidth="imgWidth"
          :imgHeight="imgHeight"
          :bgColor="bgColor"
          v-on="$listeners"
        >
          <slot></slot>
        </normal7>
      </template>
      <template v-else-if="type == 'normal-8'">
        <normal8
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameColor="nameColor"
          :descColor="descColor"
          :nameRow="nameRow"
          :descRow="descRow"
          :imgWidth="imgWidth"
          :imgHeight="imgHeight"
          :bgColor="bgColor"
          :bgTopColor="bgTopColor"
          v-on="$listeners"
        >
          <slot></slot>
        </normal8>
      </template>
      <template v-else-if="type == 'left-1'">
        <NutRow type="flex">
          <NutCol :span="leftSpan">
            <div class="hall-left">
              <template v-if="src">
                <NutImage class="img-box" :src="src"></NutImage>
              </template>
              <template v-if="logo">
                <NutImage class="logo-box" :src="logo"></NutImage>
              </template>
              <!-- <div class="shop-content"> -->
              <template v-if="name">
                <NutText class="sub-name" row="1">{{ name }}</NutText>
              </template>
              <template v-if="desc">
                <NutText class="sub-desc" row="2">{{ desc }}</NutText>
              </template>
              <slot name="left"></slot>
              <!-- </div> -->
            </div>
          </NutCol>
          <NutRow type="flex" class="hall-right">
            <slot name="right"></slot>
          </NutRow>
        </NutRow>
      </template>
      <template v-else-if="type == 'free'">
        <free
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameColor="nameColor"
          :descColor="descColor"
          :nameRow="nameRow"
          :descRow="descRow"
          :imgWidth="imgWidth"
          :imgHeight="imgHeight"
          :bgColor="bgColor"
          v-on="$listeners"
        >
          <template slot="left">
            <slot name="left"></slot>
          </template>
          <template slot="right">
            <slot name="right"></slot>
          </template>
          <template slot="top">
            <slot name="top"></slot>
          </template>
          <template slot="bottom">
            <slot name="bottom"></slot>
          </template>
          <slot></slot>
        </free>
      </template>
    <!-- </NutCol>
  </NutRow> -->
</div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { create } = createComponent('hall');
import connectData  from '@/utils/connect';
import normal1 from './normal1.vue';
import normal2 from './normal2.vue';
import normal3 from './normal3.vue';
import normal4 from './normal4.vue';
import normal5 from './normal5.vue';
import normal6 from './normal6.vue';
import normal7 from './normal7.vue';
import normal8 from './normal8.vue';
import free from './free.vue';

export default create({
  components: {
    normal1,
    normal2,
    normal3,
    normal4,
    normal5,
    normal6,
    normal7,
    normal8,
    free
  },
  props: {
    data: {
      type: [Array, Object],
      default:() => {}
    },
    imgWidth: {
      type: [String, Number],
      default: ''
    },
    imgHeight: {
      type: [String, Number],
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    nameColor: {
      type: String,
      default: ''
    },
    nameRow: {
      type: [String, Number],
      default: '1'
    },
    descColor: {
      type: String,
      default: ''
    },
    descRow: {
      type: [String, Number],
      default: '1'
    },
    tag: {
      type: String,
      default: ''
    },
    leftSpan: {
      type: [String, Number],
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
    bgTopColor: {
      type: String,
      default: ''
    },
    bgTopUrl: {
      type: String,
      default: ''
    },
    col: {
      type: [String, Number],
      default: '3'
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  mounted() {
  },
  watch: {
  },
  computed: {
  },
  methods: {
    dealData(data, params) {
      // console.log('connectData', data)
      return connectData(data, params)
    }
  }
});
</script>

<style lang="scss" scoped>
// @import 'index.scss';
</style>
