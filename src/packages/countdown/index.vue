<template>
  <nut-countdown 
    :value="value"
    :paused="paused"
    :showPlainText="showPlainText"
    :showDays="showDays"
    :startTime="startTime"
    :endTime="endTime"
    v-on="$listeners"
  >
    <slot></slot>
  </nut-countdown>
</template>
<script>
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('countdown');

export default create({
  props: {
    // 时间变化，天时分秒
    value: {
      type: Object,
      default: ()=>{return {}}
    },
    paused: {
      default: false,
      type: Boolean
    },
    showPlainText: {
      default: true,
      type: Boolean
    },
    showDays: {
      default: false,
      type: Boolean
    },
    startTime: {
      // 可以是服务器当前时间
      type: [Number, String],
      validator(v) {
        const dateStr = new Date(v).toString().toLowerCase();
        return dateStr !== 'invalid date';
      }
    },
    endTime: {
      type: [Number, String],
      validator(v) {
        const dateStr = new Date(v).toString().toLowerCase();
        return dateStr !== 'invalid date';
      }
    }
  },
  data() {
    return {
    };
  },
  components: {},
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods: {
  },
  destroyed() {
  }
});



</script>

<style lang="scss">
@import 'index.scss';
</style>
  