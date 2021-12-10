
<template>
  <NutRow :gutter="gutter" :scrollX="scrollX" :type="rowType">
    <nutcat-col :span="24 / ~~col" v-for="(item, index) in data" :key="index">
      <template v-if="type == 'feed-1'">
        <video-feed1
          :data="item"
          :col="col"
          :type="type"
          :scrollX="scrollX"
          :tag="tag"
          :nameRow="nameRow"
          :descRow="descRow"
        >
          <slot></slot>
        </video-feed1>
      </template>
    </nutcat-col>
  </NutRow>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('video');
import videoFeed1 from './videoFeed1.vue';

export default create({
  components: {
    videoFeed1
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
    nameRow: {
      type: [String, Number],
      default: ''
    },
    descRow: {
      type: [String, Number],
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    col: {
      type: [String, Number],
      default: '1'
    },
    type: {
      type: [String, Number],
      default: '1'
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
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
