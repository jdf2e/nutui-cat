<template>
  <div class="demo full">
    <h2>基础布局</h2>
    <div class="box-item">
      <nutcat-row>
        <nutcat-col :span="24">
          <div class="flex-content">span:24</div>
        </nutcat-col>
      </nutcat-row>
      <nutcat-row>
        <nutcat-col :span="12">
          <div class="flex-content">span:12</div>
        </nutcat-col>
        <nutcat-col :span="12">
          <div class="flex-content flex-content-light">span:12</div>
        </nutcat-col>
      </nutcat-row>
      <nutcat-row>
        <nutcat-col :span="8">
          <div class="flex-content">span:8</div>
        </nutcat-col>
        <nutcat-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
        </nutcat-col>
        <nutcat-col :span="8">
          <div class="flex-content">span:8</div>
        </nutcat-col>
      </nutcat-row>
      <nutcat-row>
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
      </nutcat-row>
    </div>
    <h2>分栏间隔</h2>
    <div class="box-item">
      <nutcat-row :gutter="8">
        <nutcat-col :span="8">
          <div class="flex-content">span:8</div>
        </nutcat-col>
        <nutcat-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
        </nutcat-col>
        <nutcat-col :span="8">
          <div class="flex-content">span:8</div>
        </nutcat-col>
      </nutcat-row>
    </div>
    <h2>Flex布局</h2>
    <div class="box-item">
      <nutcat-row type="flex" wrap="nowrap">
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
      </nutcat-row>
      <nutcat-row type="flex" justify="center">
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
      </nutcat-row>
      <nutcat-row type="flex" justify="end">
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
      </nutcat-row>
      <nutcat-row type="flex" justify="space-between">
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
      </nutcat-row>
      <nutcat-row type="flex" justify="space-around">
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nutcat-col>
        <nutcat-col :span="6">
          <div class="flex-content">span:6</div>
        </nutcat-col>
      </nutcat-row>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('layout');
import Row from '@/packages/row/index.vue';
import Col from '@/packages/col/index.vue';
export default createDemo({
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  }
});
</script>

<style lang="scss" scoped>
.box-item {
  background: #fff;
  margin-bottom: 20px;
  padding: 20px 0;
}
.demo .nutcat-row {
  overflow: hidden;
  &:not(:last-child) .nutcat-col {
    margin-bottom: 15px;
  }
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
