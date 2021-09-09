
<template>
  <div>
  <!-- <nutcat-row :gutter="gutter" :scrollX="scrollX" :type="rowType">
    <nutcat-col :span="24 / ~~col" v-for="(item, index) in dealData(data[0], data[1])" :key="index"> -->
      <template v-if="type == 'normal-1'">
        <normal1
          :data="dealData(data[0], data[1])"
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
          :col="col"
          :type="type"
          :tag="tag"
          :nameRow="nameRow"
          :descRow="descRow"
          :bgColor="bgColor"
          :bgUrl="bgUrl"
          v-on="$listeners"
        >
          <template slot="tag">
            <slot name="tag"></slot>
          </template>
          <slot></slot>
        </normal2>
      </template>
      <template v-if="type == 'normal-3'">
        <normal3
          :data="dealData(data[0], data[1])"
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
        </normal3>
      </template>
      <template v-if="type == 'normal-4'">
        <normal4
          :data="dealData(data[0], data[1])"
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
        </normal4>
      </template>
      <template v-else-if="type == 'normal-5'">
        <normal5
          :data="dealData(data[0], data[1])"
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
        </normal5>
      </template>
      <template v-else-if="type == 'normal-6'">
        <normal6
          :data="dealData(data[0], data[1])"
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
        </normal6>
      </template>
      <template v-else-if="type == 'lbs'">
        <lbs
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameRow="nameRow"
          :descRow="descRow"
          :bgColor="bgColor"
          :bgUrl="bgUrl"
          v-on="$listeners"
        >
          <template slot="tag">
            <slot name="tag"></slot>
          </template>
          <slot></slot>
        </lbs>
      </template>
      <template v-else-if="type == 'feed-1'">
        <feed1
          :data="dealData(data[0], data[1])"
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
      <template v-else-if="type == 'left'">
        <left
          :data="dealData(data[0], data[1])"
          :col="col"
          :type="type"
          :tag="tag"
          :nameRow="nameRow"
          :descRow="descRow"
          :bgColor="bgColor"
          :bgUrl="bgUrl"
          v-on="$listeners"
        >
          <template slot="tag">
            <slot name="tag"></slot>
          </template>
          <slot></slot>
        </left>

        <template v-if="src">
          <nutcat-image class="img-box" :src="src"></nutcat-image>
        </template>
        <template v-if="logo">
          <nutcat-image class="logo-box" :src="logo"></nutcat-image>
        </template>
          <template v-if="name">
            <nutcat-text class="sub-name" row="1">{{name}}</nutcat-text>
          </template>
          <template v-if="desc">
            <nutcat-text class="sub-desc" row="1">{{desc}}</nutcat-text>
          </template>
      </template>
    <!-- </nutcat-col>
  </nutcat-row> -->
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { create } = createComponent('shop');
import connectData  from '@/utils/connect';
import normal1 from './normal1.vue'
// import normal1 from './normal1/index.vue';
import normal2 from './normal2.vue';
import normal3 from './normal3.vue';
import normal4 from './normal4.vue';
import normal5 from './normal5.vue';
import normal6 from './normal6.vue';
import lbs from './lbs.vue';
import left from './left.vue';
import feed1 from './feed1.vue';

export default create({
  components: {
    normal1,
    normal2,
    normal3,
    normal4,
    normal5,
    normal6,
    lbs,
    left,
    feed1
  },
  props: {
    rowType: {
      type: String,
      default: ''
    },
    gutter: {
      type: [String, Number],
      default: ''
    },
    scrollX: {
      type: Boolean,
      default: false
    },
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
    distance: {
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
      default: '1'
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
		return {
    };
	},
  mounted() {
  },
  watch: {
    data(newVal, oldVal) {
      if(newVal) {
        this.data = newVal;
        // console.log('newVal', newVal)
      }
    }
  },
  computed: {
  },
  methods: {
    dealData(data, params) {
      return connectData(data, params)
    }
  }
});
</script>

<style lang="scss" scoped>
// @import 'index.scss';
</style>
