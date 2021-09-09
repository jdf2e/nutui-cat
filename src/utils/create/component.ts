// import { App } from 'vue';
import Vue from 'vue';
export function createComponent(name: string) {
  const componentName = 'nutcat-' + name;
  return {
    componentName,
    create: function(_component: any) {
      _component.baseName = name;
      _component.name = componentName;
      _component.install = () => {
        Vue.component(_component.name as string, _component);
      };
      return _component;
    },
    createDemo: function(_component: any) {
      _component.baseName = name;
      _component.name = 'demo-' + name;
      return _component;
    }
  };
}
