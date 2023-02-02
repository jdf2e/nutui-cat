export default {
  install(Vue): void {
    const files = require.context("@/packages", true, /index\.vue$/);
    files.keys().forEach((component) => {
      const componentEntity = files(component).default;
      Vue.component(componentEntity.name, componentEntity);
    });
  },
};
