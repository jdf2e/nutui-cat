<template>
  <div class="demo full">
    <h2>基础布局</h2>
    <div class="box-item">
      <NutRow>
        <NutCol :span="24">
          <div class="flex-content">span:24</div>
        </NutCol>
      </NutRow>
      <NutRow>
        <NutCol :span="12">
          <div class="flex-content">span:12</div>
        </NutCol>
        <NutCol :span="12">
          <div class="flex-content flex-content-light">span:12</div>
        </NutCol>
      </NutRow>
      <NutRow>
        <NutCol :span="8">
          <div class="flex-content">span:8</div>
        </NutCol>
        <NutCol :span="8">
          <div class="flex-content flex-content-light">span:8</div>
        </NutCol>
        <NutCol :span="8">
          <div class="flex-content">span:8</div>
        </NutCol>
      </NutRow>
      <NutRow>
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
      </NutRow>
    </div>
    <h2>分栏间隔</h2>
    <div class="box-item">
      <NutRow :gutter="8">
        <NutCol :span="8">
          <div class="flex-content">span:8</div>
        </NutCol>
        <NutCol :span="8">
          <div class="flex-content flex-content-light">span:8</div>
        </NutCol>
        <NutCol :span="8">
          <div class="flex-content">span:8</div>
        </NutCol>
      </NutRow>
    </div>
    <h2>Flex布局</h2>
    <div class="box-item">
      <NutRow type="flex" wrap="nowrap">
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
      </NutRow>
      <NutRow type="flex" justify="center">
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
      </NutRow>
      <NutRow type="flex" justify="end">
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
      </NutRow>
      <NutRow type="flex" justify="space-between">
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
      </NutRow>
      <NutRow type="flex" justify="space-around">
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </NutCol>
        <NutCol :span="6">
          <div class="flex-content">span:6</div>
        </NutCol>
      </NutRow>
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
.demo .NutRow {
  overflow: hidden;
  &:not(:last-child) .NutCol {
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
