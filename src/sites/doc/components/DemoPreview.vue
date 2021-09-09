<template>
  <div class="doc-demo-preview">
    <iframe :src="demoUrl" frameborder="0"></iframe>
  </div>
</template>


<script>
  export default {
    name: 'preview',
    props: {
      demoUrl: {
        type: String,
        default: 'demo.html'
      },
    },
  }
</script>

<style lang="scss" scoped>
.doc {
  &-demo-preview {
    height: 667px;
    width: 375px;
    position: fixed;
    right: 30px;
    top: 100px;
    box-shadow: #ebedf0 0 4px 12px;
    border-radius: 12px;
    overflow: hidden;
    z-index: 2;
    iframe {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
