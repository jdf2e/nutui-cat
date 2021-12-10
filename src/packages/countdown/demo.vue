<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <span slot="title">
        <NutCountdown :endTime="endTime" showDays ></NutCountdown>
      </span>
    </nut-cell>

    <h2>自定义展示样式</h2>
    <nut-cell>
      <span slot="title">
        <NutCountdown v-model="resetTime" :endTime="endTime" ref="countdown">
          <div class="countdown-part-box">
            <div class="part-item-symbol">{{ resetTime.d }}天</div>
            <div class="part-item h">{{ resetTime.h }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item m">{{ resetTime.m }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item s">{{ resetTime.s }}</div>
          </div>
        </NutCountdown>
      </span>
    </nut-cell>
  </div>
</template>
  
<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('countdown');
export default createDemo({
  props: {},
  data() {
    return {
      resetTime: {
        d: '1',
        h: '00',
        m: '00',
        s: '00'
      },
      endTime: Date.now() + 100000 * 1000
    };
  },
  methods: {},
  mounted() {
   
  }
});
</script>
  
<style lang="scss" scoped>
.countdown-part-box{
    display: flex;
    align-items: center;

    .part-item{
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 25px;
        background: #E8220E;
        color: #fff;
        font-size: 14px;
        border-radius: 6px;
    }

    .part-item-symbol{
        margin: 0 5px;
    }
}
</style>
  