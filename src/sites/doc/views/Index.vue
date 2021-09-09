<template>
  <div class="doc-wrap">
    <Header />
    <Nav />
    <div class="doc-content">
      <div class="doc-content-document" :class="{'width': isDemo}">
        <router-view />
      </div>
      <template>
        <!-- <Footer :width="isDemo" /> -->
      </template>
      <template v-if="isDemo">
        <demo-preview :demoUrl="demoUrl"></demo-preview>
      </template>
      <!-- {{ demoUrl }} -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/sites/doc/components/Header.vue';
import Nav from '@/sites/doc/components/Nav.vue';
import Footer from '@/sites/doc/components/Footer.vue';
import DemoPreview from '@/sites/doc/components/DemoPreview.vue';
@Component({
  components: {
    Header,
    Nav,
    Footer,
    DemoPreview
  }
})
export default class Index extends Vue {
  demoUrl: string = 'demo.html';
  isDemo: boolean = true;
  mounted() {
    this.watchDemoUrl(this.$route);
  }
  watchDemoUrl(router) {
    const { origin, pathname } = window.location;
    const demoUrl = `${origin}${pathname.replace(
      'index.html',
      ''
    )}demo.html#${router.path}`;
    this.demoUrl = demoUrl;
    // console.log('this.$route.query', router.name)
    if (['hall', 'shop', 'rank', 'product'].includes(router.name || '')) {
          // console.log('this.$route.query', this.$route.name)
      this.isDemo = false
    } else {
      this.isDemo = true
    }
  }
  async beforeRouteUpdate(to, from, next) {
    await this.watchDemoUrl(to);
    next();
  }
};
</script>

<style lang="scss" scoped>
.doc {
  &-content {
    margin-left: 290px;
    display: flex;
    flex-direction: column;

    &-document {
      min-height: 800px;
      position: relative;
      background: #fff;
      padding: 48px 40px 48px 40px;
      &.width {
        padding-right: 445px;
      }
    }
  }
}
</style>
