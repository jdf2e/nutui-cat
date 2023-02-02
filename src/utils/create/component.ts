/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-11-23 17:04:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-02-02 11:23:13
 */
// import { App } from 'vue';
import Vue from 'vue';
export function createComponent(name: string) {
  const componentClass = 'nutcat-' + name;
  const componentName = 'Nut' + name.slice(0, 1).toUpperCase() + name.slice(1);
  return {
    componentName,
    componentClass,
    create: function(_component: any) {
      _component.baseName = componentName;
      _component.name = componentName;
      _component.name = componentName;
      _component.propTypes = _component;
      // console.log('_component2', _component)
      _component.install = () => {
        Vue.component(_component.name as string, _component);
      };
      return _component;
    },
    createDemo: function(_component: any) {
      _component.baseName = componentName;
      _component.name = 'demo-' + name;
      return _component;
    }
  };
}
