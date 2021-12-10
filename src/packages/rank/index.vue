
<template>
  <div>
  <!-- <NutRow :gutter="gutter" :scrollX="scrollX" :type="rowType" v-if="data[0] && data[0].length > 0">
    <nutcat-col :span="24 / ~~col" v-for="(item, index) in dealData(data[0], data[1])" :key="index"> -->
      <template v-if="type == 'normal-1'">
        <normal1
          :data="dealData(data[0], data[1])"
          :productData="dealData(productData[0], productData[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameRow="nameRow"
          :descRow="descRow"
          :bgColor="bgColor"
          :bgUrl="bgUrl"
          v-on="$listeners"
        >
          <slot></slot>
        </normal1>
      </template>
      <template v-else-if="type == 'normal-2'">
        <normal2
          :data="dealData(data[0], data[1])"
          :productData="dealData(productData[0], productData[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameRow="nameRow"
          :descRow="descRow"
          :bgColor="bgColor"
          :bgUrl="bgUrl"
          v-on="$listeners"
        >
          <slot></slot>
        </normal2>
      </template>
      <template v-else-if="type == 'normal-3'">
        <normal3
          :data="dealData(data[0], data[1])"
          :productData="dealData(productData[0], productData[1])"
          :col="col"
          :type="type"
          :nameRow="nameRow"
          :descRow="descRow"
          :tag="tag"
          :bgColor="bgColor"
          :bgUrl="bgUrl"
          v-on="$listeners"
        >
          <slot></slot>
        </normal3>
      </template>
      <template v-else-if="type == 'normal-4'">
        <normal4
          :data="dealData(data[0], data[1])"
          :productData="dealData(productData[0], productData[1])"
          :col="col"
          :type="type"
          :nameRow="nameRow"
          :descRow="descRow"
          :tag="tag"
          :bgColor="bgColor"
          :bgUrl="bgUrl"
          v-on="$listeners"
        >
          <slot></slot>
        </normal4>
      </template>
      <template v-else-if="type == 'feed-1'">
        <feed1
          :data="dealData(data[0], data[1])"
          :productData="dealData(productData[0], productData[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameRow="nameRow"
          :descRow="descRow"
          :bgColor="bgColor"
          :bgUrl="bgUrl"
          v-on="$listeners"
        >
          <slot></slot>
        </feed1>
      </template>
    <!-- </nutcat-col>
  </NutRow> -->
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('rank');
import connectData  from '@/utils/connect';
import normal1 from './normal1.vue';
import normal2 from './normal2.vue';
import normal3 from './normal3.vue';
import normal4 from './normal4.vue';
import feed1 from './feed1.vue';

export default create({
  components: {
    normal1,
    normal2,
    normal3,
    normal4,
    feed1
  },
  props: {
    data: {
      type: [Array, Object],
      default: function() {
        return [];
      }
    },
    productData: {
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
      default: '1'
    },
    descRow: {
      type: [String, Number],
      default: '1'
    },
    tag: {
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
    type: {
      type: String,
      default: ''
    },
    col: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
		return {
    };
	},
  mounted() {
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
