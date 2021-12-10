// import { App } from 'vue';
import Vue from 'vue';
export function createComponent(name: string) {
  const componentName = 'nutcat-' + name;
  const componentClass = 'Nut' + name.slice(0, 1).toUpperCase() + name.slice(1);
  return {
    componentName,
    componentClass,
    create: function(_component: any) {
      _component.baseName = name;
      _component.name = componentClass;
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
